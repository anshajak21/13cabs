"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(true);
  const currentPage = usePathname();

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

  const isCurrentPage = (path) => currentPage === path;
  return (
    <header className="site-header header-two">
        <div className="top-bar">
            <div className="container">
                <div className="inner-container">
                    <div className="logo-block">
                        <Link href="/">
                        <Image width={140} height={40} style={{width: "100%", height: "100%"}} src="/img/logo2.png" alt="Apex"/>
                        </Link>
                    </div>
                    <div className="right-block">
                        <ul className="contact-infos">
                            <li><Link href="#"><i className="fa fa-user-circle"></i> Customer Sign In</Link></li>
                            <li><Link href="#"><i className="fa fa-envelope"></i> needhelp@conexi.com</Link></li>
                            <li className="social-block">
                                <Link href="#"><i className="fa fa-twitter"></i></Link>
                                <Link href="#"><i className="fa fa-facebook-f"></i></Link>
                                <Link href="#"><i className="fa fa-youtube-play"></i></Link>
                                <Link href="#"><i className="fa fa-google-plus"></i></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <nav className={`navbar navbar-expand-lg navbar-light header-navigation stricky ${!isScrolled ? 'stricky-fixed slideInDown animated' : ''}`}>
            <div className="container clearfix">
                <div className="logo-box clearfix">
                    <button className="menu-toggler" data-target="#main-nav-bar">
                        <span className="fa fa-bars"></span>
                    </button>
                </div>
                <div className="main-navigation" id="main-nav-bar">
                    <ul className="navigation-box">
                        <li className={isCurrentPage("/") ? 'current' : ''}>
                            <Link href="/">Home</Link>
                        </li>
                        <li className={isCurrentPage('/about') ? 'current' : ''}>
                            <Link href="/about">About</Link>
                        </li>
                        <li className={isCurrentPage('/services') ? 'current' : ''}>
                            <Link href="/services">Services</Link>
                        </li>
                        <li className={isCurrentPage('/book-ride') ? 'current' : ''}>
                            <Link href="/book-ride">Book A Ride</Link>
                        </li>
                        {/* <li className={isCurrentPage('/blog') ? 'current' : ''}>
                            <Link href="/blog">Blog</Link>
                            <ul className="sub-menu">
                            <li className={isCurrentPage('/blog') ? 'current' : ''}>
                                <Link href="/blog">Blog Grid</Link>
                            </li>
                            <li className={isCurrentPage('/blog-details') ? 'current' : ''}>
                                <Link href="/blog-details">Blog Details</Link>
                            </li>
                            </ul>
                        </li> */}
                        <li className={isCurrentPage('/contact') ? 'current' : ''}>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="right-side-box">
                    <a href="callto:888-888-0000" className="contact-btn-block">
                        <span className="icon-block">
                            <i className="conexi-icon-phone-call"></i>
                        </span>
                        <span className="text-block">
                            1300 530 570
                        </span>
                    </a>
                </div>
            </div>
        </nav>
    </header>
  );
};

export default Header;
