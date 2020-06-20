import React from 'react';
import BuildReport from '../containers/BuildReport.js';
class Table extends React.Component{
  render(){
     const{activities} = this.props
     if(activities.length > 0 ){
      return(
        <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Actividad</th>
            <th>Horas</th>
          </tr>
        </thead>
        <tbody>
        {
          activities.map(function (activity){
            return(
              <tr>
                <td>{activity.startDate}</td>
                <td>{activity.summary}</td>
                <td>{activity.actualHours}</td>
              </tr> 
            )
          })
        }
        </tbody>
      </table>
      )
    } else { 
       return (<div></div>)
    }
  }
}
  
  export default Table;