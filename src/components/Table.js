import React from 'react';
import BuildReport from '../containers/BuildReport.js';
import { act } from 'react-dom/test-utils';
class Table extends React.Component{

 activitiesGrouped = [];

 dateIsIn(date) {
 for(var activity of this.activitiesGrouped)
    var isContained = false;
    if(activity.startDate === date){
      isContained = true;
     }
   return(isContained)
 }


buidNewArray(activities){
  
  for (var i = 0; i < activities.length; i++){
    var newActivities = [];
    newActivities.summary = activities[i].summary;
    newActivities.actualHours = parseFloat(activities[i].actualHours);
    newActivities.startDate = activities[i].startDate;
    if(this.activitiesGrouped.length === 0 || !this.dateIsIn(activities[i].startDate)){
      for (var j = i+1; j < activities.length; j++){       
        if (activities[j].startDate === activities[i].startDate) {
          var newActivities = [];
          newActivities.summary = activities[i].summary + '\n' + activities[j].summary;       
          newActivities.actualHours = parseFloat(activities[i].actualHours)+ parseFloat(activities[j].actualHours);
          newActivities.startDate = activities[j].startDate;
        }
      }
      this.activitiesGrouped.push(newActivities);
    }
  }
}


  render(){
     const{activities} = this.props
     if(activities.length > 0 ){
      this.buidNewArray(activities)
      return(
        <table class="table table-striped table-hover table-sm">
        <thead class="thead-dark">
          <tr>
            <th>Fecha</th>
            <th>Actividad</th>
            <th>Horas</th>
          </tr>
        </thead>
        <tbody>
        {
          this.activitiesGrouped.map(function (activity){
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