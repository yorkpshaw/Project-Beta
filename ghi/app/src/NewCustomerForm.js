import React from 'react';

class NewCustomerForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            customer_name: '',
            address: '',
            phone_number: '',
            hasSignedUp: false,
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = { ...this.state };
        delete data.hasSignedUp;

        const locationUrl = 'http://localhost:8090/api/customers/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(locationUrl, fetchConfig);
        if (response.ok) {
            const newCustomer = await response.json();

            const cleared = {
                customer_name: '',
                address: '',
                phone_number: '',
                hasSignedUp: true,
            };
            this.setState(cleared);
        }
    }

    handleNameChange(event) {
        const value = event.target.value;
        this.setState({ customer_name: value })
    }

    handleAddressChange(event) {
        const value = event.target.value;
        this.setState({ address: value })
    }

    handlePhoneNumberChange(event) {
        const value = event.target.value;
        this.setState({ phone_number: value })
    }

    render() {
            let messageClasses = 'alert alert-success d-none mb-0';
            let formClasses = '';
            if (this.state.hasSignedUp) {
              messageClasses = 'alert alert-success mb-0';
              formClasses = 'd-none';
              setTimeout(() => window.location.replace(`http://localhost:3000/customers`), 3000)
            }
        return (
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Add a new customer</h1>
                        <form className={formClasses} onSubmit={this.handleSubmit} id="create-sale-form">
                            <div className="form-floating mb-3">
                                <input value={this.state.customer_name} onChange={this.handleNameChange} placeholder="Customer Name" required type="text" name="customer_name" id="customer_name" className="form-control" />
                                <label htmlFor="customer_name">Enter customer name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input value={this.state.address} onChange={this.handleAddressChange} placeholder="Address" required type="text" name="address" id="address" className="form-control" />
                                <label htmlFor="address">Enter customer address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input value={this.state.phone_number} onChange={this.handlePhoneNumberChange} placeholder="Phone Number" required type="text" name="phone_number" id="phone_number" className="form-control" />
                                <label htmlFor="phone_number">Enter customer phone number</label>
                            </div>
                            <button className="btn btn-primary">Create</button>
                        </form>
                    <div className={messageClasses} id="success-message">
                  New Customer Recorded!
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewCustomerForm;
