import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// render(
//   <Provider store={store} >
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );