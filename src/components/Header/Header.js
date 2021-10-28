import React from 'react';
import { Link } from 'react-router-dom';
import hLogo from '../../images/Group 1329.png';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <img style={{ height: '40px' }} src={hLogo} alt="" />
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/event">Event</Link>
                            </li>
                            <Link to="/login"><button className="btn btn-outline-success" type="submit">Login</button></Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;