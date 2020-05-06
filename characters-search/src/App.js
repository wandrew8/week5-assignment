import React from 'react';
import Home from './pages/Home';
import Single from './pages/Single';
import Favorites from './pages/Favorites';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.scss';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true
    }
  }

  render() {
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/hero/:heroName" component={Single} />
          <Route path="/favorites" component={Favorites} />
        </Switch>
      </Router>
    )
  }
}

export default App;