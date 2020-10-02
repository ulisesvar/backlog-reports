import React from 'react';
import { CSVLink } from "react-csv";

class Table extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      cvsString:''
    };
  }
 activitiesGrouped = [];
 mystring='';

 
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
          //var newActivities = [];
          newActivities.summary += '\n' + activities[j].summary;       
          newActivities.actualHours += parseFloat(activities[j].actualHours);
          newActivities.startDate = activities[j].startDate;
        }
      }
      newActivities.summary = '"'+newActivities.summary+'"';
      this.activitiesGrouped.push(newActivities);
    }
  }
  for (var i = 0; i < this.activitiesGrouped.length; i++){
   this.mystring += new Date(this.activitiesGrouped[i].startDate).toLocaleDateString('en-US', {timeZone: 'UTC'}) + ',' + "Desarrollo" + ',' +  ',' +
              this.activitiesGrouped[i].summary + ','+
              this.activitiesGrouped[i].actualHours + '\r\n'
  }
}
  render(){
     const{activities} = this.props
     if(activities.length > 0 ){
      this.buidNewArray(activities)
      const download = this.mystring.toString();
      return(
        <div>
        <table  id="activities" class="table table-striped table-hover table-sm">
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
      <CSVLink data={download}>Download Report</CSVLink>
      </div>
      )
    } else { 
       return (<div></div>)
    }
  }
}
  
  export default Table;