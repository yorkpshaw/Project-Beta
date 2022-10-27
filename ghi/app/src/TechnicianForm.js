import React from 'react';

class TechnicianForm extends React.Component {
    state = {
        userInput: {
            name: '',
            employee_number: '',
        },
        hasSubmit: false,
    }

    handleChange = (e) => {
        const value = e.target.value;
        const key = e.target.name;
        this.setState({
            userInput: {...this.state.userInput,
            [key]: value},
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const technicianURL = `http://localhost:8080/api/technicians/`;
        const fetchOptions = {
            method: 'post',
            body: JSON.stringify(this.state.userInput),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(technicianURL, fetchOptions);
        if (response.ok) {
            this.setState({
                userInput: {},
                hasSubmit: true,
            })
        }
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
                                <input onChange={this.handleChange} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                                <label htmlFor="name">Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleChange} placeholder="Employee Number" required-type="number" name="employee_number" id="employee_number" className="form-control" />
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
