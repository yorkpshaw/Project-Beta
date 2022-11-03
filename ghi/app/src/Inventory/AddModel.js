import React from "react";


class CreateModel extends React.Component {
    state = {
        userInput: {
            name: '',
            picture_url: '',
            manufacturer_id: '',
        },
        manufacturers: [],
        hasSubmit: false,
    }

    componentDidMount = async () => {
        const manufacturerURL = `http://localhost:8100/api/manufacturers/`;
        const response = await fetch(manufacturerURL);
        if (response.ok) {
            const data = await response.json();
            this.setState({ manufacturers: data.manufacturers })
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

        const modelURL = 'http://localhost:8100/api/models/';
        const fetchOptions = {
            method: 'post',
            body: JSON.stringify(this.state.userInput),
            headers: {
                'Content-Type': 'application/json'
            },
        };

        const response = await fetch(modelURL, fetchOptions)
        if (response.ok) {
            this.setState({
                userInput: {
                    name: '',
                    picture_url: '',
                    manufacturer_id: '',
                },
                manufacturers: [],
                hasSubmit: true
            })
        }
    }

    render () {

        let successAlert = 'alert alert-success d-none mb-0';
        let formClass = '';
        if (this.state.hasSubmit) {
            successAlert = 'alert alert-success mb-0';
            formClass = 'd-none';
            setTimeout(() => window.location.replace(`http://localhost:3000/autos/models/add`), 3000)
        }
        return (
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h2>Create a vehicle model</h2>
                        <form className={formClass} onSubmit={this.handleSubmit} id="create-model-form">
                            <div className="form-floating mb-3">
                                <input onChange={this.handleChange} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                                <label htmlFor="name">Model Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleChange} placeholder="Picture URL" required type="url" name="picture_url" id="picture_url" className="form-control" />
                                <label htmlFor="picture_url">Picture URL</label>
                            </div>
                            <div className="mb-3">
                                <select onChange={this.handleChange} placeholder="Manufacturer" name="manufacturer_id" id="manufacturer_id" className="form-select">
                                <option value="">Choose a manufacturer</option>
                                {this.state.manufacturers.map(manufacturer => {
                                    return (
                                        <option key={manufacturer.id} value={manufacturer.id}>{manufacturer.name}</option>
                                    )
                                })}
                                </select>
                            </div>
                            <button className="btn btn-success">Create a vehicle model</button>
                        </form>
                        <div className={successAlert} id="success-message">
                            Sucessfully added a new model
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateModel;
