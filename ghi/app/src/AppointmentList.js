import React from 'react'
import "./index.css"


class AppointmentList extends React.Component {
    state = {
        updated: false,
        appointments: [],
    }

    componentDidMount = async () => {
        const appointmentURL = `http://localhost:8080/api/appointments/`;
        const response = await fetch(appointmentURL);
        if (response.ok) {
            const data = await response.json();
            this.setState({
                appointments: data.appointments,
                updated: false,
            })
        }
    }

    handleUpdate = async (e) => {
        e.preventDefault();
        const id = e.target.value;

        const appointmentURL = `http://localhost:8080/api/appointments/${id}/`
        const fetchOptions = {
            method: 'put',
            body: JSON.stringify({ status: true }),
            headers: {
                'Content-Type': 'application/json'
            },
        };

        const response = await fetch(appointmentURL, fetchOptions);
        if (response.ok)  {
            this.setState({
                updated: true,
                appointments: [],
            })
            this.componentDidMount();
        }
    }

    handleDelete = async (e) => {
        e.preventDefault();
        const id = e.target.value;

        const appointmentURL = `http://localhost:8080/api/appointments/${id}/`;
        const fetchOptions = {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json'
            },
        };

        const response = await fetch(appointmentURL, fetchOptions);
        if (response.ok) {
            this.setState({
                updated: true,
                appointments: [],
            })
            this.componentDidMount();
        }
    }

    render () {
        return (
            <div className="container">
                <h2>Service Appointments</h2>
                <div className="row">
                <table className="table table-striped">
                <thead>
                    <tr>
                        <th>VIP</th>
                        <th>VIN</th>
                        <th>Customer Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Technician</th>
                        <th>Reason</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.appointments.filter(function (appointment) { return appointment.status === false; }).map(appointment => {
                    return (
                        <tr key={ appointment.id }>
                            <td>{ appointment.vip ? <div><img className="thumbnail" src='https://cdn-icons-png.flaticon.com/512/6701/6701725.png'/></div> : '' }</td>
                            <td>{ appointment.vin_customer }</td>
                            <td>{ appointment.owner }</td>
                            <td>{ appointment.date }</td>
                            <td>{ appointment.time }</td>
                            <td>{ appointment.technician.name }</td>
                            <td>{ appointment.reason }</td>
                            <td><button type="button" value={appointment.id} onClick={this.handleUpdate} className="btn btn-success">Finished</button></td>
                            <td><button type="button" value={appointment.id} onClick={this.handleDelete} className="btn btn-danger">Cancel</button></td>
                        </tr>
                    );
                    })}
                </tbody>
                </table>
                </div>
            </div>
        )
    }
}

export default AppointmentList;
