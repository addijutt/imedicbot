import React from 'react';
import Styles from './home.module.css';
import Accordion from 'react-bootstrap/Accordion';
import faqs from '../../utils/faq.json';
import testimonials from '../../utils/testimonial.json';
import Slider from "react-slick";
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

const Home = () => {

    const testimonialSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        initialSlide: 0,
        infinite: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div id='/'></div>
            <div className="bg-white">
                <div className="container-fluid pb-lg-3 pb-md-4 p-0">
                    <div id="home" className={`${Styles["custom-container"]}`}>
                        <div className="row align-items-center">
                            <div className="col-lg-5 ps-md-4 order-2 order-md-1">
                                <div className="task-content mt-lg-0 mt-md-5 mt-3">
                                    <h1 className={Styles.h1}>Revolutionize Your Healthcare Experience with iMedicBot – Your Personal AI Medical Assistant</h1>
                                    {/* <h1 className={Styles.h1}>Be wise. Organize <br className="d-lg-block d-none" /> and <br className="d-md-block d-none d-lg-none" /> digitize your <br className="d-lg-block d-none" />entreprise!</h1> */}
                                    <h4 className={`${Styles.h4} mt-3`}>Effortlessly Manage Health Records, Schedule Appointments, and Get Expert Medical Advice – All at Your Fingertips!</h4>
                                    <div className="d-flex align-items-center flex-column flex-md-row gap-5 mt-4">
                                        <button className="btnPrimary btnLg px-lg-4 border-0">Try now for free</button>
                                        <div className={`${Styles["downloads-btn"]} d-flex align-items-center gap-3`}>
                                            <p className={`${Styles["fs-dark"]} text-end mb-0`}>Download <br />the App:</p>
                                            <a><img src="/assets/icons/apple-icon.svg" alt="" /></a>
                                            <a><img src="/assets/icons/playStore-icon.svg" alt="" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 order-1 order-md-2 px-lg-5">
                                <div className="task-img">
                                    <img src="/assets/images/main.png" className="w-100" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className={Styles["hr"]} />
                </div>
            </div>


            <div className="bg-white">
                <div className="container-fluid pt-5">
                    <h1 className="text-center">Key features and benefits</h1>
                </div>

                <div id="features" className={`${Styles["features-section"]} ${Styles["custom-container"]}`}>
                    <div className="features-content ">
                        <div className="row">
                            <div className="col-lg-3 col-6">
                                <div className={`${Styles["feature-card"]}`}>
                                    <div className={`${Styles["feature-box"]} mb-4`}>
                                        <img src="/assets/images/client-list.svg" alt="" />
                                    </div>
                                    <h3 className={`${Styles["dark-h3"]} mt-md-4 mt-3 fs-16`}> Personal Health Record Management</h3>
                                    {/* <p className={`${Styles["fs-light"]} w-75 fs-18`}>
                                        Personal Health Record Management
                                    </p> */}
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className={`${Styles["feature-card"]}`}>
                                    <div className={`${Styles["feature-box"]}`}>
                                        <img src="/assets/images/employee-list.svg" alt="" />
                                    </div>
                                    <h3 className={`${Styles["dark-h3"]} mt-md-4 mt-3 fs-16`}> 24/7 Medical Advice</h3>
                                    {/* <p className={`${Styles["fs-light"]} w-75`}>
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat.
                                    </p> */}
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className={`${Styles["feature-card"]}`}>
                                    <div className={`${Styles["feature-box"]}`}>
                                        <img src="/assets/images/assign-tasks.svg" alt="" />
                                    </div>
                                    <h3 className={`${Styles["dark-h3"]} mt-md-4 mt-3 fs-16`}>Virtual Symptom Checker</h3>
                                    {/* <p className={`${Styles["fs-light"]} w-75`}>
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat.
                                    </p> */}
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className={`${Styles["feature-card"]}`}>
                                    <div className={`${Styles["feature-box"]}`}>
                                        <img src="/assets/images/qr-code.svg" alt="" />
                                    </div>
                                    <h3 className={`${Styles["dark-h3"]} mt-md-4 mt-3 fs-16`}>Medication Reminders</h3>
                                    {/* <p className={`${Styles["fs-light"]} w-75`}>
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat.
                                    </p> */}
                                </div>
                            </div>
                            <div className="col-lg-3 col-6 mt-5">
                                <div className={`${Styles["feature-card"]}`}>
                                    <div className={`${Styles["feature-box"]}`}>
                                        <img src="/assets/images/log-tasks.svg" alt="" />
                                    </div>
                                    <h3 className={`${Styles["dark-h3"]} mt-md-4 mt-3 fs-16`}>Multi-Platform Compatibility</h3>
                                    {/* <p className={`${Styles["fs-light"]} w-75`}>
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat.
                                    </p> */}
                                </div>
                            </div>
                            <div className="col-lg-3 col-6 mt-5">
                                <div className={`${Styles["feature-card"]}`}>
                                    <div className={`${Styles["feature-box"]}`}>
                                        <img src="/assets/images/stay-touch.svg" alt="" />
                                    </div>
                                    <h3 className={`${Styles["dark-h3"]} mt-md-4 mt-3 fs-16`}>Stay in touch</h3>
                                    {/* <p className={`${Styles["fs-light"]} w-75`}>
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat.
                                    </p> */}
                                </div>
                            </div>
                            <div className="col-lg-3 col-6 mt-5">
                                <div className={`${Styles["feature-card"]}`}>
                                    <div className={`${Styles["feature-box"]}`}>
                                        <img src="/assets/images/log-tasks.svg" alt="" />
                                    </div>
                                    <h3 className={`${Styles["dark-h3"]} mt-md-4 mt-3 fs-16`}>Data Security and Privacy</h3>
                                    {/* <p className={`${Styles["fs-light"]} w-75`}>
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat.
                                    </p> */}
                                </div>
                            </div>
                            <div className="col-lg-3 col-6 mt-5">
                                <div className={`${Styles["feature-card"]}`}>
                                    <div className={`${Styles["feature-box"]}`}>
                                        <img src="/assets/images/stay-touch.svg" alt="" />
                                    </div>
                                    <h3 className={`${Styles["dark-h3"]} mt-md-4 mt-3 fs-16`}>Health Tracking and Analytics</h3>
                                    {/* <p className={`${Styles["fs-light"]} w-75`}>
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat.
                                    </p> */}
                                </div>
                            </div>
                        </div>



                    </div>
                </div>

            </div>

            <div className="bg-white">

                <div className={`${Styles["works-procedure"]} ${Styles["custom-container"]}`}>
                    <div id="works" className={Styles["how-work-section"]}>
                        <h1 className="text-center">How it works?</h1>
                        <div className="row mt-5 justify-content-between">
                            <div className="col-lg-3">
                                <div className="create-account mt-md-5 mt-lg-0 ">
                                    <div className="create-img px-lg-0 px-md-5">
                                        <img src="/assets/images/create.png" className="w-100" alt="" />
                                    </div>
                                    <div className="px-lg-1 px-md-4 mt-4">
                                        <h3 className={`${Styles["light-h3"]}`}>Personalized Health Information and Advice</h3>
                                        <p className={`${Styles["fs-dark"]}`}> iMedicBot provides users with tailored health information and advice based on user inputs, powered by advanced AI technology and natural language processing. </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3">
                                <div className={`${Styles["add-procedure"]} mt-5 pt-3 pt-md-0 pt-lg-5 position-relative`}>
                                    <div className=" add-img px-lg-0 px-md-5">
                                        <img src="/assets/images/add.png" className="w-100" alt="" />
                                    </div>
                                    <div className="px-lg-1 px-md-4 mt-4">
                                        <h3 className={`${Styles["light-h3"]}`}>Cutting-Edge AI and NLP Technologies</h3>
                                        <p className={`${Styles["fs-dark"]}`}>
                                            iMedicBot is powered by advanced AI and natural language processing technologies, including chatbots powered by GPT-3, to provide users with real-time responses to their health queries.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3">
                                <div className={`${Styles["task-assigns"]} mt-5 mt-lg-0  position-relative`}>
                                    <div className="assign-img px-lg-0 px-md-5">
                                        <img src="/assets/images/assign.png" className="w-100" alt="" />
                                    </div>
                                    <div className="px-lg-1 px-md-4 mt-4">
                                        <h3 className={`${Styles["light-h3"]}`}>24/7 Access to Health Resources</h3>
                                        <p className={`${Styles["fs-dark"]}`}>Our platform offers users a wealth of health information and resources, including tips for healthy living, information on common health conditions and treatments, and more.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-4 mt-md-5">
                            <button type='button' className="btn btnPrimary btnLg px-5 px-md-3">Get started</button>
                        </div>
                    </div>

                </div>

            </div>
            <div className="bg-white">

                <div className={`${Styles["web-version-section"]} ${Styles["custom-container"]}`}>
                    <div className="row align-items-center">
                        <div className="col-lg-7 px-md-5 ">
                            <div className="laptop-img">
                                <img src="/assets/images/secondary.png" className="w-100" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4 px-lg-5 px-0">
                            <div className={`${Styles["web-version-content"]} mt-lg-0 mt-5`}>
                                <h1>Web Version</h1>

                                <ul className="tabs-content mt-4 m-0 p-0 list-unstyled">
                                    <li className="d-flex gap-3">
                                        <span><img src="/assets/images/blue-check.svg" alt="" /></span>
                                        <span className="fs-dark">Sed ut perspiciatis unde omnis</span>
                                    </li>
                                    <li className="d-flex gap-3">
                                        <span><img src="/assets/images/blue-check.svg" alt="" /></span>
                                        <span className="fs-dark">Rem aperiam, eaque ipsa quae ab illo inventore veritatis</span>
                                    </li>
                                    <li className="d-flex gap-3">
                                        <span><img src="/assets/images/blue-check.svg" alt="" /></span>
                                        <span className="fs-dark">Iste natus error sit voluptatem accusantium</span>
                                    </li>
                                    <li className=" d-flex gap-3">
                                        <span><img src="/assets/images/blue-check.svg" alt="" /></span>
                                        <span className="fs-dark">Et quasi architecto beatae vitae dicta sunt explicabo</span>
                                    </li>
                                </ul>


                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="bg-white">
                <div className={`${Styles["custom-container"]}`}>
                    <hr className={Styles["hr"]} />
                </div>
            </div>

            <div className="bg-white">
                <div className={`${Styles["mobile-app-section"]} ${Styles["custom-container"]}`}>

                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 mb-5 mb-md-0">
                            <div className={`${Styles["mobile-version-content"]} mt-md-0`}>
                                <h1 className="no-wrap">Mobile App version</h1>

                                <ul className="tabs-content pe-5 mt-4 p-0 list-unstyled">
                                    <li className="d-flex gap-3">
                                        <span><img src="/assets/images/blue-check.svg" alt="" /></span>
                                        <span className={`${Styles["fs-dark"]}`}>Sed ut perspiciatis unde omnis</span>
                                    </li>
                                    <li className="d-flex gap-3">
                                        <span><img src="/assets/images/blue-check.svg" alt="" /></span>
                                        <span className={`${Styles["fs-dark"]}`}>Rem aperiam, eaque ipsa quae ab illo inventore veritatis</span>
                                    </li>
                                    <li className="d-flex gap-3">
                                        <span><img src="/assets/images/blue-check.svg" alt="" /></span>
                                        <span className={`${Styles["fs-dark"]}`}>Iste natus error sit voluptatem accusantium</span>
                                    </li>
                                    <li className=" d-flex gap-3">
                                        <span><img src="/assets/images/blue-check.svg" alt="" /></span>
                                        <span className={`${Styles["fs-dark"]}`}>Et quasi architecto beatae vitae dicta sunt explicabo</span>
                                    </li>
                                </ul>

                                <div className={`${Styles["download-badges"]} d-flex gap-3 mt-5`}>
                                    <button type='button' className='btn p-0'><img src="/assets/images/appStore-badge.png" alt="" /></button>
                                    <button type='button' className='btn p-0'><img src="/assets/images/Google-badge.png" alt="" /></button>
                                </div>


                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 px-lg-0 px-md-5">
                            <div className={`${Styles["mobile-app-img"]} text-center`}>
                                <img src="/assets/images/iphone.png" className="" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white">

                <div className={`${Styles["custom-container"]}`}>
                    <div id="pricing" className={`${Styles["pricing-section"]}`}>
                        <div className={`${Styles["pricing-content"]} text-center`}>
                            <h1>Pricing</h1>
                            <ul className={`${Styles["tabs"]} gap-2 mt-2`}>
                                <li><a className={`${Styles["active"]}`} href="javascript:void(0)">Monthly</a></li>
                                <li><a href="javascript:void(0)" className="">Annually is 15% off</a></li>
                            </ul>
                        </div>
                        <div className="row justify-content-center mt-5">
                            <div className="col-lg-5">
                                <div className={`${Styles["pricing-card"]} text-lg-center h-100`}>
                                    <div className={`${Styles["price-basis"]}`}>
                                        <h3 className="text-800 fs-36 fw-500">Free</h3>
                                        <p className={`${Styles["fs-dark"]} mt-2`}>Small teams and <br className="d-lg-none d-md-block d-none" />
                                            entrepreneurs
                                        </p>
                                    </div>

                                    <div className={`${Styles["employee-basis"]}`}>
                                        <hr className="mt-5 mb-4 d-lg-block d-none" />

                                        <h6 className="fs-16 fw-500">Up to 20 requests</h6>

                                        <hr className="mt-lg-4 mb-lg-4" />
                                        <div className="d-lg-block d-flex align-items-center">
                                            <p className="fs-20 fw-500 text-800 mb-lg-0 me-lg-0 me-2">Free</p>
                                            <p className={`${Styles["plan"]} ${Styles["fs-light"]}`}>Forever</p>
                                        </div>
                                    </div>
                                    <div className="text-center  ms-lg-0 ms-md-5 mt-lg-5 mt-md-0">
                                        <button type='button' className={`${Styles["w-40"]} btn btnPrimaryOutline btnLg`}>Try Now!</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className={`${Styles["pricing-card"]} mt-lg-0 mt-4 text-lg-center h-100`}>
                                    <div className={`${Styles["price-basis"]}`}>
                                        <h3 className={`${Styles["text-tilt"]}  fs-36 fw-500`}>Premium</h3>
                                        <p className={`${Styles["fs-dark"]} mt-2`}>Middle business</p>
                                    </div>
                                    <div className={`${Styles["employee-basis"]}`}>
                                        <hr className="mt-5 mb-4 d-lg-block d-none" />

                                        <h6 className="fs-16 fw-500">Unlimited requests</h6>

                                        <hr className="mt-lg-4 mb-lg-4" />
                                        <div className="d-lg-block d-flex align-items-center">
                                            <p className={`${Styles["text-tilt"]} fs-20 fw-500 mb-lg-0 me-2 me-lg-0`}>$5</p>
                                            <p className={`${Styles["plan"]} ${Styles["fs-light"]}`}>per User/month</p>
                                        </div>
                                    </div>



                                    <div className="text-center ms-lg-0 ms-md-5 mt-lg-5 mt-md-0">
                                        <button type='button' className={`${Styles["w-40"]} btn btnPrimary btnLg w-40`}>Buy</button>
                                    </div>
                                </div>
                            </div>

                            {false && <div className="col-lg-4">
                                <div className={`${Styles["pricing-card"]} mt-lg-0 mt-4 text-lg-center`}>
                                    <div className={`${Styles["price-basis"]}`}>
                                        <h3 className="text-primary fs-36 fw-500">Enterprise</h3>
                                        <p className={`${Styles["fs-dark"]} mt-2`}>Huge enterprise <br className="d-lg-none d-md-block d-none" /> business
                                        </p>
                                    </div>

                                    <div className={`${Styles["employee-basis"]}`}>
                                        <hr className="mt-5 mb-4 d-lg-block d-none" />

                                        <h6 className="fs-16 fw-500">Unlimited <br className="d-lg-block d-none" />employees</h6>

                                        <hr className="mt-lg-4  mb-lg-4" />
                                        <div className="d-lg-block d-flex align-items-center">
                                            <p className="fs-20 fw-500 text-primary mb-lg-0 me-2 me-lg-0">$23</p>
                                            <p className={`${Styles["plan"]} ${Styles["fs-light"]}`}>per employee/month</p>
                                        </div>
                                    </div>



                                    <div className="text-center mt-lg-5 ms-lg-0 ms-md-5">
                                        <button type='button' className={`${Styles["w-40"]} btn btnPrimary btnLg w-40`}>Buy</button>
                                    </div>
                                </div>
                            </div>}

                        </div>
                    </div>
                </div>

            </div>




            <div className="bg-white">
                <div id="about" className={`${Styles["about-section"]} ${Styles["custom-container"]}`}>
                    <div className="row mx-0 justify-content-between align-items-center px-lg-5">
                        <div className="col-lg-5">
                            <h2 className='mb-3'>About us</h2>

                            <p className={`${Styles["fs-dark"]} fs-15`}>
                                At iMedicBot, our mission is to revolutionize the way people manage their healthcare by harnessing the power of artificial intelligence and cutting-edge technology. Our dedicated team of healthcare professionals, engineers, and data scientists has developed a user-friendly and comprehensive AI-driven medical assistant to empower individuals to take control of their health and well-being.
                            </p>
                            <p className={`${Styles["fs-dark"]} fs-15`}>
                                Founded in 2021, iMedicBot has quickly gained recognition for its innovative approach to personalized healthcare. We are committed to providing our users with the highest quality of service, ensuring that our platform remains accurate, up-to-date, and secure.
                            </p>
                            <p className={`${Styles["fs-dark"]} fs-15`}>
                                Our passion for enhancing the healthcare experience drives us to constantly improve and expand iMedicBot's capabilities. We firmly believe that, by making healthcare management more accessible and convenient, we can help create a healthier, happier world for everyone.
                                Experience the future of personalized healthcare with iMedicBot – your trusted AI medical assistant.
                            </p>
                        </div>
                        <div className="col-lg-5">
                            <div className={`${Styles["about-img"]}`}>
                                <img src="/assets/images/about.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white">
                <div className={`${Styles["testimonial-section"]} ${Styles["custom-container"]} testimonial-section pb-0`}>
                    <h2 className='text-center'>Testimonials</h2>

                    <Slider {...testimonialSettings}>
                        {testimonials.map((test, i) => {
                            const { testimonial, name } = test
                            return (
                                <React.Fragment key={i}>
                                    <div className={`${Styles.testimonialCard}`}>
                                        <p className={`${Styles["fs-dark"]} ps-4`}>"{testimonial}" </p>
                                        <h4 align="right">- {name}</h4>
                                    </div>
                                </React.Fragment>
                            )
                        })}
                    </Slider>
                </div>
            </div>

            <div className="bg-white">
                <div id="faq" className={`${Styles["faq-section"]} ${Styles["custom-container"]} pt-0`}>
                    <div className="row mx-0 justify-content-start">
                        <div className="col-lg-3">
                            <h1>FAQ</h1>
                        </div>
                        <div className="col-lg-7">
                            <div className={`${Styles["faq-accordian"]} faq-accordian`}>
                                <Accordion defaultActiveKey="0" flush>
                                    {faqs.map((faq, i) => {
                                        const { question, answer } = faq;
                                        return (
                                            <React.Fragment key={i}>
                                                <Accordion.Item eventKey={i}>
                                                    <Accordion.Header>{question}</Accordion.Header>
                                                    <Accordion.Body>
                                                        {answer}
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </React.Fragment>
                                        )
                                    })}
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white">

                <div className={`${Styles["custom-container"]} `}>
                    <div id="contact" className={`${Styles["have-question-section"]}`}>
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-10 mb-5">
                                <h1 className='mb-4'>Contact Us</h1>
                                <div className={`${Styles["fs-dark"]} w-75 mb-4`}>
                                    We're always here to help and answer any questions you may have. eel free to reach out to us through any of the following channels:
                                </div>

                                <div className='d-flex align-items-center gap-2 mb-2'>
                                    <div>  Email:</div>
                                    <a href="mailto:support@imedicbot.com" className='textPrimary d-block'>
                                        support@imedicbot.com
                                    </a>
                                </div>
                                <div className='d-flex align-items-center gap-2'>
                                    <div> Phone:</div>
                                    <a href="tel: +1 (555) 123-4567" className='textPrimary d-block'>
                                        +1 (555) 123-4567
                                    </a>
                                </div>
                                <div className={`${Styles["fs-dark"]} w-75 my-4`}>
                                    For more information and updates, you can also visit our website at <a href="www.imedicbot.com" target="_blank" rel="noopener noreferrer" className='textPrimary'>www.imedicbot.com</a>.
                                    Our support team is available to assist you 24/7. Don't hesitate to get in touch with any inquiries, feedback, or concerns. Your satisfaction is our top priority.
                                </div>

                                <div className={`${Styles["social-icons"]}`}>
                                    <ul>
                                        <li>
                                            <a href="https://facebook.com/imedicbot">
                                                <FaFacebook />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/imedicbot">
                                                <FaTwitter />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://linkedin.com/company/imedicbot">
                                                <FaLinkedin />
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                            <div className="col-lg-5 col-md-10">
                                <h1 className="text-center">Have a question?</h1>
                                <p className="text-800 fs-16 text-center mt-3">Drop us a line now</p>
                                <div>
                                    <div className="row mt-md-5 mt-4">
                                        <div className="col-md-6">
                                            <div className={`${Styles["fs-dark"]} mb-2`}>Name</div>
                                            <input type="text" placeholder="Your Name" />
                                        </div>
                                        <div className="col-md-6 mt-md-0 mt-3">
                                            <div className={`${Styles["fs-dark"]} mb-2`}>Email</div>
                                            <input type="text" placeholder="name@site.com" />
                                        </div>
                                    </div>
                                    <div className="question-area mt-3">
                                        <div className={`${Styles["fs-dark"]} mb-2`}>Your question</div>
                                        <textarea rows="3" placeholder="Your question here"></textarea>
                                    </div>
                                    <div className="text-center submit-btn mt-3">
                                        <button type='button' className="btn btnPrimary btnLg w-100">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >

                </div >
            </div>


        </>
    )
}

export default Home
