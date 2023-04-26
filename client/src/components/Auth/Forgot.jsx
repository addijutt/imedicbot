import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Styles from './auth.module.css';

const Forgot = ({ forgotShow, handleForgotClose, handleSignUpShow }) => {
    return (
        <>
            <Modal show={forgotShow} onHide={handleForgotClose} className='customAuth' centered animation={true}>
                <Modal.Body className='p-0'>
                    <div className={Styles.Auth}>
                        <div className="fs-32 fw-600 text-900 mb-4 text-center">Forgot password?</div>
                        <div class="fs-13 fw-500 text-center text-800 mb-4"> Enter your email address to request a password <br />  reset. You will receive an email with further instructions. </div>
                        <div className="mb-4">
                            <input type="email" className={Styles.input} placeholder='Your E-mail' />
                        </div>
                        <div className="mb-4 mt-5">
                            <button type='button' className='btn btnPrimary btnLg w-100'>Request</button>
                        </div>
                    </div>
                    <div className={`${Styles["form-footer"]} gap-4`}>
                        <div className="fs-13 fw-500 text-900"> Don't have an account? </div>
                        <a className={`${Styles["sign-link"]}`} onClick={() => { handleForgotClose(); handleSignUpShow(); }}> Sign up </a>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Forgot
