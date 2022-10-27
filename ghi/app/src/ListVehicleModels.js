import React, {useState, useEffect} from 'react'
import "./index.css"

class ListVehicleModels extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
        models: [],
      };
    }
async componentDidMount() {

  const modelsUrl = 'http://localhost:8100/api/models/';
    const Response = await fetch(modelsUrl);

    if (Response.ok) {
        const data = await Response.json();
        this.setState({ models: data.models });
    }
}
    render(){

    return (
      <div>
        <h1>Vehicle models</h1>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Manufacturer</th>
            <th>Picture</th>
          </tr>
        </thead>
        <tbody>
{this.state.models.map(model => {
  return (
    <tr key={model.id}>
  <td>{model.name}</td>
  <td>{model.manufacturer.name}</td>
  <td><img id="vehiclemodel" src={model.picture_url} /></td>
  </tr>
  )
})}
        </tbody>
      </table>
      </div>
    )
}
}
export default ListVehicleModels;
