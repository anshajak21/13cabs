"use client"
import React, { useState, useEffect } from "react";


const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    if (showTopBtn) {
        return (
            <button id="buttonToTop" onClick={()=>goToTop()}>
                <svg width="30" height="30" viewBox="0 0 0.6 0.6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M.225.3h-.15V.225L.3 0l.225.225V.3h-.15v.3h-.15z" />
                </svg>
            </button>
        );
    }
};
export default ScrollToTop;