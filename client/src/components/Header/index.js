import React,{useState} from 'react';
import { loginStore } from '../../redux-store/store';
import {Provider} from 'react-redux'
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
const { Header, Sider, Content } = Layout;

function Header(){
    const [collapsed,setCollapsed] = useState(true);
    const toggle = ()=>{
        setCollapsed(!collapsed)
    }
    return(
        <Provider store= {loginStore}>
        <Layout>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1" icon={<UserOutlined />}>
                Home
              </Menu.Item>
              <Menu.Item key="2" icon={<UploadOutlined />}>
                Work History
              </Menu.Item>
              <Menu.Item key="3" icon={<VideoCameraOutlined />}>
                Your Performance Chakra
              </Menu.Item>
              <Menu.Item key="3" icon={<VideoCameraOutlined />}>
                About Us
              </Menu.Item>
              <Menu.Item key="3" icon={<VideoCameraOutlined />}>
                Contact Us
              </Menu.Item>
            </Menu>
          </Sider>
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: ()=>toggle(),
              })}
            </Header>
        </Layout>


      </Provider>
    );
}
export default Header;