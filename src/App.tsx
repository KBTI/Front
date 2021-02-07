import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Result from './components/Result';
import Layout from './components/common/Layout';
import { KbtiContextProvider } from './components/context';
import Question from './components/Question';

function App(): JSX.Element {
  return (
    <Router>
      <KbtiContextProvider>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/question" component={Question} />
            <Route exact path="/result/:id" component={Result} />
          </Switch>
        </Layout>
      </KbtiContextProvider>
    </Router>
  );
}

export default App;
