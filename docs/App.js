import React, { Component } from 'react';
import GetReporters from './containers/GetReporters.js'

class App extends Component {
  render(){
    return(
      <div>
        <div>
          <div class="container" id='reporters'>
            <GetReporters />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
