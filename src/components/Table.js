import React from 'react';

class Table extends React.Component{
  render(){
     const{activities} = this.props
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
  }
}
  
  export default Table;