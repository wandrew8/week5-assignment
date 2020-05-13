import React from 'react';
import Home from './pages/Home';
import Single from './pages/Single';
import Favorites from './pages/Favorites';
import Error from './pages/Error';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.scss';

class App extends React.Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/hero/:heroId" component={Single} />
          <Route path="/favorites" component={Favorites} />
          <Route path="*" component={Error} />
        </Switch>
      </Router>
    )
  }
}

export default App;