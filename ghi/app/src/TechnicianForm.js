import React from 'react';

class TechnicianForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            employee_number: '',
            hasSubmit: false,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmployeeNum = this.handleChangeEmployeeNum.bind(this);
    }


    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state}
        delete data.hasSubmit;

        const technicianURL = `http://localhost:8080/api/technicians/`;
        const fetchOptions = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const techResponse = await fetch(technicianURL, fetchOptions);
        if (techResponse.ok) {
            this.setState({
                name: '',
                employee_number: '',
                hasSubmit: true,
            })
        }
    }

    handleChangeName(event) {
        const value = event.target.value;
        this.setState({ name: value })
    }

    handleChangeEmployeeNum(event) {
        const value = event.target.value;
        this.setState({ employee_number: value })
    }

    render () {

        let messageClasses = 'alert alert-primary d-none mb-0';
        let formClasses = '';
        if (this.state.hasSubmit) {
            messageClasses = 'alert alert-success mb-0';
            formClasses = 'd-none';
        }

        return (
            <div className = "row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Add a new technician</h1>
                        <form className = {formClasses} onSubmit={this.handleSubmit} id="create-technician-form">
                            <div className="form-floating mb-3">
                                <input onChange={this.handleChangeName} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                                <label htmlFor="name">Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleChangeEmployeeNum} placeholder="Employee Number" required-type="number" name="employee_number" id="employee_number" className="form-control" />
                                <label htmlFor="employee_number">Employee Number</label>
                            </div>
                            <button className="btn btn-success">Add a new employee</button>
                        </form>
                        <div className={messageClasses} id="success-message">
                            The employee has been added
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TechnicianForm;
