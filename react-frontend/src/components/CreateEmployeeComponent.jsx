import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            eventName: '',
            sportName:'',
            date: '',
            time: '',
            venue:'',
        }

        this.changeEventNameHandler = this.changeEventNameHandler.bind(this);
        this.changeSportNameHandler = this.changeSportNameHandler.bind(this);
        this.changeDateHandler = this.changeDateHandler.bind(this);
        this.changeTimeHandler = this.changeTimeHandler.bind(this);
        this.changeVenueHandler = this.changeVenueHandler.bind(this);
        this.saveOrUpdateEvent = this.saveOrUpdateEvent.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
                let employee = res.data;
                this.setState({eventName: employee.eventName,
                    sportName: employee.sportName,
                    date: employee.date,
                    time: employee.time,
                    venue: employee.venue,
                });
            });
        }        
    }
    saveOrUpdateEvent = (e) => {
        e.preventDefault();
        let employee = {eventName: this.state.eventName, sportName: this.state.sportName, date: this.state.date, time: this.state.time, venue: this.state.venue};
        console.log('employee => ' + JSON.stringify(employee));

        // step 5
        if(this.state.id === '_add'){
            EmployeeService.createEmployee(employee).then(res =>{
                this.props.history.push('/events');
            });
        }else{
            EmployeeService.updateEmployee(employee, this.state.id).then( res => {
                this.props.history.push('/events');
            });
        }
    }
    
    changeEventNameHandler= (event) => {
        this.setState({eventName: event.target.value});
    }

    changeSportNameHandler= (event) => {
        this.setState({sportName: event.target.value});
    }

    changeDateHandler= (event) => {
        this.setState({date: event.target.value});
    }

    changeTimeHandler= (event) => {
        this.setState({time: event.target.value});
    }

    changeVenueHandler= (event) => {
        this.setState({venue: event.target.value});
    }

    cancel(){
        this.props.history.push('/events');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Event</h3>
        }else{
            return <h3 className="text-center">Update Event</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container" >
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Event Name: </label>
                                            <input placeholder="Event Name" name="eventName" className="form-control" 
                                                value={this.state.eventName} onChange={this.changeEventNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Sport Name: </label>
                                            <input placeholder="Sport Name" name="sportName" className="form-control" 
                                                value={this.state.sportName} onChange={this.changeSportNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Date: </label>
                                            <input placeholder="Date" name="date" className="form-control" 
                                                value={this.state.date} onChange={this.changeDateHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Time: </label>
                                            <input placeholder="Time" name="time" className="form-control" 
                                                value={this.state.time} onChange={this.changeTimeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Venue: </label>
                                            <input placeholder="Venue" name="venue" className="form-control" 
                                                value={this.state.venue} onChange={this.changeVenueHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateEvent}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateEmployeeComponent
