import React from 'react'
import Table from '../components/Table.js';
class GetActivities extends React.Component{
    state = {
        activities:[],
        isLoading: true
    }
    componentDidMount() {
        fetch('https://ulfix.backlog.com/api/v2/issues?apiKey=1H0ln17z0cb2tGznBxsZRwPbgZldx8WM6LHSS0ngqy451p1kM7KtwmHqvWvQalEC&projectId[]=30508&assigneeId[]=103605&startDateSince=2020-03-01&startDateUntil=2020-03-31&sort=startDate&order=asc&count=100')
        .then(response => response.json())
        .then(activities => this.setState({activities}))
      }
      render() {
        return(
          <Table activities ={this.state.activities}/>
        )    
        
      }
}

export default GetActivities;