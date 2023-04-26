import React, { useState } from 'react';
import Styles from './chat.module.css';
import { FaUserCircle, FaTelegram, FaBars } from 'react-icons/fa'
import { BiLogOut } from 'react-icons/bi';
import { BsFillTrashFill, BsPersonCircle } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { purgeAuth } from '../../store/userSlice';
import { useNavigate } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Chat = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [offCanvasShow, setOffCanvasShow] = useState(false);

    const handleClose = () => setOffCanvasShow(false);
    const handleShow = () => setOffCanvasShow(true);


    const handleLogout = () => {
        navigate('/');
        dispatch(purgeAuth())
    }


    return (
        <>
            <div className={Styles.chatMain}>
                <div className="row mx-0 g-0 align-items-center">
                    <div className="col-lg-3 d-none d-md-block">
                        <div className={Styles.sidebar}>
                            <ul className={Styles.chatHistory}>
                                {new Array(20).fill(0).map((item, i) => {
                                    return (
                                        <li className='text-truncate' key={i}>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, porro.
                                        </li>
                                    )
                                })}
                            </ul>
                            <ul className={Styles.list}>
                                <li>
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="icon">
                                            <BsFillTrashFill />
                                        </div>
                                        <div className={Styles.text}>Clear conversation</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="icon">
                                            <FaUserCircle />
                                        </div>
                                        <div className={Styles.text}>Upgrade to Plus</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex align-items-center gap-2" onClick={handleLogout}>
                                        <div className="icon">
                                            <BiLogOut />
                                        </div>
                                        <div className={Styles.text}>Log out</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className={Styles.chatContainer}>
                            <div className={Styles.chatMessage}>
                                <div className="row justify-content-center mx-0">
                                    <div className="col-lg-8 col-md-5">
                                        <div className="p-3 text-end fs-18 d-block d-md-none">
                                            <button type='button' onClick={handleShow} className='btn p-0'>
                                                <FaBars />
                                            </button>
                                        </div>
                                        {new Array(40).fill(0).map((item, i) => {
                                            return (
                                                <div className='mb-4 px-3 px-md-0'>
                                                    <div className='d-flex align-items-center gap-3 py-3'>
                                                        <div className='chat-profile'>
                                                            <BsPersonCircle />
                                                        </div>
                                                        <div className={`${Styles["question"]} flex-1`}>hey</div>
                                                    </div>
                                                    <div className="chat-container">
                                                        <div className='d-flex align-items-center justify-content-end gap-3'>
                                                            <div className={`${Styles["answer"]}`}>
                                                                <div className='d-flex align-items-center gap-4'>
                                                                    <div className={`${Styles["answer-text"]} flex-1`}>
                                                                        Lorem ipsum dolor sit amet.
                                                                    </div>
                                                                    <div className={`${Styles["logo"]}`}>
                                                                        <img src="/assets/images/logo.png" alt="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>

                            <div className={Styles["chat-input"]}>
                                <div className='row justify-content-center g-md-0'>
                                    <div className='col-lg-8'>
                                        <div className={Styles["search-input"]}>
                                            <input type='text' id='myInput' placeholder='Enter your text here' />
                                            <button className={Styles['send-btn']} onClick={handleShow}>
                                                <FaTelegram />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* responsive sidebar */}
            <Offcanvas show={offCanvasShow} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='p-0'>
                    <div className={Styles.sidebar}>
                        <ul className={Styles.chatHistory}>
                            {new Array(20).fill(0).map((item, i) => {
                                return (
                                    <li className='text-truncate' key={i}>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, porro.
                                    </li>
                                )
                            })}
                        </ul>
                        <ul className={Styles.list}>
                            <li>
                                <div className="d-flex align-items-center gap-2">
                                    <div className="icon">
                                        <BsFillTrashFill />
                                    </div>
                                    <div className={Styles.text}>Clear conversation</div>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex align-items-center gap-2">
                                    <div className="icon">
                                        <FaUserCircle />
                                    </div>
                                    <div className={Styles.text}>Upgrade to Plus</div>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex align-items-center gap-2" onClick={handleLogout}>
                                    <div className="icon">
                                        <BiLogOut />
                                    </div>
                                    <div className={Styles.text}>Log out</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default Chat
