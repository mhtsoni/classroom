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
import LogOut from '../Logout';
const menu= (
  <Menu mode="horizontal">
                <Menu.Item key="0">
                  <Link to="/">
                    <img className="logo1" src={Logo} alt='logo'/>
                  </Link>
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