import React,{useState} from 'react';
import LoginForm from './components/LoginForm'
import { loginStore } from './redux-store/store';
import {Provider} from 'react-redux'
import 'antd/dist/antd.css';
import {connect} from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Index from './pages';
import About from './pages/about';
import Contact from './pages/contact';
import BoardPage from './pages/board';
import PreviousClasses from './pages/previousClasses';
import { Button,Drawer, Menu, Row } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import './index.css';
import Logo from './assets/images/Logo.png';
import NavBar from './components/Navbar'
import { Cornfrence } from './pages/doubts';
const menu= (
  <Menu mode="inline">
                <Menu.Item key="1" icon={<UserOutlined />}>
                  <Link to="/">Live Class</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<UploadOutlined />}>
                  <Link to="/previousclasses">All Classes</Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<VideoCameraOutlined />}>
                  <Link to="/about">About</Link>
                </Menu.Item>
                <Menu.Item key="4" icon={<VideoCameraOutlined />}>
                  <Link to="/contact">Contact Us</Link>
                </Menu.Item>
                <Menu.Item key="5" icon={<VideoCameraOutlined />}>
                  <Link to="/doubts">Doubts</Link>
                </Menu.Item>
                <Menu.Item key="6" icon={<VideoCameraOutlined />}>
                  <Link to="/board">White Board</Link>
                </Menu.Item>
              </Menu>
)
function App(props) {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
    return (
        <div>
          <Router>
            <Provider store= {loginStore}>
            <React.StrictMode>
            <Row className='nav'>
              {(window.innerWidth<=900) && !visible && (
                <div>
              <img className="logo" src={Logo} alt='logo'/>
              <Button className="barsMenu" type="primary" onClick={showDrawer}>
                Open
              </Button>
              </div>
              )}
              {
                !(window.innerWidth<=900) && (<NavBar/>)
              }
              <Drawer
                title={<img className="logo" src={Logo} alt='logo'/>}
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
              >
                {menu}
              </Drawer>
            </Row>
            
              {
                    props.login && 
                        <Switch>
                          <Route exact path="/">
                            <Index/>
                          </Route>
                          <Route path="/about">
                            <About/>
                          </Route>
                          <Route path="/contact">
                            <Contact/>
                          </Route>
                          <Route path="/previousclasses">
                            <PreviousClasses/>
                          </Route>
                          <Route path="/doubts">
                            <Cornfrence/>
                          </Route>
                          <Route path="/board">
                            <BoardPage/>
                          </Route>
                        </Switch>
                    }
                    {
                    !props.login &&
                    <LoginForm/>
                    }
                  </React.StrictMode>
                </Provider>
              </Router>
            </div>
      )
    }
  
const mapStateToProps = (state) =>{
  return {
      employee_id : state.employee_id,
      password : state.password,
      login : state.login,
      userName : state.userName
  }
}

export default connect(mapStateToProps)(App)
