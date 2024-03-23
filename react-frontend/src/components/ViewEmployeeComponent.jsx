import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Event Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Event Name: </label>
                            <div> { this.state.employee.eventName }</div>
                        </div>
                        <div className = "row">
                            <label> Sport: </label>
                            <div> { this.state.employee.sportName }</div>
                        </div>
                        <div className = "row">
                            <label> Event Date: </label>
                            <div> { this.state.employee.date }</div>
                        </div>
                        <div className = "row">
                            <label> Time: </label>
                            <div> { this.state.employee.time }</div>
                        </div>
                        <div className = "row">
                            <label> Venue: </label>
                            <div> { this.state.employee.venue }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent
