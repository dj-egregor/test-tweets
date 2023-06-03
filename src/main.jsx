import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter basename="/test-tweets/"> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import { createRoot } from 'react-dom/client';
// import App from './App.jsx';
// import './index.css';

// createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter basename="/test-tweets/">
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );
