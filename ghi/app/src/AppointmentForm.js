import React from 'react';


class AppointmentForm extends React.Component {
    state = {
        userInput: {
            owner: '',
            date: '',
            time: '',
            technician: '',
            vin_customer: '',
            reason: '',
        },
        technicians: [],
        hasSubmit: false,
    }

    componentDidMount = async () => {
        const technicianURL = `http://localhost:8080/api/technicians/`;
        const response = await fetch(technicianURL);
        if (response.ok) {
            const data = await response.json();
            this.setState({ technicians: data.technicians })
        }
    }

    handleChange = (e) => {
        const value = e.target.value;
        const key = e.target.name;
        this.setState({
            userInput: {...this.state.userInput,
            [key]: value}
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const appointmentURL = `http://localhost:8080/api/appointments/`;
        const fetchOptions = {
            method: 'post',
            body: JSON.stringify(this.state.userInput),
            headers: {
                'Content-Type': 'application/json'
            },
        };

        const response = await fetch(appointmentURL, fetchOptions)
        if (response.ok) {
            this.setState({
                userInput: {
                    owner: '',
                    date: '',
                    time: '',
                    technician: '',
                    vin_customer: '',
                    reason: '',
                },
                    technicians: [],
                    hasSubmit: true
                })
        };
    }

    render () {
        let messageClasses = 'alert alert-success d-none mb-0';
        let formClasses = '';
        if (this.state.hasSubmit) {
            messageClasses = 'alert alert-success mb-0';
            formClasses = 'd-none';
        }

        return (
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Make an appointment</h1>
                        <form className={formClasses} onSubmit={this.handleSubmit} id="create-appointment-form">
                            <div className="form-floating mb-3">
                                <input onChange={this.handleChange} value={this.state.owner} placeholder="Name" required type="text" name="owner" id="owner" className="form-control" />
                                <label htmlFor="owner">Your Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleChange} value={this.state.vin_customer} placeholder="VIN" required type="text" name="vin_customer" id="vin_customer" className="form-control" />
                                <label htmlFor="vin_customer">Car VIN</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleChange} value={this.state.date} placeholder="Date" required type="date" name="date" id="date" className="form-control" />
                                <label htmlFor="date">Choose a date</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleChange} value={this.state.time} placeholder="Time" required type="time" name="time" id="time" className="form-control" />
                                <label htmlFor="time">Choose a time</label>
                            </div>
                            <div className="mb-3">
                                <select onChange={this.handleChange} value={this.state.technician} required name="technician" id="technician" className="form-select">
                                    <option value="">Choose a technician</option>
                                    {this.state.technicians.map(technician => {
                                        return (
                                            <option key={technician.employee_number} value={technician.name}>{technician.name}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="reason">Reason for visit</label>
                                <textarea onChange={this.handleChange} value={this.state.reason} className="form-control" name="reason" id="reason" rows="2"></textarea>
                            </div>
                            <button className="btn btn-success">Make an appointment</button>
                        </form>
                        <div className={messageClasses} id="success-message">
                            You have successfully made an appointment
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AppointmentForm;
