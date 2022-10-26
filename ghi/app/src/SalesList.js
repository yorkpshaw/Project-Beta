import React, {useState, useEffect} from 'react'
import "./index.css"

function SalesTable(props) {

  const [name, setName] = useState("");

  const fetchData = () => {
    return fetch("http://localhost:8090/api/salesrecords/")
          .then((response) => response.json())
          .then((data) => console.log(data));}

    return (
      <div>
        <h1>List of Sales</h1>
      <table className='table table-striped'>
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
          {/* some mapping shit */}
  {/* <td>{employee_name}</td>
  <td>{employee_num}</td>
  <td>{customer_name}</td>
  <td>{vin}</td>
  <td>{price}</td>  */}
        </tbody>
      </table>
      </div>
    )
  }

export default SalesTable;
