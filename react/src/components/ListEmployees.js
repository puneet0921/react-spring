import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
class ListEmployees extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }
    deleteEmployee(id) {
        EmployeeService.deleteEmployee(id).then((res) => {
            this.setState({ employees: this.state.employees.filter(employee => employee.id !== id) });
        });
    }
    componentDidMount() {
        EmployeeService.getEmployee().then((res) => {
            this.setState({ employees: res.data });
        });
    }
    addEmployee() {
        this.props.history.push('addEmployees')
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Employee Details</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
                </div>
                <div className="row" align="center">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                        <tr key={employee.id}>
                                            <td>{employee.firstName}</td>
                                            <td>{employee.lastName}</td>
                                            <td>{employee.emailId}</td>
                                            <td>
                                                <button onClick={() => this.deleteEmployee(employee.id)} className="btn-danger">Delete</button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
export default ListEmployees;