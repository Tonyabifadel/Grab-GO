import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import Occasion from './components/Occasion'; 
import Main from './components/main/Main'; 
import All_Products from './components/All_Products'; 
import Hair from './components/categories/Hair'
import Nails from './components/categories/Nails'
import Lips from './components/categories/Lips'
import Face from './components/categories/Face'
import Soap from './components/categories/Soap'
import Customize from './components/Customize'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/occasions" element={<Occasion />} />
        <Route path="/main" element={<Main />} />
        <Route path="/all_products" element={<All_Products />} />
        <Route path="/hair" element={<Hair />} />
        <Route path="/nails" element={<Nails />} />
        <Route path="/lips" element={<Lips />} />
        <Route path="/face" element={<Face />} />
        <Route path="/soap" element={<Soap />} />
        <Route path="/customize" element={<Customize />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
