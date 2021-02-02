import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
class AddEmployee extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            emailId: ''
        }
        this.firstHandler=this.firstHandler.bind(this);
        this.lastHandler = this.lastHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
    }
    saveEmployee = (e) => {
        e.preventDefault();
        let employee = { firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId }
        console.log('employee =>' + JSON.stringify(employee))
        EmployeeService.createEmployee(employee).then(res => {
            this.props.history.push('employee')
        });
    }
    cancel() {
        this.props.history.push('employee')
    }
    firstHandler = (event) => {
        this.setState({ firstName: event.target.value })
    }
    lastHandler = (event) => {
        this.setState({ lastName: event.target.value })
    }
    emailHandler = (event) => {
        this.setState({ emailId: event.target.value })
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <br />
                        <div className="card">
                            <div className="card-header bg-custom">
                                <h3 align="center">Add Employee</h3>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>First Name</label>
                                        <input type="text" placeholder="First Name" name="firstName" className="form-control"
                                            value={this.state.firstName} onChange={this.firstHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name</label>
                                        <input type="text" placeholder="Last Name" name="lastName" className="form-control"
                                            value={this.state.lastName} onChange={this.lastHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Email Id</label>
                                        <input type="text" placeholder="Email Id" name="emailId" className="form-control"
                                            value={this.state.emailId} onChange={this.emailHandler} />
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveEmployee}>Save</button>
                                    &nbsp;&nbsp;
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default AddEmployee;