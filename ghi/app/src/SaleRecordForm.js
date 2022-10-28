import React from 'react';

class SaleRecordForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            automobile: '',
            autos: [],
            salesperson: '',
            salespeople: [],
            customer: '',
            customers: [],
            price: '',
            hasSignedUp: false,
        };
        this.handleAutomobileChange = this.handleAutomobileChange.bind(this);
        this.handleSalesPersonChange = this.handleSalesPersonChange.bind(this);
        this.handleCustomerChange = this.handleCustomerChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = { ...this.state };
        delete data.autos;
        delete data.customers;
        delete data.salespeople;
        delete data.hasSignedUp;

        const vin = this.state.automobile;
        const updateUrl = `http://localhost:8100/api/automobiles/${vin}/`;
        const updateConfig = {
            method: "put",
            body: JSON.stringify({sold: true}),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const updateResponse = await fetch(updateUrl, updateConfig);
        if (updateResponse.ok) {
            const sold = await updateResponse.json();
            const clear = {
               sold: true
            };
            this.setState(clear);
        }

        const locationUrl = 'http://localhost:8090/api/salesrecords/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(locationUrl, fetchConfig);
        if (response.ok) {
            const newSale = await response.json();

            const cleared = {
                automobile: '',
                salesperson: '',
                customer: '',
                price: '',
                hasSignedUp: true,
            };
            this.setState(cleared);
        }
    }

    handleAutomobileChange(event) {
        const value = event.target.value;
        this.setState({ automobile: value })
    }

    handleSalesPersonChange(event) {
        const value = event.target.value;
        this.setState({ salesperson: value })
    }

    handleCustomerChange(event) {
        const value = event.target.value;
        this.setState({ customer: value })
    }

    handlePriceChange(event) {
        const value = event.target.value;
        this.setState({ price: value})
    }
    async componentDidMount() {
        const autoUrl = 'http://localhost:8100/api/automobiles/';
        const autoResponse = await fetch(autoUrl);
        if (autoResponse.ok) {
            const data = await autoResponse.json();

            this.setState({ autos: data.autos });
        }

        const salesUrl = 'http://localhost:8090/api/salespeople/';
        const salesResponse = await fetch(salesUrl);

        if (salesResponse.ok) {
            const data = await salesResponse.json();
            this.setState({ salespeople: data.salespeople });
        }

        const customerUrl = 'http://localhost:8090/api/customers/';
        const customerResponse = await fetch(customerUrl);

        if (customerResponse.ok) {
            const data = await customerResponse.json();
            this.setState({ customers: data.customers });
    }
    }

    render() {
            let messageClasses = 'alert alert-success d-none mb-0';
            let formClasses = '';
            if (this.state.hasSignedUp) {
              messageClasses = 'alert alert-success mb-0';
              formClasses = 'd-none';
              setTimeout(() => window.location.replace(`http://localhost:3000/sales`), 3000)
            }
        return (
        <div className="row">
            <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
            <h1>Add a new sale</h1>
            <form className={formClasses} onSubmit={this.handleSubmit} id="create-sale-form">
                <div className="mb-3">
                    <select value={this.state.automobile} onChange={this.handleAutomobileChange} required name="automobile" id="automobile" className="form-select">
                        <option value="">Choose an automobile</option>
                        {this.state.autos.filter(function(auto) { return auto.sold === false; }).map(auto => {
                            return (
                                <option key={auto.vin} value={auto.vin}>
                                    {auto.vin}
                                </option>
                            );
                        })}
                    </select>
            </div>
            <div className="mb-3">
                <select value={this.state.salesperson} onChange={this.handleSalesPersonChange} required name="salesperson" id="salesperson" className="form-select">
                    <option value="">Choose a sales person</option>
                    {this.state.salespeople.map(salesperson => {
                        return (
                            <option key={salesperson.id} value={salesperson.id}>
                                {salesperson.salesperson_name}
                            </option>
                        );
                    })}
                </select>
                </div>
                <div className="mb-3">
                <select value={this.state.customer} onChange={this.handleCustomerChange} required name="customer" id="customer" className="form-select">
                    <option value="">Choose a customer</option>
                    {this.state.customers.map(customer => {
                        return (
                            <option key={customer.id} value={customer.id}>
                                {customer.customer_name}
                            </option>
                        );
                    })}
                </select>
                </div>
                <div className="form-floating mb-3">
                    <input value={this.state.price} onChange={this.handlePriceChange} placeholder="Price" required type="number" name="price" id="price" className="form-control" />
                    <label htmlFor="price">Sale price</label>
                </div>
                <button className="btn btn-primary">Create</button>
                </form>
                <div className={messageClasses} id="success-message">
                  New $$$ale Recorded!
                  </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SaleRecordForm;
