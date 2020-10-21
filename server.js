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


mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://MohitSoni:mohitsoni19699@cluster0-y9yts.mongodb.net/test?retryWrites=true&w=majority')
 .then(() => console.log('Connected…'))
 .catch(err => console.error(err.message));



    const coursesSchema = new mongoose.Schema({
      video:String,
      course_name:String,
      course_id: String,
      course_duration:String,
      prerequicites:String,
      description:String,
      topics_covered:String
     });
const Courses = mongoose.model('courses', coursesSchema);


async function FetchSingleCourse(){
  app.get('/',async (req,res)=>{
            var n=await Courses.countDocuments();
            var r = Math.floor(Math.random() * n);
            const course = await Courses.find().limit(1).skip(r);;
            res.send(course);
  })
}
FetchSingleCourse();


const adminBro = new AdminBro({
    resources: [Courses],
    rootPath: '/admin',
  })


// Build and use a router which will handle all AdminBro routes
const router = AdminBroExpressjs.buildAuthenticatedRouter(adminBro, {
    authenticate: async (employee_id, password) => {
        if (employee_id==='1' && password === 'mohit@D123') {
          return true;
        }
      return false
    },
    cookiePassword: 'some-secret-password-used-to-secure-cookie',
  })

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));
  // Handle React routing, return all requests to React app
  app.use('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.use(adminBro.options.rootPath, router)
app.listen(process.env.PORT || 3030,()=>console.log('Listening on port 3030'));