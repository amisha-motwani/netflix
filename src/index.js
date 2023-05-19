import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import reportWebVitals from './reportWebVitals';
import FirstRow from './FirstRow';
// import SecondRow from './SecondRow';
import ThirdRow from './ThirdRow';
import LastRow from './LastRow';
import Try1 from './Try1';
import Try2 from './Try2';
import SecondRow from './SecondRow';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <div style={{backgroundColor:"#00081d"}}>
   <FirstRow/>
   </div>
   <SecondRow/>
    <ThirdRow/>
    <LastRow/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
