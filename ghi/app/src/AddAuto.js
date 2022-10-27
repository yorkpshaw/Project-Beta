import React from 'react';


class CreateAuto extends React.Component {
    state = {
        userInput: {
            color: '',
            year: '',
            vin: '',
            model_id: '',
        },
        models: [],
    }

    componentDidMount = async () => {
        const modelURL = `http://localhost:8100/api/models/`;
        const response = await fetch(modelURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data)
            this.setState({ models: data.models })
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

        const autoURL = `http://localhost:8100/api/automobiles/`;
        const fetchOptions = {
            method: 'post',
            body: JSON.stringify(this.state.userInput),
            headers: {
                'Content-Type': 'application/json'
            },
        };

        const response = await fetch(autoURL, fetchOptions)
        if (response.ok) {
            this.setState({})
        }
    }

    render () {
        return (
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h2>Add a vehicle to inventory</h2>
                        <form className='form' onSubmit={this.handleSubmit} id="create-auto-form">
                            <div className="form-floating mb-3">
                                <input onChange={this.handleChange} placeholder="Color" required type="text" name="color" id="color" className="form-control" />
                                <label htmlFor="color">Color</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleChange} placeholder="Year" required type="number" name="year" id="year" className="form-control" />
                                <label htmlFor="year">Year</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleChange} placeholder="VIN" required type="text" name="vin" id="vin" className="form-control" />
                                <label htmlFor="vin">VIN</label>
                            </div>
                            <div className="mb-3">
                                <select onChange={this.handleChange} placeholder="Model" name="model_id" id="model_id" className="form-select">
                                <option value="">Choose a model</option>
                                {this.state.models.map(model => {
                                    return (
                                        <option key={model.id} value={model.id}>{model.name}</option>
                                    )
                                })}
                                </select>
                            </div>
                            <button className="btn btn-success">Add a vehicle to inventory</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateAuto;
