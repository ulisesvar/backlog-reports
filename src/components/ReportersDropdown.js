import React from 'react';
import Table from './Table';

class ReportersDropdown extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        value: '', 
        activities:[],
        isLoading: true
    };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      async handleChange(event) {
        await this.setState({value: event.target.value}, ()=>{console.log('empleado:' + this.state.value)});
         this.componentDidMount(this.state.value);
      }

       handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }

      
      componentDidMount(userId) {
          console.log('Hola' + this.state.value);
        if(this.state.value !== ''){
            fetch('https://ulfix.backlog.com/api/v2/issues?apiKey=1H0ln17z0cb2tGznBxsZRwPbgZldx8WM6LHSS0ngqy451p1kM7KtwmHqvWvQalEC&projectId[]=30508&assigneeId[]='+userId+'&startDateSince=2020-03-01&startDateUntil=2020-03-31&sort=startDate&order=asc&count=100')
            .then(response => response.json())
            .then(activities => this.setState({activities})) 
        }  
      }

  render(){
     const{reporters} = this.props
     return(
    <div>
        <div class="row">
            <div class="col">
                <div class="form-group">
                    <select class="form-control" id="exampleFormControlSelect1" onChange={this.handleChange}>
                        <option href="#" value=''>Elige un mes</option>
                        <option href="#" value=''>Enero</option>
                        <option href="#" value=''>Febrero</option>
                        <option href="#" value=''>Marzo</option>
                    </select>
                </div>
            </div>
            <div class="col">
                <div class="form-group">
                    <select class="form-control" id="exampleFormControlSelect1" onChange={this.handleChange}>
                        <option href="#" value=''>Selecciona un Empleado</option>
                    {
                        reporters.map(function (reporter){
                        return(
                            <option id={reporter.name} href="#" value={reporter.id}>{reporter.name}</option>
                        )
                        })
                    }
                    </select>
                </div>
            </div>
            <div class="col">
                <a href="#" class="btn btn-secondary active" role="button">Descarga Reporte</a>
            </div>
        </div>
        <div class="row">
                <div class="col">
                    {
                        <Table activities ={this.state.activities} />
                    }
                </div>   
        </div>
    </div>     

     )
  }
}
  
  export default ReportersDropdown;