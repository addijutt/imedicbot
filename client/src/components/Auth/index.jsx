import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Styles from './auth.module.css';
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { environment } from '../../constants';
import http from '../../api';

const Login = ({ loginShow, handleLoginClose, handleSignUpShow, handleForgotShow }) => {


    const defaultBody = {
        email: "",
        password: "",
    };

    const defaultValidationErrors = {
        email: [],
        password: [],
    };

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isPasswordShow, setIsPasswordShow] = useState(false);

    const [body, setBody] = useState(defaultBody);
    const [validationErrors, setValidationErrors] = useState(defaultValidationErrors);


    const checkValidation = () => {
        if (body.email.length <= 0 || body.password.length <= 0) return true;
        return false;
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        let body = {
            email: email,
            password: password,
        };

        http
            .post(environment.api_url + "/user/login", { user: body })
            .then((res) => {
                console.log(res.data);
                setBody(defaultBody);
                handleLoginClose();
            })
            .catch((err) => {
                console.log(err)
            });
    };

    return (
        <>
            <Modal show={loginShow} onHide={handleLoginClose} className='customAuth' centered animation={true}>
                <Modal.Body className='p-0'>
                    <div className={Styles.Auth}>
                        <div className="fs-32 fw-600 text-900 mb-4">Sign in</div>
                        <div className="mb-4">
                            <input type="email"
                                name="email"
                                value={body?.email}
                                onInput={(e) => setBody({ ...body, email: e.target.value })}
                                onBlur={(e) => {
                                    setValidationErrors({
                                        ...validationErrors,
                                        email: checkValidation(e),
                                    });
                                }}
                                className={Styles.input} placeholder='Login' />
                        </div>
                        <div className="position-relative">
                            <input type={isPasswordShow ? "text" : 'password'} className={Styles.input} placeholder='Password'
                                name="password"
                                value={body?.password}
                                onInput={(e) => setBody({ ...body, password: e.target.value })}
                                onBlur={(e) => {
                                    setValidationErrors({
                                        ...validationErrors,
                                        password: checkValidation(e),
                                    });
                                }}
                            />
                            <div className={Styles.icon} onClick={() => setIsPasswordShow(!isPasswordShow)}>
                                {isPasswordShow ? <FaEyeSlash /> : <FaEye />}
                            </div>
                        </div>
                        <div className="mb-4 mt-5">
                            <button type='button' className='btn btnPrimary btnLg w-100' disabled={checkValidation()} onClick={handleSubmit}>Login</button>
                        </div>
                        <div className="text-center"><a className="fs-14 fw-500 text-800" onClick={() => { handleLoginClose(); handleForgotShow(); }}> Forgot password? </a></div>
                    </div>
                    <div className={`${Styles["form-footer"]} gap-4`}>
                        <div className="fs-13 fw-500 text-900"> Don't have an account? </div>
                        <a className={`${Styles["sign-link"]}`} onClick={() => { handleLoginClose(); handleSignUpShow(); }}> Sign up </a>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Login
