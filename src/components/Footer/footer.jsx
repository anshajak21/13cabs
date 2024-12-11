import React from 'react';
import Image from 'next/image';
import ScrollToTop from './scrollbtn';
import fs from 'fs/promises';
import path from 'path';
import Script from "next/script";
import style from './footer.module.scss';

async function getJson() {
    const filePath = path.join(process.cwd(), 'src', 'data', 'services', 'pages.json');
    const data = await fs.readFile(filePath, 'utf-8');
    const jsonData = JSON.parse(data);
    return jsonData;
}

const Footer = async() => {
    let locationData = {};
    try {
        const jsonData = await getJson();
        locationData = jsonData;
    } catch (error) {
        console.error("Failed to fetch location data:", error);
    }
  return (
    <>
    <footer className={`site-footer ${style.Footer}`}>
        <a className="whatsapp-btn" href="https://api.whatsapp.com/send?phone=+61493711468&text=Hello,%20%20Apex%20Cabs" aria-label="whatsapp" target="_blank">
            <svg width="30" height="30" viewBox="0 0 0.72 0.72" fill="#fff" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve">
                <path d="M.498.42.447.396Q.438.391.429.399C.42.407.411.423.405.429Q.4.437.39.432A.3.3 0 0 1 .33.396.4.4 0 0 1 .288.345Q.285.335.291.33C.297.325.297.321.303.318A.02.02 0 0 0 .309.306Q.314.3.309.294C.304.288.291.255.285.24.282.219.276.219.27.219H.255C.249.219.24.225.237.228Q.21.255.21.291a.16.16 0 0 0 .03.078.3.3 0 0 0 .126.111q.021.01.042.015.022.008.048.003A.08.08 0 0 0 .507.462.05.05 0 0 0 .51.426zM.573.147a.299.299 0 0 0-.471.36L.06.66.219.618A.296.296 0 0 0 .657.357a.3.3 0 0 0-.084-.21m-.081.42a.25.25 0 0 1-.258.006L.225.567.132.591l.024-.09L.15.492C.078.372.114.222.231.147S.498.111.57.225a.25.25 0 0 1-.078.342"/>
            </svg>
        </a>
        <a className="call-btn" href="tel:281883546" aria-label="Click to call">
            <svg height="30" width="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.2 19.2" xmlSpace="preserve">
                <path d="M15.145 15.363c-0.663 -0.529 -2.728 -1.547 -3.238 -1.664 -0.509 -0.118 -1.124 0.374 -1.294 0.984 -0.171 0.611 -0.489 0.553 -0.489 0.553s-1.225 -0.45 -3.466 -2.683c-2.241 -2.233 -2.694 -3.457 -2.694 -3.457s-0.06 -0.318 0.551 -0.491c0.609 -0.171 1.099 -0.789 0.98 -1.297 -0.119 -0.509 -1.145 -2.571 -1.676 -3.231 -0.532 -0.66 -1.56 -0.32 -1.786 -0.155 -0.227 0.164 -2.616 1.683 -1.898 4.48 0.719 2.797 2.263 5.035 3.959 6.726 1.697 1.69 3.94 3.225 6.739 3.934 2.799 0.709 4.309 -1.685 4.473 -1.913 0.164 -0.227 0.5 -1.256 -0.161 -1.786M9.263 7.094c0.371 0.182 0.962 0.52 1.646 1.204 0.684 0.684 1.022 1.275 1.204 1.646 0.191 0.39 0.332 0.469 0.447 0.442 0.189 -0.044 0.251 -0.094 0.269 -0.488 0.014 -0.335 -0.146 -1.335 -1.165 -2.354s-2.019 -1.179 -2.354 -1.165c-0.394 0.017 -0.444 0.08 -0.487 0.269 -0.027 0.114 0.051 0.255 0.441 0.446m0.597 -3.935c-0.48 0 -0.602 0.297 -0.616 0.412 -0.03 0.233 0.142 0.422 0.499 0.524 0.408 0.117 2.024 0.635 3.379 1.989 1.355 1.354 1.873 2.971 1.99 3.379 0.102 0.356 0.29 0.528 0.524 0.499 0.116 -0.014 0.413 -0.135 0.412 -0.616 0 -0.38 -0.232 -2.371 -2.024 -4.164C12.231 3.391 10.24 3.159 9.861 3.159m6.538 -0.351C13.831 0.241 11.123 0.02 10.657 0.008c-0.568 -0.014 -0.794 0.241 -0.793 0.502 0 0.223 0.228 0.452 0.568 0.539 0.51 0.131 2.531 0.449 4.904 2.822 2.374 2.373 2.692 4.395 2.823 4.905 0.087 0.339 0.316 0.568 0.539 0.568 0.262 0 0.517 -0.225 0.502 -0.793 -0.012 -0.466 -0.233 -3.175 -2.8 -5.743"></path>
            </svg>
        </a>
        <ScrollToTop />
        <div className="upper-footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="footer-widget about-widget">
                            <div className="widget-title">
                                <h3>About</h3>
                            </div>
                            <p>There are many vari of pass of lorem ipsum availab but the majority have suffered in some form by injected humour or words</p>
                            <div className="social-block">
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-facebook-f"></i></a>
                                <a href="#"><i className="fa fa-youtube-play"></i></a>
                                <a href="#"><i className="fa fa-google-plus"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-5 col-lg-2">
                        <div className="footer-widget">
                            <div className="widget-title">
                                <h3>Links</h3>
                            </div>
                            <ul className="link-lists">
                                <li><a href="#">About</a></li>
                                <li><a href="#">Get a Taxi</a></li>
                                <li><a href="#">Our Reviews</a></li>
                                <li><a href="#">Latest News</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-7 col-lg-3">
                        <div className="footer-widget">
                            <div className="widget-title">
                                <h3>Contact</h3>
                            </div>
                            <p>86 Road Broklyn Street, 600 <br/> New York, USA</p>
                            <ul className="contact-infos">
                                <li><i className="fa fa-envelope"></i> needhelp@conexi.com</li>
                                <li><i className="fa fa-phone-square"></i> 666 888 000</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="footer-widget">
                            <div className="widget-title">
                                <h3>Newsletter</h3>
                            </div>
                            <p>Sign up now for our mailing list to get all latest news and updates from conexi company.</p>
                            <form action="#" className="subscribe-form">
                                <input type="text" name="email" placeholder="Enter your email"/>
                                <button type="submit">Go</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bottom-footer">
            <div className="container">
                <div className="inner-container">
                    <div className="left-block">
                        <a href="/" className="footer-logo"><img src="/img/resources/logo-1-1.png" alt="Awesome Image" /></a>
                        <span>&copy; 2020 <a href="#">Tonatheme.com</a></span>
                    </div>
                    <div className="right-block">
                        <ul className="link-lists">
                            <li><a href="#">Terms of Use</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer