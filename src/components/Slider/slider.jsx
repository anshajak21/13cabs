"use client"
import React, { useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import UAParser from 'ua-parser-js';


const Slider = (props) => {
  const {
    className,
    children,
    CustomDotList,
    slidesNumber = 3, 
    showDots = false, 
    arrows = false, 
    infinite = true, 
    autoPlay = false, 
    autoPlaySpeed = 2500, 
    transitionDuration = 600,
    itemAriaLabel="slide"
  } = props;
  const responsive = {
    1 : {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      }
    },
    2 : {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 600 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      }
    },
    3 : {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
    },
    5 : {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        }
    },
    'history' : {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 1 // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 760 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 760, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      }
    },
    'reviews' : {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 1 // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 760 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 760, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      }
    },
    'whyus' : {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        }
    }
  };

  const [deviceType, setDeviceType] = useState("");
  
  const CustomDot = ({ onMove, index, onClick, active }) => {
    return (
      <li className={`nav-item ${active ? "active" : "inactive"}`} onClick={() => onClick()}>
        <button onClick={()=>setServiceTab(1)} className={`nav-link ${active ? 'active':''}`}>{CustomDotList[index].name}</button>
      </li>
    );
  };

  useEffect(() => {
    const uA = typeof window !== "undefined" ? navigator.userAgent : userAgent;
    const parser = new UAParser(uA);
    const device = parser.getDevice();
    if (device) {
        if (device === "tablet") {
          setDeviceType("tablet");
        } else if (device === "mobile") {
          setDeviceType("mobile");
        } else {
          setDeviceType("desktop");
        }
    }
  }, []);
  return (
    <Carousel
      className={className}
      ssr={deviceType ==="" ? true : false} // means to render carousel on server-side.
      keyBoardControl={true}
      swipeable={true}
      draggable={true}
      renderButtonGroupOutside={true}
      showDots={showDots}
      arrows={arrows}
      responsive={slidesNumber && responsive[slidesNumber]}
      infinite={infinite}
      autoPlay={autoPlay}
      autoPlaySpeed={autoPlaySpeed}
      transitionDuration={transitionDuration}
      deviceType={deviceType}
      itemAriaLabel={itemAriaLabel}
      customDot={CustomDotList && showDots && <CustomDot/>}
    >
      {children}
    </Carousel>
  )
}

export default Slider
