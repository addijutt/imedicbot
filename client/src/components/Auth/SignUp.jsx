import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Styles from './auth.module.css';
import { FaEyeSlash, FaEye } from "react-icons/fa";
import http from '../../api';
import { environment } from '../../constants';



const SignUp = ({ signUpShow, handleSignUpClose, handleLoginShow, handleForgotShow }) => {

    const [isPasswordShow, setIsPasswordShow] = useState(false);

    const [companyName, setCompanyName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = (e) => {
        if (e.target.name === "company") {
            setCompanyName(e.target.value);
        }
        if (e.target.name === "email") {
            setEmail(e.target.value);
        }
        if (e.target.name === "password") {
            setPassword(e.target.value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let body = {
            name: companyName,
            email: email,
            password: password,
        };

        http
            .post(environment.api_url + "/user/signup", body )
            .then((res) => {
                console.log(res.data)
                // setError("");
                // dispatch(setAuth(res.data.data.user));
                // setEmail("");
                // setPassword("");
                // setProfileError(null);
                // navigate("/");
            })
            .catch((err) => {
                console.log(err)
            });
    };

    return (
        <>
            <Modal show={signUpShow} onHide={handleSignUpClose} className='customAuth' centered animation={true}>
                <Modal.Body className='p-0'>
                    <div className={Styles.Auth}>
                        <div className="fs-32 fw-600 text-900 mb-4">Sign up</div>
                        <div className="mb-4">
                            <label class="fs-13 fw-500 text-900 mb-1"> Company Name </label>
                            <input type="text" className={Styles.input} placeholder='username'
                            name="company"
                                value={companyName}
                                // onBlur={(e) => handleValidation(e)}
                                onChange={(e) => handleChange(e)}
                                 />
                        </div>
                        <div className="mb-4">
                            <label class="fs-13 fw-500 text-900 mb-1"> Email </label>
                            <input type="email" className={Styles.input} placeholder='Your E-mail'
                            name="email"
                                value={email}
                                // onBlur={(e) => handleValidation(e)}
                                onChange={(e) => handleChange(e)} />
                        </div>
                        <label class="fs-13 fw-500 text-900 mb-1">Password </label>
                        <div className="position-relative">
                            <input type={isPasswordShow ? "text" : 'password'} className={Styles.input} placeholder='At least 4 characters'
                            name="password"
                                value={password}
                                // onBlur={(e) => handleValidation(e)}
                                onChange={(e) => handleChange(e)} />
                            <div className={Styles.icon} onClick={() => setIsPasswordShow(!isPasswordShow)}>
                                {isPasswordShow ? <FaEyeSlash /> : <FaEye />}
                            </div>
                        </div>
                        <div className="mb-4 mt-5">
                            <button type='button' className='btn btnPrimary btnLg w-100' onClick={handleSubmit}>Sign Up</button>
                        </div>
                        <div className="text-center"><a className="fs-14 fw-500 text-800" onClick={() => { handleSignUpClose(); handleForgotShow(); }}> Forgot password? </a></div>
                    </div>
                    <div className={`${Styles["form-footer"]} gap-4`}>
                        <div className="fs-13 fw-500 text-900"> Have an account? </div>
                        <a className={`${Styles["sign-link"]}`} onClick={() => { handleSignUpClose(); handleLoginShow() }}> Sign in </a>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default SignUp
