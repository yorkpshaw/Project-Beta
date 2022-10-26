import React, {useState, useEffect} from 'react'
import "./index.css"

class EmployeeTable extends React.Component {
    constructor(props) {
      super(props);
      this.state = {

      };
    }

    render() {
      let spinnerClasses = 'd-flex justify-content-center mb-3';
      let dropdownClasses = 'form-select d-none';
      if (this.state.salespeople.length > 0) {
          spinnerClasses = 'd-flex justify-content-center mb-3 d-none';
          dropdownClasses = 'form-select';
      }

      let messageClasses = 'alert alert-success d-none mb-0';
      let formClasses = '';
      if (this.state.hasSignedUp) {
          messageClasses = 'alert alert-success mb-0';
          formClasses = 'd-none';
      }

    return (
      <div>
        <h1>Employee History</h1>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Customer Name</th>
            <th>VIN</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {/* some mapping shit
  <td>{employee_name}</td>
  <td>{customer_name}</td>
  <td>{vin}</td>
  <td>{price}</td>  */}
        </tbody>
      </table>
      </div>
    );
  }
  }



export default EmployeeTable;
