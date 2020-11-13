import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import Oferte from './components/Oferte';
import Termeni from './components/Termeni';
import Gdpr from './components/Gdpr';
import NotFound from './components/NotFound'

function App() {
  return (
      <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/contact" component={Contact} />
          <Route path="/servicii" component={Services} />
          <Route path="/oferte" component={Oferte} />
          <Route path="/termeni-si-conditii" component={Termeni} />
          <Route path="/gdpr" component={Gdpr} />
          <Route component={NotFound} />
      </Switch>
  );
}

export default App;
