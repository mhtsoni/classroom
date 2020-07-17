const express = require('express')
const Joi = require('joi');
const app = express()
const path = require('path');
require('./prod.js')(app);
// Admin Bro
const AdminBro = require('admin-bro')
const AdminBroExpressjs = require('admin-bro-expressjs')

// We have to tell AdminBro that we will manage mongoose resources with it
AdminBro.registerAdapter(require('admin-bro-mongoose'))

var cors = require('cors')
app.use(cors())
app.use(express.json())
const mongoose = require('mongoose');

const LoginValidationSchema = Joi.object().keys({
  employee_id: Joi.string().min(1).max(30).required(),
  password: Joi.string().required()
});

mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://MohitSoni:mohitsoni19699@cluster0-y9yts.mongodb.net/test?retryWrites=true&w=majority')
 .then(() => console.log('Connected…'))
 .catch(err => console.error(err.message));
// Fetch Site Users
 const usersSchema = new mongoose.Schema({
    employee_id: String,
    name: String,
    email: String,
    password: String,
    usertype: String
   });
  /* const worksSchema = new mongoose.Schema({
      employee_id: String,
      date: String,
      start: String,
      end: String,
      description: String,
      email: String,
      lat: String,
      long: String
     });
     */
    const coursesSchema = new mongoose.Schema({
      video:String,
      course_name:String,
      course_id: String,
      course_duration:String,
      prerequicites:String,
      description:String,
      topics_covered:String
     });
const Users = mongoose.model('users', usersSchema);
async function FetchUser(){
    app.post('/api/users',async (req,res)=>{
        const result =await  Joi.validate({ employee_id: req.body.employee_id, password: req.body.password }, LoginValidationSchema).then(async ()=>{

              const user = await Users
              .findOne({ employee_id: req.body.employee_id, password : req.body.password})
              .select({ name: 1, employee_id: 1 });
              console.log('mohit')
              res.send(user);
          }
        ).catch((err)=>{
          res.send(err.message)
        })
    })
}
FetchUser();
const Courses = mongoose.model('courses', coursesSchema);
async function FetchAllCourses(){
    app.post('/api/courses',async (req,res)=>{
              const course = await Courses.find().select({course_name:1,course_duration:1,description:1,video:1});
              res.send(course);
    })
}
FetchAllCourses();

async function FetchSingleCourse(){
  app.post('/api/course',async (req,res)=>{
            const course = await Courses.findOne({course_id:req.body.course_id}).select({course_name:1,course_duration:1,description:1,video:1});
            res.send(course);
  })
}
FetchSingleCourse();
/*const Works = mongoose.model('works', worksSchema);
async function FetchWorkHistory(){
    app.post('/api/workhistory',async (req,res)=>{ 
        const work = await Works
        .find({ employee_id: req.body.employee_id}).select({
            date: 1,
            start: 1,
            end: 1,
            description:1,
            email: 1,
            lat: 1,
            long: 1
        });
        res.send(work);
    })
}
FetchWorkHistory(); 
*/
// Pass all configuration settings to AdminBro
const adminBro = new AdminBro({
    resources: [Users,Courses],
    rootPath: '/admin',
  })
// Build and use a router which will handle all AdminBro routes
const router = AdminBroExpressjs.buildAuthenticatedRouter(adminBro, {
    authenticate: async (employee_id, password) => {
      const user = await Users.findOne({ employee_id })
      if (user) {
        if (password === 'mohit@D123') {
          return user
        }
      }
      return false
    },
    cookiePassword: 'some-secret-password-used-to-secure-cookie',
  })

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.use(adminBro.options.rootPath, router)
app.listen(process.env.PORT || 3030,()=>console.log('Listening on port 3030'));