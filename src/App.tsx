import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Result from './components/Result';
import Layout from './components/common/Layout';

function App(): JSX.Element {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/result/:id" component={Result} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
