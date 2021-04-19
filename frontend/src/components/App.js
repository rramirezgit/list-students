import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from '../pages/Home';
import { NewStudent } from '../pages/NewStudent';


export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/students/new" component={NewStudent} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

