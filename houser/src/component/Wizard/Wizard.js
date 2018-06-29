import React, { Component } from 'react';
import { Link } from 'react-router-dom';



import Wizard1 from './Wizard1';
import Wizard2 from './Wizard2';
import Wizard3 from './Wizard3';


class Wizard extends Component {


    render() {
        return(
            <div>
                <h1>Add New Listing</h1>
                
                <div>
                    <Link to="/"><button>Cancel</button></Link>
                </div>

                <div>
                    <Wizard1/>
                    <Wizard2/>
                    <Wizard3/>
                </div>

            </div>
        )
    }
}

export default Wizard;