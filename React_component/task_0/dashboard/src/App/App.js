import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Notifications />
        <Header />
        <Login />
        <Footer />
      </div>
    );
  }
}

export default App;
