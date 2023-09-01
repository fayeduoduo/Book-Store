import React from 'react';
import Router from './Router';
import './Styles/App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';

const App = (props) => {
  return (
    <div className="App">
      <Header />
      <Router match={props.match} />
      <Footer />
    </div>
  );
}
export default App;
