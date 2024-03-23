import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
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
        this.updateEvent = this.updateEvent.bind(this);
    }

    componentDidMount(){
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

    updateEvent = (e) => {
        e.preventDefault();
        let employee = {eventName: this.state.eventName, sportName: this.state.sportName, date: this.state.date, time: this.state.time, venue: this.state.venue};
        console.log('employee => ' + JSON.stringify(employee));
        console.log('id => ' + JSON.stringify(this.state.id));
        EmployeeService.updateEmployee(employee, this.state.id).then( res => {
            this.props.history.push('/events');
        });
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

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Employee</h3>
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

                                        <button className="btn btn-success" onClick={this.updateEvent}>Save</button>
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

export default UpdateEmployeeComponent
