"use client"
import Image from 'next/image';
import { useState } from 'react';
import Slider from '@/components/Slider/slider';
export default function ServiceTab() {
    const taxiSlider = [
        {
            name: "TOYOTA COMMUTER",
            img: "/images/cars/11-seater.webp",
            title: "Make it smooth",
            text: "It makes your journey smooth. Have maximum space and better accommodation for your family.",
            link: "tel:+611300530570",
            list: [
                {
                    key: "Taxi Doors",
                    value: "04"
                },
                {
                    key: "Passengers",
                    value: "11"
                },
                {
                    key: "Luggage",
                    value: "08"
                },
            ]
        },
        {
            name: "TOYOTA TARAGO",
            img: "/images/cars/7-seater.webp",
            title: "Stylish and Safe",
            text: "Choose Tarago for a stylish and safest ride. Taxi provides high levels of control and assistance.",
            link: "tel:+611300530570",
            list: [
                {
                    key: "Taxi Doors",
                    value: "04"
                },
                {
                    key: "Passengers",
                    value: "07"
                },
                {
                    key: "Luggage",
                    value: "06"
                },
            ]
        },
        {
            name: "TOYOTA CAMRY",
            img: "/images/cars/canry.webp",
            title: "Luxurious",
            text: "The Luxurious taxi, one can choose ever. Camry specially designed to provide you a luxurious experience.",
            link: "tel:+611300530570",
            list: [
                {
                    key: "Taxi Doors",
                    value: "04"
                },
                {
                    key: "Passengers",
                    value: "04"
                },
                {
                    key: "Luggage",
                    value: "02"
                },
            ]
        },
        {
            name: "KIA CARNIVAL",
            img: "/images/cars/kiac.webp",
            title: "The big bash",
            text: "It is known as BIG BASH. always ready for family, friends and all the luggage on trips and tours.",
            link: "tel:+611300530570",
            list: [
                {
                    key: "Taxi Doors",
                    value: "04"
                },
                {
                    key: "Passengers",
                    value: "07"
                },
                {
                    key: "Luggage",
                    value: "04"
                },
            ]
        }
    ];

    return (
        <section className="taxi-style-one">
            <div className="container">
                <div className="block-title text-center">
                    <div className="dot-line"></div>
                    <p>Our Variety of Cars</p>
                    <h2>Choose Taxi</h2>
                </div>
                <Slider showDots={true} CustomDotList={taxiSlider}>
                    {taxiSlider.map((taxi, index)=>(
                        <div className="single-taxi-one mx-2" key={`taxi-${index}`}>
                            <div className="inner-content">
                                <img src="/img/pricing/pricing-1-1.png" alt="Awesome Image" />
                                <h3>{taxi.name}</h3>
                                <p style={{fontSize:0}}>{taxi.text}</p>
                                <ul className="feature-list">
                                    {taxi['list'].map((item, key)=>(
                                        <li key={`taxi-item-${key}`}>
                                            <span className="name-line">{item.key}:</span>
                                            <span className="price-line">{item.value}</span>
                                        </li>
                                    ))}
                                </ul>
                                <a href={taxi.link} className="book-taxi-btn">Book Taxi</a>
                            </div>
                        </div>
                    ))}
                </Slider>
                {/* <ul className="nav nav-tabs tab-title" role="tablist">
                    <li className="nav-item">
                        <button onClick={()=>setServiceTab(1)} className={`nav-link ${serviceTab == 1 ? 'active':''}`}>TOYOTA COMMUTER</button>
                    </li>
                    <li className="nav-item">
                        <button onClick={()=>setServiceTab(2)} className={`nav-link ${serviceTab == 2 ? 'active':''}`}>TOYOTA TARAGO</button>
                    </li>
                    <li className="nav-item">
                        <button onClick={()=>setServiceTab(3)} className={`nav-link ${serviceTab == 3 ? 'active':''}`}>TOYOTA CAMRY</button>
                    </li>
                    <li className="nav-item">
                        <button onClick={()=>setServiceTab(4)} className={`nav-link ${serviceTab == 4 ? 'active':''}`}>KIA CARNIVAL</button>
                    </li>
                </ul>
                <div className="tab-content">
                    <div className={`tab-pane animated fadeInUp ${serviceTab == 1 ? 'show active':''}`}>
                        <div className="row">
                            <div className="col-lg-4">
                            </div>
                            <div className="col-lg-4">
                            </div>
                            <div className="col-lg-4">
                            </div>
                        </div>
                    </div>
                    <div className={`tab-pane animated fadeInUp ${serviceTab == 2 ? 'show active':''}`}>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="single-taxi-one">
                                    <div className="inner-content">
                                        <img src="/img/pricing/pricing-1-1.png" alt="Awesome Image" />
                                        <h3>M5 2008 Model</h3>
                                        <ul className="feature-list">
                                            <li>
                                                <span className="name-line">Base Rate:</span>
                                                <span className="price-line">$4.30</span>
                                            </li>
                                            <li>
                                                <span className="name-line">Per Mile/KM:</span>
                                                <span className="price-line">$2.00</span>
                                            </li>
                                            <li>
                                                <span className="name-line">Passengers:</span>
                                                <span className="price-line">4</span>
                                            </li>
                                        </ul>
                                        <a href="single-taxi.html" className="book-taxi-btn">Book Taxi</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="single-taxi-one">
                                    <div className="inner-content">
                                        <img src="/img/pricing/pricing-1-2.png" alt="Awesome Image" />
                                        <h3>E className 2010 Model</h3>
                                        <ul className="feature-list">
                                            <li>
                                                <span className="name-line">Base Rate:</span>
                                                <span className="price-line">$4.30</span>
                                            </li>
                                            <li>
                                                <span className="name-line">Per Mile/KM:</span>
                                                <span className="price-line">$2.00</span>
                                            </li>
                                            <li>
                                                <span className="name-line">Passengers:</span>
                                                <span className="price-line">4</span>
                                            </li>
                                        </ul>
                                        <a href="single-taxi.html" className="book-taxi-btn">Book Taxi</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="single-taxi-one">
                                    <div className="inner-content">
                                        <img src="/img/pricing/pricing-1-3.png" alt="Awesome Image" />
                                        <h3>Yaris 2014 Model</h3>
                                        <ul className="feature-list">
                                            <li>
                                                <span className="name-line">Base Rate:</span>
                                                <span className="price-line">$4.30</span>
                                            </li>
                                            <li>
                                                <span className="name-line">Per Mile/KM:</span>
                                                <span className="price-line">$2.00</span>
                                            </li>
                                            <li>
                                                <span className="name-line">Passengers:</span>
                                                <span className="price-line">4</span>
                                            </li>
                                        </ul>
                                        <a href="single-taxi.html" className="book-taxi-btn">Book Taxi</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`tab-pane animated fadeInUp ${serviceTab == 3 ? 'show active':''}`}>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="single-taxi-one">
                                    <div className="inner-content">
                                        <img src="/img/pricing/pricing-1-1.png" alt="Awesome Image" />
                                        <h3>M5 2008 Model</h3>
                                        <ul className="feature-list">
                                            <li>
                                                <span className="name-line">Base Rate:</span>
                                                <span className="price-line">$4.30</span>
                                            </li>
                                            <li>
                                                <span className="name-line">Per Mile/KM:</span>
                                                <span className="price-line">$2.00</span>
                                            </li>
                                            <li>
                                                <span className="name-line">Passengers:</span>
                                                <span className="price-line">4</span>
                                            </li>
                                        </ul>
                                        <a href="single-taxi.html" className="book-taxi-btn">Book Taxi</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="single-taxi-one">
                                    <div className="inner-content">
                                        <img src="/img/pricing/pricing-1-2.png" alt="Awesome Image" />
                                        <h3>E className 2010 Model</h3>
                                        <ul className="feature-list">
                                            <li>
                                                <span className="name-line">Base Rate:</span>
                                                <span className="price-line">$4.30</span>
                                            </li>
                                            <li>
                                                <span className="name-line">Per Mile/KM:</span>
                                                <span className="price-line">$2.00</span>
                                            </li>
                                            <li>
                                                <span className="name-line">Passengers:</span>
                                                <span className="price-line">4</span>
                                            </li>
                                        </ul>
                                        <a href="single-taxi.html" className="book-taxi-btn">Book Taxi</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="single-taxi-one">
                                    <div className="inner-content">
                                        <img src="/img/pricing/pricing-1-3.png" alt="Awesome Image" />
                                        <h3>Yaris 2014 Model</h3>
                                        <ul className="feature-list">
                                            <li>
                                                <span className="name-line">Base Rate:</span>
                                                <span className="price-line">$4.30</span>
                                            </li>
                                            <li>
                                                <span className="name-line">Per Mile/KM:</span>
                                                <span className="price-line">$2.00</span>
                                            </li>
                                            <li>
                                                <span className="name-line">Passengers:</span>
                                                <span className="price-line">4</span>
                                            </li>
                                        </ul>
                                        <a href="single-taxi.html" className="book-taxi-btn">Book Taxi</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`tab-pane animated fadeInUp ${serviceTab == 4 ? 'show active':''}`}>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="single-taxi-one">
                                    <div className="inner-content">
                                        <img src="/img/pricing/pricing-1-1.png" alt="Awesome Image" />
                                        <h3>M5 2008 Model</h3>
                                        <ul className="feature-list">
                                            <li>
                                                <span className="name-line">Base Rate:</span>
                                                <span className="price-line">$4.30</span>
                                            </li>
                                            <li>
                                                <span className="name-line">Per Mile/KM:</span>
                                                <span className="price-line">$2.00</span>
                                            </li>
                                            <li>
                                                <span className="name-line">Passengers:</span>
                                                <span className="price-line">4</span>
                                            </li>
                                        </ul>
                                        <a href="single-taxi.html" className="book-taxi-btn">Book Taxi</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="single-taxi-one">
                                    <div className="inner-content">
                                        <img src="/img/pricing/pricing-1-2.png" alt="Awesome Image" />
                                        <h3>E className 2010 Model</h3>
                                        <ul className="feature-list">
                                            <li>
                                                <span className="name-line">Base Rate:</span>
                                                <span className="price-line">$4.30</span>
                                            </li>
                                            <li>
                                                <span className="name-line">Per Mile/KM:</span>
                                                <span className="price-line">$2.00</span>
                                            </li>
                                            <li>
                                                <span className="name-line">Passengers:</span>
                                                <span className="price-line">4</span>
                                            </li>
                                        </ul>
                                        <a href="single-taxi.html" className="book-taxi-btn">Book Taxi</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="single-taxi-one">
                                    <div className="inner-content">
                                        <img src="/img/pricing/pricing-1-3.png" alt="Awesome Image" />
                                        <h3>Yaris 2014 Model</h3>
                                        <ul className="feature-list">
                                            <li>
                                                <span className="name-line">Base Rate:</span>
                                                <span className="price-line">$4.30</span>
                                            </li>
                                            <li>
                                                <span className="name-line">Per Mile/KM:</span>
                                                <span className="price-line">$2.00</span>
                                            </li>
                                            <li>
                                                <span className="name-line">Passengers:</span>
                                                <span className="price-line">4</span>
                                            </li>
                                        </ul>
                                        <a href="single-taxi.html" className="book-taxi-btn">Book Taxi</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
}