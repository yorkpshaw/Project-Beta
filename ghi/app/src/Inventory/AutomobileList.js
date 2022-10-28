import React from "react";


class AutomobileList extends React.Component {
    state = {
        autos: []
    }

    componentDidMount = async () => {
        const autosURL = `http://localhost:8100/api/automobiles/`;
        const response = await fetch(autosURL);
        if (response.ok) {
            const data = await response.json();
            this.setState({ autos: data.autos })
        }
    }

    render () {

        return (
            <div className="container">
                <h2>Vehicle Inventory</h2>
                <div className="row"></div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                        <th>VIN</th>
                        <th>Color</th>
                        <th>Year</th>
                        <th>Model</th>
                        <th>Manufacturer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.autos.map(auto => {
                            return (
                                <tr key={ auto.id }>
                                    <td>{ auto.vin }</td>
                                    <td>{ auto.color }</td>
                                    <td>{ auto.year }</td>
                                    <td>{ auto.model.name }</td>
                                    <td>{ auto.model.manufacturer.name }</td>
                                </tr>
                            )
                        })}
                    </tbody>
                    </table>
            </div>
        )
    }
}


export default AutomobileList;
