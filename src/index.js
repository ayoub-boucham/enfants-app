import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Table from './Components/Table';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Table/>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
