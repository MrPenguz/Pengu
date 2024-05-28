import React, { Fragment} from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {
  return (
    <Fragment>
      <Header/>
      <Nav/>
      <Main/>
      <Footer/>
    </Fragment>
  );
};

export default App;
