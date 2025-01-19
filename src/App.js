import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TeamPage from './pages/TeamPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={TeamPage} />
      </Switch>
    </Router>
  );
}

export default App;
