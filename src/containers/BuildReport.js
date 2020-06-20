import React from 'react';

class BuildReport extends React.Component{
    
    componentDidMount(){
        const activities = this.props;

        var eachactivity = activities.map(function (activity){
            console.log(activity);
            return(activity.startDate)
        })
    }

}
export default BuildReport;