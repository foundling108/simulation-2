import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Wizard2 extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            image: ''
        }

    }





    render() {
        return(
            <div>

                

                    <div>
                        <p>Image URL</p>
                        <input value={this.state.image}  type="text"/>
                    </div>


                    <Link to='/wizard/wizard1'><button>Previous Step</button></Link>
                    <Link to='/wizard/wizard3'><button>Next Step</button></Link>
            </div>
        )
    }
}

export default Wizard2;