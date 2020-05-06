import React from 'react';
import Home from './pages/Home';
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
      <div>
        <h1>SuperHero Search</h1>
        <Home />
      </div>
    )
  }
}

export default App;