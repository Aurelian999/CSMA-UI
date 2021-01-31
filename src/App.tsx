import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import Oferte from './components/Oferte';
import Termeni from './components/Termeni';
import Gdpr from './components/Gdpr';
import NotFound from './components/NotFound'
import Signup from './components/pages/Signup';
import { ROUTES } from './constants';
import Login from './components/pages/Login';

function App(): JSX.Element {
  return (
    <Switch>
      <Route path={ROUTES.HOME} component={Home} exact />
      <Route path={ROUTES.CONTACT} component={Contact} />
      <Route path={ROUTES.SERVICES} component={Services} />
      <Route path={ROUTES.OFFERS} component={Oferte} />
      <Route path={ROUTES.TERMS_AND_CONDITIONS} component={Termeni} />
      <Route path={ROUTES.GDPR} component={Gdpr} />
      <Route path={ROUTES.LOGIN} component={Login} />
      <Route path={ROUTES.SIGNUP} component={Signup} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
