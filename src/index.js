import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// هنا أساس الرياكت واللي يعني أن نوم بعرض ال تطبيق في جسم ملف ال اتش تي ام ال الوحيد
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


