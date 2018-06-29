import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Wizard3 extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            mortgage: 0,
            rent: 0
        }
        this.completeButton = this.completeButton.bind(this);
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

                


                    <div>
                        <p>Monthly Mortgage Amount</p>
                        <input value={this.state.mortgage}  type="text"/>
                    </div>
                    <div>
                        <p>Desired Monthly Rent</p>
                        <input value={this.state.rent} type="text"/>
                    </div>

                       <Link to='/wizard/wizard2'><button>Previous Step</button></Link>
                    <button onClick={this.completeButton} >Complete</button>
            </div>
        )
    }
}

export default Wizard3;