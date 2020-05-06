import React from 'react';
import { Link } from 'react-router-dom';
import '../App.scss';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/favorites"><li>Favorites</li></Link>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default NavBar;