import React from 'react'
import "../index.css"


class ListManufacturers extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
        manufacturers: [],
      };
    }
async componentDidMount() {

  const manufacturersUrl = 'http://localhost:8100/api/manufacturers/';
    const Response = await fetch(manufacturersUrl);

    if (Response.ok) {
        const data = await Response.json();
        this.setState({ manufacturers: data.manufacturers });
    }
}
    render(){

    return (

      <div>
        <h1>Manufacturers</h1>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
{this.state.manufacturers.map(manufacturer => {
  return (
    <tr key={manufacturer.id}>
  <td>{manufacturer.name}</td>
  </tr>
  )
})}
        </tbody>
      </table>
      </div>
    )
}
}


export default ListManufacturers;
