import React from 'react';
import ReportersDropdown from '../components/ReportersDropdown.js';


class GetReporters extends React.Component{
    state = {
        reporters:[]
    }
    componentDidMount() {
        fetch('https://ulfix.backlog.com/api/v2/projects/30508/users?apiKey=1H0ln17z0cb2tGznBxsZRwPbgZldx8WM6LHSS0ngqy451p1kM7KtwmHqvWvQalEC')
        .then(response => response.json())
        .then(reporters => this.setState({reporters}))
      }
      render() {
        return(
            <ReportersDropdown reporters = {this.state.reporters} />  
        )       
    }
}

export default GetReporters;