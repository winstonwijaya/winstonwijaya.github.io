import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-scroll';

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
            <div className="container-fluid nav-container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{color:"#fff"}}/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto ms-auto fs-6">
                        <li className="nav-item mx-4">
                            <Link className="nav-link" to="greeting" spy={true} smooth={false}> Profile </Link>
                        </li>
                        <li className="nav-item mx-4">
                            <Link className="nav-link" to="skills" spy={true} smooth={false}> Skills </Link>
                        </li>
                        <li className="nav-item mx-4">
                            <Link className="nav-link" to="education" spy={true} smooth={false}> Education </Link>
                        </li>
                        <li className="nav-item mx-4">
                            <Link className="nav-link" to="experience" spy={true} smooth={false}> Experience </Link>
                        </li>
                        <li className="nav-item mx-4">
                            <Link className="nav-link" to="projects" spy={true} smooth={false}> Projects </Link>
                        </li>
                        <li className="nav-item mx-4">
                            <Link className="nav-link" to="contact" spy={true} smooth={false}> Contact </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
