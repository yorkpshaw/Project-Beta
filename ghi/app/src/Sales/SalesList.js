import React, {useState, useEffect} from 'react'
import "../index.css"

class SalesTable extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
        salesrecords: [],
      };
    }
async componentDidMount() {

  const salesUrl = 'http://localhost:8090/api/salesrecords/';
    const salesResponse = await fetch(salesUrl);

    if (salesResponse.ok) {
        const data = await salesResponse.json();
        this.setState({ salesrecords: data.salesrecords });
    }
}
    render(){
    return (
      <div>
        <h1>List of Sales</h1>
      <table className='table table-striped table-dark'>
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Employee Number</th>
            <th>Customer Name</th>
            <th>VIN</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
{this.state.salesrecords.map(salesrecord => {
  return (
    <tr key={salesrecord.id}>
  <td>{salesrecord.salesperson.salesperson_name}</td>
  <td>{salesrecord.salesperson.employee_num}</td>
  <td>{salesrecord.customer.customer_name}</td>
  <td>{salesrecord.automobile.vin}</td>
  <td>{salesrecord.price}</td>
  </tr>
  )
})}
        </tbody>
      </table>
      </div>
    )
}
}
export default SalesTable;
