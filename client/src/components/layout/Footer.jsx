import React from 'react';
import Styles from './layout.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className="d-lg-block d-none">
                <div className="container-fluid">
                    <div className={Styles["footer"]}>
                        <div className={Styles["logo"]}>
                            <h2 className="navbar-brand">IMedicBot</h2>
                        </div>
                        <ul className={Styles["footer-links"]}>
                            <li><a> Home </a></li>
                            {/* <li><a> Features </a></li> */}
                            <li><a> How it works </a></li>
                            <li><a> Pricing </a></li>
                            <li><a> FAQ </a></li>
                            <li><a> Contact US </a></li>
                            <li><Link to="privacy"> Privacy Policy </Link></li>
                            <li><Link to="terms"> Terms </Link></li>
                        </ul>
                        <div></div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
