import React, { Component } from 'react';
import House from '../House/House.js';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Dashboard extends Component {
    constructor(props){
        super(props)

        this.state = {
            houses: []
        }
        this.getHouses = this.getHouses.bind(this);
        this.deleteHouse = this.deleteHouse.bind(this);
    }

    componentDidMount() {
        this.getHouses();
    }
    // Invoke this method as soon as the Dashboard view loads.

    getHouses() {
        axios.get('/api/houses')
        .then(res => {
            this.setState({
                houses: res.data
            })
        })
    }

    deleteHouse(id) {
        axios.delete(`/api/houses/${id}`)
        .then( res => this.getHouses() );
    }

    render() {
        return(
            <div>
                Dashboard
                <House/>
                <div>
                    <Link to="/wizard"><button>Add New Property</button></Link>
                </div>
                <div>
                    <p>Home Listings</p>
                    { this.state.houses.map(el => {
                    return <House houses={el} deleteHouse={this.deleteHouse} key={el.id}  />
                    })}
                </div>

            </div>
        )
    }
}

export default Dashboard;