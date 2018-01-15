import React from 'react';
import ReactDOM from 'react-dom';
import Root from './config/Root';
import { AppContainer } from 'react-hot-loader';
import store from './store/store';
import {Provider} from 'react-redux';
const render = (Component) => {
  ReactDOM.render(
    
    <Provider store={store}>
      <Component />
    </Provider>  
    ,
    document.getElementById('root'),
  );
};

render(Root);
// if (module.hot) {
//   module.hot.accept('./config/Root', () => {
//     const newApp = require('./config/Root').default;
//     render(newApp);
//   });
// }

