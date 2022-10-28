import React from 'react';

class NewSalesPersonForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            salesperson_name: '',
            employee_num: '',
            hasSignedUp: false,
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmployeeNumChange = this.handleEmployeeNumChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = { ...this.state };
        delete data.hasSignedUp;

        const locationUrl = 'http://localhost:8090/api/salespeople/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(locationUrl, fetchConfig);
        if (response.ok) {
            const newSalesPerson = await response.json();

            const cleared = {
                salesperson_name: '',
                employee_num: '',
                hasSignedUp: true,
            };
            this.setState(cleared);
        }
    }

    handleNameChange(event) {
        const value = event.target.value;
        this.setState({ salesperson_name: value })
    }

    handleEmployeeNumChange(event) {
        const value = event.target.value;
        this.setState({ employee_num: value })
    }

    render() {
            let messageClasses = 'alert alert-success d-none mb-0';
            let formClasses = '';
            if (this.state.hasSignedUp) {
              messageClasses = 'alert alert-success mb-0';
              formClasses = 'd-none';
              setTimeout(() => window.location.replace(`http://localhost:3000/sales/salesperson`), 3000)
            }
        return (
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Add a new sales person</h1>
                        <form className={formClasses} onSubmit={this.handleSubmit} id="create-sale-form">
                            <div className="form-floating mb-3">
                                <input value={this.state.salesperson_name} onChange={this.handleNameChange} placeholder="Salesperson Name" required type="text" name="salesperson_name" id="salesperson_name" className="form-control" />
                                <label htmlFor="salesperson_name">Enter salesperson name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input value={this.state.employee_num} onChange={this.handleEmployeeNumChange} placeholder="Employee Num" required type="text" name="employee_num" id="employee_num" className="form-control" />
                                <label htmlFor="employee_num">Enter employee number</label>
                            </div>
                            <button className="btn btn-primary">Create</button>
                        </form>
                        <div className={messageClasses} id="success-message">
                  New Employee Recorded!
                  </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewSalesPersonForm;
