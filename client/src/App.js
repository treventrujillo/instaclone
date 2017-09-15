import React, { Component } from 'react';
import Home from './components/Home'
import { Container } from 'semantic-ui-react';
import axios from 'axios';

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Home />
        </Container>
      </div>
    )
  }
}

export default App;
