import React from 'react';
import ReactDOM from 'react-dom';
import './Code/App.css';
import Header from './Parts/Header';
import Footer from './Parts/Footer';
import Main from './Parts/Main';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (<div classname="App">
    <Header/>
    <Main/>
    <Footer/>
  </div>
  )
}
export default App;
