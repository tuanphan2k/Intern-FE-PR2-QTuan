import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import myReducer from './redux/User/reducers';
import mySaga from './redux/User/sagas';
import './style/styles.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.less';

const sagaMiddleware = createSagaMiddleware();
const myStore = createStore(myReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
