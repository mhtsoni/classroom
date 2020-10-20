import React from 'react';
import 'antd/dist/antd.css';
import { Button, notification } from 'antd';
import './style.css'
const openNotification = (props) => {
  notification.open({
    message: props.course_name,
    description:
      props.description,
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};

function Nav(props) {
    return (
        <div className="Description">
          <Button type="primary" onClick={()=>openNotification(props)}>
              Description
          </Button>
          <a href={props.channel}>
            <Button type="primary">
                Subscribe
            </Button>
          </a>
        </div>
    )
}

export default Nav
