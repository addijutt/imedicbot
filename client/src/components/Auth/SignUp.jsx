import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Styles from './auth.module.css';
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { setAuth } from "../../store/user";
import http from "../../api";
import { environment } from "../../constants";
import { validateEmail } from "../../core/helpers/validation";


const SignUp = ({ signUpShow, handleSignUpClose, handleLoginShow, handleForgotShow }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [companyName, setCompanyName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validation, setValidation] = useState({ email: "", password: "", companyName: "" });
    const [isPasswordShow, setIsPasswordShow] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        if (e.target.name === "companyName") {
            setCompanyName(e.target.value);
        }
        if (e.target.name === "email") {
            setEmail(e.target.value);
        }
        if (e.target.name === "password") {
            setPassword(e.target.value);
        }
    };

    const handleValidation = (e) => {
        let temp = { ...validation };
        if (e.target.name === "companyName") {
            if (companyName.length <= 0) temp = { ...temp, companyName: "Company name is required" };
            // else if (password.length < 4) temp = { ...temp, password: "This field must be at least 4 characters long" };
            else temp = { ...temp, companyName: "" };
        }
        if (e.target.name === "email") {
            if (email.length <= 0) {
                temp = { ...temp, email: "email is required" };
            } else if (!validateEmail(email)) {
                temp = { ...temp, email: "email is not valid" };
            } else {
                temp = { ...temp, email: "" };
            }
        }
        if (e.target.name === "password") {
            if (password.length <= 0) temp = { ...temp, password: "password is required" };
            else if (password.length < 4) temp = { ...temp, password: "This field must be at least 4 characters long" };
            else temp = { ...temp, password: "" };
        }
        setValidation(temp);
    };

    const checkDisable = () => {
        if (email.length <= 0 || password.length <= 0 || companyName.length <= 0) {
            return true;
        }
        if (validation.email.length > 0 || validation.password.length > 0 || validation.companyName.length > 0) {
            return true;
        }
        return false;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let body = {
            name: companyName,
            email: email,
            password: password,
        };
        http
            .post(environment.api_url + "/user/signup", body)
            .then((res) => {
                // console.log(res)
                setError("");
                setCompanyName("");
                setEmail("");
                setPassword("");
                handleSignUpClose()
            })
            .catch((err) => {
                // console.log(err?.response?.data?.message)
                setError(err?.response?.data?.message);
            });
    };
    return (
        <>
            <Modal show={signUpShow} onHide={handleSignUpClose} className='customAuth' centered animation={true}>
                <Modal.Body className='p-0'>
                    <div className={Styles.Auth}>
                        <div className="fs-32 fw-600 text-900 mb-4">Sign up</div>
                        {error && <div className="error text-center mb-3">{error}</div>}
                        <div className={`position-relative mb-3 ${validation.companyName.length > 0 ? "error-message" : ""}`}>
                            <label class="fs-13 fw-500 text-900 mb-1"> Company Name </label>
                            <input type="text" className={Styles.input} placeholder='Company Name'
                                name="companyName"
                                value={companyName}
                                onBlur={(e) => handleValidation(e)}
                                onChange={(e) => handleChange(e)}
                            />
                           {validation.companyName.length > 0 && <div className="error">{validation.companyName}</div>}
                        </div>
                        <div className={`position-relative mb-3 ${validation.email.length > 0 ? "error-message" : ""}`}>
                            <label class="fs-13 fw-500 text-900 mb-1"> Email </label>
                            <input type="email" className={Styles.input} placeholder='Your E-mail'
                                name="email"
                                value={email}
                                onBlur={(e) => handleValidation(e)}
                                onChange={(e) => handleChange(e)} />
                            {validation.email.length > 0 && <div className="error">{validation.email}</div>}
                        </div>
                        <label class="fs-13 fw-500 text-900 mb-1">Password </label>
                        <div className={`position-relative mb-3 ${validation.password.length > 0 ? "error-message" : ""}`}>
                            <input type={isPasswordShow ? "text" : 'password'} className={Styles.input} placeholder='At least 4 characters'
                                name="password"
                                value={password}
                                onBlur={(e) => handleValidation(e)}
                                onChange={(e) => handleChange(e)} />
                            {validation.password.length > 0 && <div className="error">{validation.password}</div>}
                            {password.length > 0 && <div className={Styles.icon} onClick={() => setIsPasswordShow(!isPasswordShow)}>
                                {isPasswordShow ? <FaEyeSlash /> : <FaEye />}
                            </div>}
                        </div>
                        <div className="mb-4 mt-5">
                            <button type='button' className='btn btnPrimary btnLg w-100' disabled={checkDisable()}
                                onClick={handleSubmit}>Sign Up</button>
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
