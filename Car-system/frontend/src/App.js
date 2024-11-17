 
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CarListPage from './pages/CarListPage';
import CarDetailPage from './pages/CarDetailPage';
import CarCreatePage from './pages/CarCreatePage';
import CarEditPage from './pages/CarEditPage';
import PrivateRoute from './components/PrivateRoute';
import Layout from './components/Layout';
import Notification from './components/Notification';

function App() {
  return (
    <>
      <Switch>
        {/* Redirect root path to /login */}
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>

        {/* Public Routes */}
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />

        {/* Private Routes */}
        <PrivateRoute path="/cars">
          <Layout>
            <Switch>
              {/* More Specific Routes First */}
              <Route exact path="/cars/new" component={CarCreatePage} />
              <Route exact path="/cars/:id/edit" component={CarEditPage} />
              <Route exact path="/cars/:id" component={CarDetailPage} />
              <Route exact path="/cars" component={CarListPage} />
              {/* Redirect unknown /cars/* routes to /cars */}
              <Redirect to="/cars" />
            </Switch>
          </Layout>
        </PrivateRoute>

        {/* Catch-all Redirect to /login */}
        <Redirect to="/login" />
      </Switch>
      <Notification /> {/* Include Notification component */}
    </>
  );
}

export default App;
