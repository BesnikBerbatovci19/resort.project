import React, {Component} from 'react';
//import logo from '../images/logo.svg';
//import {FaAlingnRight} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import { FaBeer } from 'react-icons/fa';

export default class Navbar extends Component{
    state={
        isOpen:false
    }
    handleToggle = () =>{
        this.setState({isOpen:!this.state.isOpen})
    }
    render(){
        return(
            <nav className="navbar"> 
                <div className="nav-cener">
                <div className="nav-header">
                <Link to="/">
                    <img alt="Beach resor" />
                 </Link>
                 <button type="button" className="nav-btn">
                     <FaBeer className="nav-icon" 
                     onClick={this.handleToggle} />
                 </button>

                </div>
                <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/rooms">Rooms</Link>
                    </li>
                </ul>
                </div>
            </nav>
        )
    }
}