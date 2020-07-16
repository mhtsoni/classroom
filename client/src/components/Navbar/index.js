import React from 'react';
import { Menu} from 'antd';
import {
  Link
} from "react-router-dom";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import './index.css';
import Logo from '../../assets/images/Logo.png';
const menu= (
  <Menu mode="horizontal">
                <Menu.Item key="0">
                  <Link to="/">
                    <img className="logo1" src={Logo} alt='logo'/>
                  </Link>
                </Menu.Item>
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
const NavBar=()=>{
    return (
        <div>
            {menu}
        </div>
    );
}
export default NavBar;