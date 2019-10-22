import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Cardapios from './pages/Cardapios';
import New from './pages/New';
import Editar from './pages/Editar';
import Contagem from './pages/Contagem';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/cardapios" component={Cardapios} />
        <Route path="/new" component={New} />
        <Route path="/editar" component={Editar} />
        <Route path="/contagem" component={Contagem} />
      </Switch>
    </BrowserRouter>
  );
}