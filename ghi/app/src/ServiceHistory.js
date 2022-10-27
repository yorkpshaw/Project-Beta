import React from 'react';


class ServiceHistory extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            appointments: [],
            input: '',
            hasSubmit: false
        }

        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeInput(event) {
        const value = event.target.value;
        this.setState({ input: value })
    }

    async handleSubmit(event) {
        event.preventDefault();

        const url = 'http://localhost:8080/api/appointments/';
        const response = await fetch(url);
        if (response.ok) {
            let results = await response.json();

            var final = [];
            for (let appointment of results.appointments) {
                if (appointment.vin_customer === this.state.input) {
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

        console.log(this.state.appointments)
        // console.log({...this.state})

        return (
            <div className="container">
                <h2>Service History</h2>
                <div className="input-group mb-3">
                    <input onChange={this.handleChangeInput} required type="text" name="input" id="input" className="form-control" placeholder="Search VIN" aria-describedby="button-addon2" />
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
