import React, {useState, useEffect} from 'react'
import "./index.css"

class SalesPersonHistory extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
        salesrecords: [],
      input: '',
      filterSalesPerson: [],
      hasSignedUp: false,
      };
      this.handleInput = this.handleInput.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
async componentDidMount() {

  const salesUrl = 'http://localhost:8090/api/salesrecords/';
    const salesResponse = await fetch(salesUrl);

    if (salesResponse.ok) {
        const data = await salesResponse.json();
        this.setState({ salesrecords: data.salesrecords });
    }
}

async handleSubmit(event) {
  event.preventDefault();
  const salespersonUrl = 'http://localhost:8090/api/salesrecords/';
  const responses = await fetch(salespersonUrl);

  if (responses.ok) {
    const data = await responses.json();
    let records = [];
    for (let response of data.salesrecords) {
      if (response.salesperson.employee_num === this.state.input) {
        records.push(response)
      }
    this.setState({ filterSalesPerson: records, hasSignedUp: true });
}
}
}
handleInput(event) {
  const value = event.target.value;
  this.setState({ input: value})
}

    render(){
      let messageClasses = 'table table-striped d-none';
      if (this.state.hasSignedUp) {
        messageClasses = 'table table-striped mb-0';}
    return (
      <div className="container">
        <h1>Sales person History</h1>
        <div className="mb-3">
          <select onChange={this.handleSubmit} required name="salesperson" id="salesperson" className="form-select">
              <option value="">Choose a sales person</option>
              {this.state.salesrecords.map(salesrecord => {
              return (
                  <option key={salesrecord.salesperson.employee_num} value={salesrecord.salesperson.employee_num}>
                      {salesrecord.salesperson.salesperson_name}
                  </option>
              );
              })}
        </select>
        </div>
        <div className='row'>
      <table className={messageClasses}>
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Customer Name</th>
            <th>VIN</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
{this.state.filterSalesPerson.map(salesrecord => {
  return (
    <tr key={salesrecord.id}>
  <td>{salesrecord.salesperson.salesperson_name}</td>
  <td>{salesrecord.customer.customer_name}</td>
  <td>{salesrecord.automobile.vin}</td>
  <td>{salesrecord.price}</td>
  </tr>
  )
})}
        </tbody>
      </table>
      </div>
      </div>
    )
}
}

export default SalesPersonHistory;
