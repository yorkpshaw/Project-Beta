import React from 'react';

class SaleRecordForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            automobile: '',
            salesPerson: '',
            customer: '',
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
        delete data.automobile
        delete data.salesPerson
        delete data.customer
        delete data.price
        delete data.hasSignedUp;

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
            console.log(newSale);

            const cleared = {
                automobile: '',
                salesPerson: '',
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
        this.setState({ salesPerson: value })
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
        const url = 'http://localhost:8090/api/automobiles/';
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            this.setState({ automobiles: data.automobiles });
        }
    }

    render() {
            let messageClasses = 'alert alert-success d-none mb-0';
            let formClasses = '';
            if (this.state.hasSignedUp) {
              messageClasses = 'alert alert-success mb-0';
              formClasses = 'd-none';
              setTimeout(() => window.location.replace(`http://localhost:3000/salesrecords`), 3000)
            }
        return (
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Add a new sale</h1>
                        <form className={formClasses} onSubmit={this.handleSubmit} id="create-sale-form">
                            <div className="form-floating mb-3">
                                <input value={this.state.automobile} onChange={this.handleAutomobileChange} placeholder="Automobile" required type="text" name="automobile" id="automobile" className="form-control" />
                                <label htmlFor="automobile">Choose an automobile</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input value={this.state.salesPerson} onChange={this.handleSalesPersonChange} placeholder="Sales Person" required type="text" name="sales_person" id="sales_person" className="form-control" />
                                <label htmlFor="sales_person">Choose a sales person</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input value={this.state.customer} onChange={this.handleCustomerChange} placeholder="Customer" required type="text" name="customer" id="customer" className="form-control" />
                                <label htmlFor="customer">Choose a customer</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input value={this.state.price} onChange={this.handlePriceChange} placeholder="Price" required type="text" name="price" id="price" className="form-control" />
                                <label htmlFor="price">Sale price</label>
                            </div>
                            {/* <div className="mb-3"> */}
                                {/* <select value={this.state.price} onChange={this.handleBinChange} required name="bin" id="bin" className="form-select">
                                    <option value="">Bin</option>
                                    {this.state.bins.map(bin => {
                                        return (
                                            <option key={bin.href} value={bin.href}>
                                                {bin.closet_name}, Number: {bin.bin_number}, Size: {bin.bin_size}
                                            </option>
                                        );
                                    })}
                                </select> */}
                            {/* </div> */}
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
