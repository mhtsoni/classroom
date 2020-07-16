import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {loginStore} from './redux-store/store.js'
import App from './App.js';
function Index(){
  return (
    <Provider store={loginStore}>
      <App/>
    </Provider>
  )
}
ReactDOM.render(<Index/>,document.getElementById('root'))
