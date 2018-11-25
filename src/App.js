import React, { Component } from 'react';
import { Contact, Home, Neighborhood, Reston, Tour } from './pages';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Switch, Route } from 'react-router-dom';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/neighborhood' component={Neighborhood} />
          <Route exact path='/reston' component={Reston} />
          <Route exact path='/tour' component={Tour} />
          <Route path='/' component={Home} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
