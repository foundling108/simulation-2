import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Wizard extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0
        }
        this.handleInput = this.handleInput.bind(this);
        this.completeButton = this.completeButton.bind(this);
    }

    handleInput(props, value) {
        switch(props) {
            case 'state':
            if( value.length > 2 ) {
                return
            }
            break;
            case 'zip':
            if( value.length > 5 ) {
                return
            }
            break;
            default:
            break;
        }
        this.setState = ({ [props]: value});
    }

    completeButton() {
        axios.post('/api/houses', this.state)
        .then( res => {
            this.props.history.push('/')
        })
    }

    render() {
        return(
            <div>
                <h1>Add New Listing</h1>
                


                    <div>
                        <p>Property Name</p>
                        <input value={this.state.name} onChange={e => this.handleInput('name', e.target.value)} type="text"/>
                    </div>
                    <div>
                        <p>Address</p>
                        <input value={this.state.address} onChange={e => this.handleInput('address', e.target.value)} type="text"/>
                    </div>
                    <div>
                        <p>City</p>
                        <input value={this.state.city} onChange={e => this.handleInput('city', e.target.value)} type="text"/>
                    </div>
                    <div>
                        <p>State</p>
                        <input value={this.state.state} onChange={e => this.handleInput('state', e.target.value)} type="text"/>
                    </div>
                    <div>
                        <p>Zip</p>
                        <input value={this.state.zip} onChange={e => this.handleInput('zip', e.target.value)} type="number"/>
                    </div>

                    <button onClick={this.completeButton} >Complete</button>
            </div>
        )
    }
}

export default Wizard1;