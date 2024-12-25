"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useWindowSize } from '../../utils/width';

const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(true);
  const currentPage = usePathname();

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 49) {
//         setIsScrolled(false);
//       } else {
//         setIsScrolled(true);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

  const isCurrentPage = (path) => currentPage === path;
//   return (
//     <header className="site-header header-two">
//         <div className="top-bar">
//             <div className="container">
//                 <div className="inner-container">
//                     <div className="logo-block">
//                         <Link href="/">
//                         <Image width={140} height={40} style={{width: "100%", height: "100%"}} src="/img/logo2.png" alt="Apex"/>
//                         </Link>
//                     </div>
//                     <div className="right-block">
//                         <ul className="contact-infos">
//                             <li><Link href="#"><i className="fa fa-user-circle"></i> Customer Sign In</Link></li>
//                             <li><Link href="#"><i className="fa fa-envelope"></i> needhelp@conexi.com</Link></li>
//                             <li className="social-block">
//                                 <Link href="#"><i className="fa fa-twitter"></i></Link>
//                                 <Link href="#"><i className="fa fa-facebook-f"></i></Link>
//                                 <Link href="#"><i className="fa fa-youtube-play"></i></Link>
//                                 <Link href="#"><i className="fa fa-google-plus"></i></Link>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <nav className={`navbar navbar-expand-lg navbar-light header-navigation stricky ${!isScrolled ? 'stricky-fixed slideInDown animated' : ''}`}>
//             <div className="container clearfix">
//                 <div className="logo-box clearfix">
//                     <button className="menu-toggler" data-target="#main-nav-bar">
//                         <span className="fa fa-bars"></span>
//                     </button>
//                 </div>
//                 <div className="main-navigation" id="main-nav-bar">
//                     <ul className="navigation-box">
//                         <li className={isCurrentPage("/") ? 'current' : ''}>
//                             <Link href="/">Home</Link>
//                         </li>
//                         <li className={isCurrentPage('/about') ? 'current' : ''}>
//                             <Link href="/about">About</Link>
//                         </li>
//                         <li className={isCurrentPage('/services') ? 'current' : ''}>
//                             <Link href="/services">Services</Link>
//                         </li>
//                         <li className={isCurrentPage('/book-ride') ? 'current' : ''}>
//                             <Link href="/book-ride">Book A Ride</Link>
//                         </li>
//                         {/* <li className={isCurrentPage('/blog') ? 'current' : ''}>
//                             <Link href="/blog">Blog</Link>
//                             <ul className="sub-menu">
//                             <li className={isCurrentPage('/blog') ? 'current' : ''}>
//                                 <Link href="/blog">Blog Grid</Link>
//                             </li>
//                             <li className={isCurrentPage('/blog-details') ? 'current' : ''}>
//                                 <Link href="/blog-details">Blog Details</Link>
//                             </li>
//                             </ul>
//                         </li> */}
//                         <li className={isCurrentPage('/contact') ? 'current' : ''}>
//                             <Link href="/contact">Contact</Link>
//                         </li>
//                     </ul>
//                 </div>
//                 <div className="right-side-box">
//                     <a href="callto:888-888-0000" className="contact-btn-block">
//                         <span className="icon-block">
//                             <i className="conexi-icon-phone-call"></i>
//                         </span>
//                         <span className="text-block">
//                             1300 530 570
//                         </span>
//                     </a>
//                 </div>
//             </div>
//         </nav>
//     </header>
//   );
  const [isScrolled, setIsScrolled] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { width } = useWindowSize();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 49) {
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header style={{paddingBottom: `${width > 787 ? '70px':'78px'}`}}>
        <div className={`mobile fixedNav ${!isScrolled ? 'fixedBg' : ''}`}>
            <div className="mobile-nav container">
                <a href="/" title="Apex">
                    {!isScrolled ? (
                        <Image width={437} height={245} src="/images/logo2.png" alt="Apex"/>
                    ) : (
                        <Image width={378} height={211} src="/images/logo.png" alt="Apex" />
                    )}
                </a>
                <button aria-label="headerMenu" onClick={()=>handleMobileMenuClick()}>
                    <svg width="30" height="30" viewBox="0 0 0.6 0.6" xmlns="http://www.w3.org/2000/svg">
                    <path d="M.075.112h.45a.037.037 0 0 1 0 .075h-.45a.037.037 0 1 1 0-.075m0 .15h.45a.037.037 0 0 1 0 .075h-.45a.037.037 0 1 1 0-.075m0 .15h.45a.037.037 0 0 1 0 .075h-.45a.037.037 0 0 1 0-.075"/>
                    </svg>
                </button>
            </div>
                <div className={`mobile-menu ${isMobileMenuOpen?'menu-open':''}`}>
                    <button aria-label="headerMenu" onClick={()=>handleMobileMenuClick()}>
                        <svg width="30" height="30" viewBox="0 0 0.6 0.6" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M.423.123a.037.037 0 1 1 .053.053L.353.3l.123.123a.037.037 0 0 1-.053.053L.3.353.177.476A.037.037 0 0 1 .124.423L.247.3.123.177A.037.037 0 0 1 .176.124L.3.247z"/>
                        </svg>
                    </button>
                    <div className="mobile_menu_logo">
                        <a href="/" title="Apex">
                            <Image width={510} height={196} src="/images/logo.png" alt="Apex" />
                        </a>
                    </div>
                    <nav className="mobile-menu-nav">
                        <a className="menu-item" href="/">Home</a>
                        <a className="menu-item" href="/about">About</a>
                        <a className="menu-item" href="/services">All Service</a>
                        {/* <a className="menu-item" style={{marginLeft: 10}} href="/services/airport-transfer">Airport Transfer</a>
                        <a className="menu-item" style={{marginLeft: 10}} href="/services/baby-seat">Baby Seat Taxi</a>
                        <a className="menu-item" style={{marginLeft: 10}} href="/services/wheelchair">Wheelchair</a>
                        <a className="menu-item" style={{marginLeft: 10}} href="/services/wedding-day-transfers">Wedding Day Transfers</a>
                        <a className="menu-item" style={{marginLeft: 10}} href="/services/parcel-delivery">Parcel Delivery</a> */}
                        <a className="menu-item" href="/contact">Contact</a>
                        {/* <a className="menu-item" href="/blogs">Blogs</a> */}
                    </nav>
                </div>
                <div className={`mobile-overlay ${isMobileMenuOpen?'menu-open':''}`}></div>
        </div>
        <div className={`desktop fixedNav ${!isScrolled ? 'fixedBg' : ''}`}>
            <div className="p-0">
                <div id="main_header" style={{ zIndex: 1000 }} className="block">
                <div className="apex_nav_area scroll_fixed">
                    <div className="container mx-auto">
                    <div className="flex items-center justify-between">
                        <div className="flex-shrink-0">
                            <a className="logo" href="/" title="Apex">
                                {!isScrolled ? (
                                    <Image width={437} height={245} src="/images/logo2.png" alt="Apex"/>
                                ) : (
                                    <Image width={378} height={211} src="/images/logo.png" alt="Apex" />
                                )}
                            </a>
                        </div>
                        <div className="flex items-center justify-end">
                        <nav className="apex_menu">
                            <ul id="menu-main-menu-1" className="flex sub-menu">
                                <li className={`menu-item ${isCurrentPage('/') ? 'current ' : ''}`} >
                                    <a className='mr-10' href="/">Home</a>
                                </li>
                                <li className={`menu-item ${isCurrentPage('/about') ? 'current ' : ''}`} >
                                    <a className='mr-10' href="/about">About</a>
                                </li>
                                <li className={`menu-item ${isCurrentPage('/services') ? 'current ' : ''}`} >
                                    <a className='mr-10' href="/services">Services</a>
                                </li>
                                {/* <li className={`menu-item dropdown-btn ${isCurrentPage('/services') ? 'current ' : ''}`} >
                                    <a className='mr-10' href="/services">Service</a>
                                    <ul className="dropdown-wrap">
                                        <li className={isCurrentPage('/services/airport-transfer') ? 'current' : ''}><a href="/services/airport-transfer">Airport Transfer</a></li>
                                        <li className={isCurrentPage('/services/baby-seat') ? 'current' : ''}><a href="/services/baby-seat">Baby Seat Taxi</a></li>
                                        <li className={isCurrentPage('/services/wheelchair') ? 'current' : ''}><a href="/services/wheelchair">Wheelchair</a></li>
                                        <li className={isCurrentPage('/services/wedding-day-transfers') ? 'current' : ''}><a href="/services/wedding-day-transfers">Wedding Day Transfers</a></li>
                                        <li className={isCurrentPage('/services/parcel-delivery') ? 'current' : ''}><a href="/services/parcel-delivery">Parcel Delivery</a></li>
                                    </ul>
                                </li> */}
                                <li className={`menu-item ${isCurrentPage('/contact') ? 'current ' : ''}`}>
                                    <a href="/contact">Contact</a>
                                </li>
                                {/* <li  className={`menu-item ${isCurrentPage('/blogs') ? 'current ' : ''}`}>
                                    <a href="/blogs">Blogs</a>
                                </li> */}
                            </ul>
                        </nav>
                        </div>
                        <div className="">
                            <a className="dtbtn" href="/contact">
                            BOOK A TAXI
                            </a>
                            <a className="dtbtn" href="/contact">
                            GET A QUOTE
                            </a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div></div>
            </div>
        </div>
    </header>
  );
};

export default Header;
