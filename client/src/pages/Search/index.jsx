import React from 'react';
import Styles from './search.module.css';
import { FaTelegram } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const Search = () => {

    const navigate = useNavigate();

    const handleSearch = () => {
        navigate('/chat');
    }

    return (
        <>
            <div className={Styles.SearchMain}>
                <div className="container h-100">
                    <div className={`${Styles.searchInner}`}>
                        <div className="fs-64 fw-700">iMEDIC BOT</div>
                        <div className="fs-32 fw-500 mb-5">Your Personal Health Assistant</div>
                        {/* <div className={`${Styles.chatImg}`}>
                            <img src="/assets/images/iMedicBot.png" alt="" />
                        </div> */}
                        <div className={Styles.search}>
                            <input type="search" placeholder='Send a message...' />
                            <button className={`${Styles.icon} bg-transparent border-0`} onClick={handleSearch}>
                                <FaTelegram />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search
