import React from 'react';


class ServiceHistory extends React.Component {
    state = {
        appointments: [],
        input: '',
        hasSubmit: false
    }

    handleChange = (e) => {
        const value = e.target.value;
        this.setState({ input: value })
    }


    handleSubmit = async (e) => {
        e.preventDefault();

        const appointmentURL = `http://localhost:8080/api/appointments/`;
        const response = await fetch(appointmentURL);
        if (response.ok) {
            let results = await response.json();

            let final = [];
            for (let appointment of results.appointments) {
                if (appointment.vin_customer === this.state.input ) {
                    final.push(appointment)
                }
            }

            this.setState({
                appointments: final,
                hasSubmit: true,
            })
        }
    }

    render() {

        let defaultClasses = 'table table-striped d-none';
        if (this.state.hasSubmit) {
            defaultClasses = 'table table-striped'
        }

        return (
            <div className="container">
                <h2>Service History</h2>
                <div className="input-group mb-3">
                    <input onChange={this.handleChange} required type="text" name="input" id="input" className="form-control" placeholder="Search VIN" aria-describedby="button-addon2" />
                    <button onClick={this.handleSubmit} className="btn btn-success" type="button" id="button-search">Button</button>
                </div>
                <div className="row">
                    <table className={defaultClasses}>
                        <thead>
                            <tr>
                                <th>VIN</th>
                                <th>Customer Name</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Technician</th>
                                <th>Reason</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.appointments.map(appointment => {
                                return(
                                <tr key={ appointment.id }>
                                    <td>{ appointment.vin_customer }</td>
                                    <td>{ appointment.owner }</td>
                                    <td>{ appointment.date }</td>
                                    <td>{ appointment.time }</td>
                                    <td>{ appointment.technician.name }</td>
                                    <td>{ appointment.reason }</td>
                                </tr>
                            )})}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ServiceHistory;
