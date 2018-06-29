import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { updatePlace } from '../../ducks/reducer';


class Wizard1 extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }
        this.handleInput = this.handleInput.bind(this);

    }

    componentDidMount() {
        let { name, address, city, state, zip  } = this.props
        this.setState({name, address, city, state, zip})
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



    render() {
        const { updatePlace } = this.props;

        return(
            <div>

                


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

                    <Link to='/wizard/wizard2'><button>Next Step</button></Link>
            </div>
        )
    }
}

function mapStateToProps() {
  

    return {
     
    };
}

export default connect(mapStateToProps, {updatePlace}) (Wizard1);