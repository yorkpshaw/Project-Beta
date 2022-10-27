import React from 'react';


class AppointmentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            owner: '',
            date: '',
            time: '',
            technician: '',
            vin_customer: '',
            reason: '',
            technicians: [],
            hasSubmit: false,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeOwner = this.handleChangeOwner.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleChangeTime = this.handleChangeTime.bind(this);
        this.handleChangeTechnician = this.handleChangeTechnician.bind(this);
        this.handleChangeVin = this.handleChangeVin.bind(this);
        this.handleChangeReason = this.handleChangeReason.bind(this);
    }


    async componentDidMount() {
        const url = `http://localhost:8080/api/technicians/`;
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            this.setState({ technicians: data.technicians });
        }
    }


    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state}
        delete data.technicians;
        delete data.hasSubmit;

        const appointmentURL = `http://localhost:8080/api/appointments/`;
        const fetchOptions = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        };

        const appointmentResponse = await fetch(appointmentURL, fetchOptions);
        if (appointmentResponse.ok) {
            this.setState({
                owner: '',
                date: '',
                technician: '',
                vin_customer: '',
                reason: '',
                hasSubmit: true,
        });
        }
    }


    handleChangeOwner(event) {
        const value = event.target.value;
        this.setState({ owner: value })
    }

    handleChangeDate(event) {
        const value = event.target.value;
        this.setState({ date: value })
    }

    handleChangeTime(event) {
        const value = event.target.value;
        this.setState({ time: value })
    }

    handleChangeTechnician(event) {
        const value = event.target.value;
        this.setState({ technician: value })
    }

    handleChangeVin(event) {
        const value = event.target.value;
        this.setState({ vin_customer: value })
    }

    handleChangeReason(event) {
        const value = event.target.value;
        this.setState({ reason: value })
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
                                <input onChange={this.handleChangeOwner} placeholder="Name" required type="text" name="owner" id="owner" className="form-control" />
                                <label htmlFor="owner">Your Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleChangeVin} placeholder="VIN" required type="text" name="vin_customer" id="vin_customer" className="form-control" />
                                <label htmlFor="vin_customer">Car VIN</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleChangeDate} placeholder="Date" required type="date" name="date" id="date" className="form-control" />
                                <label htmlFor="date">Choose a date</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleChangeTime} placeholder="Time" required type="time" name="time" id="time" className="form-control" />
                                <label htmlFor="time">Choose a time</label>
                            </div>
                            <div className="mb-3">
                                <select onChange={this.handleChangeTechnician} required name="technician" id="technician" className="form-select">
                                    <option value="">Choose a technician</option>
                                    {this.state.technicians.map(technician => {
                                        return (
                                            <option key={technician.employee_number} value={technician.name}>{technician.name}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="mb-3">
                                <textarea onChange={this.handleChangeReason} className="form-control" name="reason" id="reason" rows="2"></textarea>
                                <label htmlFor="reason">Reason for visit</label>
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
