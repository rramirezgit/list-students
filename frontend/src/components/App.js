import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from '../pages/Home';
import Students from '../pages/Students';
import StudentNew from '../pages/StudentNew';
import StudentDetails from '../pages/StudentDetailsContainer';
import StudentEdit from '../pages/StudentEdit';
import NotFound from '../pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/students" component={Students} />
          <Route exact path="/students/new" component={StudentNew} />
          <Route exact path="/students/:studentId" component={StudentDetails} />
          <Route exact path="/students/:studentId/edit" component={StudentEdit} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
