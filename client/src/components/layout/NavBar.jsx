import React, { useState } from 'react';
import Styles from './layout.module.css';
import Login from '../Auth';
import SignUp from '../Auth/SignUp';
import Forgot from '../Auth/Forgot';
import { Link } from 'react-scroll';
import { Link as RouteLink, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { purgeAuth } from '../../store/userSlice';
import { BiLogOut } from 'react-icons/bi';

const NavBar = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const location = useLocation();

    const [loginShow, setLoginShow] = useState(false);

    const handleLoginClose = () => setLoginShow(false);
    const handleLoginShow = () => setLoginShow(true);

    const [signUpShow, setSignUpShow] = useState(false);

    const handleSignUpClose = () => setSignUpShow(false);
    const handleSignUpShow = () => setSignUpShow(true);

    const [forgotShow, setForgotShow] = useState(false);

    const handleForgotClose = () => setForgotShow(false);
    const handleForgotShow = () => setForgotShow(true);

    const [navbarToggler, setNavbarToggler] = useState(false);

    const loggedUser = useSelector(state => state.user.value);


    const handleLogout = () => {
        navigate('/');
        dispatch(purgeAuth())
    }

    return (
        <>
            <nav className={`${Styles["navbar"]} navbar navbar-expand-lg ${location.pathname === `/chat` && 'py-0'}`}>
                <div className="container-fluid justify-content-start">
                    <button className={`${Styles["navbar-toggler"]} navbar-toggler`} type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation" onClick={() => setNavbarToggler(!navbarToggler)}>
                        {navbarToggler ? <img src="/assets/icons/close-icon.svg" alt="" /> : <img src="/assets/icons/menu.svg" alt="" />}
                    </button>
                    <RouteLink to="/" className={`${Styles["navbar-brand"]} navbar-brand`}>
                        IMedicBot
                        {/* <img src="/assets/images/logo.png" alt="IMedicBot Logo" /> */}
                    </RouteLink>
                    <div className={`${Styles["navbar-btn"]} ms-auto d-lg-none d-block`}>
                        <a className={`${Styles["signIn-btn"]} btn  me-3`} onClick={handleLoginShow}>Sign in</a>
                        <a className={`${Styles["btnPrimaryOutline"]} btn btnPrimaryOutline btnSm`} onClick={handleSignUpShow}>Create free
                            account
                        </a>
                    </div>
                    <div className={`${Styles["navbar-collapse"]} collapse navbar-collapse`} id="navbarSupportedContent">
                        {Object.keys(loggedUser).length > 0 || loggedUser == true ? <div className="text-end w-100">
                            <h3 onClick={handleLogout} className='pointer'>
                                <BiLogOut />
                            </h3>
                        </div> :
                            <>
                                <ul className="navbar-nav ms-auto  d-lg-flex d-none align-items-center">
                                    <li className={Styles["nav-item"]}>
                                        <Link activeClass="active" smooth spy to="/" className={`${Styles["nav-link active"]} nav-link`}>Home</Link>
                                    </li>
                                    {/* <li className={Styles["nav-item"]}>
                                <Link activeClass="active" smooth spy to="features" className={`${Styles["nav-link"]} nav-link`}>Features</Link>
                            </li> */}
                                    <li className={Styles["nav-item"]}>
                                        <Link activeClass="active" smooth spy to="works" className={`${Styles["nav-link"]} nav-link`}>How it works</Link>
                                    </li>
                                    <li className={Styles["nav-item"]}>
                                        <Link activeClass="active" smooth spy to="pricing" className={`${Styles["nav-link"]} nav-link`}>Pricing</Link>
                                    </li >
                                    <li className={Styles["nav-item"]}>
                                        <Link activeClass="active" smooth spy to="faq" className={`${Styles["nav-link"]} nav-link`}>FAQ</Link>
                                    </li >
                                    <li className={Styles["nav-item"]}>
                                        <Link activeClass="active" smooth spy to="about" className={`${Styles["nav-link"]} nav-link`}>About Us</Link>
                                    </li >
                                    <li className={Styles["nav-item"]}>
                                        <Link activeClass="active" smooth spy to="contact" className={`${Styles["nav-link"]} nav-link`}>Contact Us</Link>
                                    </li >

                                </ul >
                                <ul className="navbar-nav ms-auto text-center d-lg-none d-block mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link active"
                                        >Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link"
                                        >Features</a>
                                    </li >
                                    <li className="nav-item">
                                        <a className="nav-link"
                                        >How it works</a>
                                    </li >
                                    <li className="nav-item">
                                        <a className="nav-link"
                                        >Pricing</a>
                                    </li >
                                    <li className="nav-item">
                                        <a className="nav-link"
                                        >FAQ</a>
                                    </li >
                                    <li className="nav-item">
                                        <a className="nav-link"
                                        >Contact Us</a>
                                    </li >
                                    <li className="nav-item">
                                        <a className="nav-link">Privacy Policy</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link">Terms</a>
                                    </li>
                                </ul >
                                <div className={`${Styles["navbar-btn"]} ms-auto d-lg-block d-none`}>
                                    <a className={`${Styles["signIn-btn"]} btn  me-3`} onClick={handleLoginShow}>Sign in</a>
                                    <a className={`${Styles["btnPrimaryOutline"]} btn btnPrimaryOutline btnSm`} onClick={handleSignUpShow}>
                                        Create free account
                                    </a>
                                </div>
                            </>}
                    </div>
                </div >
            </nav >

            <Login loginShow={loginShow} handleSignUpShow={handleSignUpShow} handleLoginClose={handleLoginClose} handleForgotShow={handleForgotShow} />
            <SignUp signUpShow={signUpShow} handleLoginShow={handleLoginShow} handleSignUpClose={handleSignUpClose} handleForgotShow={handleForgotShow} />
            <Forgot forgotShow={forgotShow} handleSignUpShow={handleSignUpShow} handleForgotClose={handleForgotClose} />
        </>
    )
}

export default NavBar
