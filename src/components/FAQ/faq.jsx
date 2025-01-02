"use client"
import Image from 'next/image';
import { useState } from 'react';
export default function FAQ({faqs}) {
    const [cardOpen, setCardOpen] = useState(-1);
    // const faqs = [
    //     {
    //         "que": "What is a Maxi Cab service?",
    //         "ans": "<p>It is a large cab or van designed to accommodate a group of people who have different requirements for intra-city traveling or daily commuting. It is perfect for big families, groups, employees, and corporate clients who wish to travel in style and comfortably.</p>"
    //     },
    //     {
    //         "que": "What is the booking process?",
    //         "ans": "<p>It is easy and simple! Call 2 8188 3546, WhatsApp, or email us, and we book a cab for you, understanding your specific requirements. Our cabs reach the pick-up spot on time, and we ensure the drivers are friendly and knowledgeable.</p>"
    //     },
    //     {
    //         "que": "How many people does your maxi cab hold?",
    //         "ans": "<p>We offer an array of vehicles designed for ferrying large and small groups. You can book a 5-seater, 7-seater, 10-seater, and 13-seater van, apart from our special-purpose vehicles and wheelchair assisted taxis for the disabled.</p>"
    //     },
    //     {
    //         "que": "Are your drivers trustworthy?",
    //         "ans": "<p>All our drivers undergo stringent background checks before being enrolled in our payroll. We ensure they are polite, courteous, well-mannered, and knowledgeable, knowing every nook and corner of this city.</p>"
    //     },
    //     {
    //         "que": "How can I pay for my trip?",
    //         "ans": "<p>You can either pay in cash, or make payments online, whichever option suits you.</p>"
    //     },
    //     {
    //         "que": "Does the fare change according to the number of passengers?",
    //         "ans": "<p>No. Irrespective of the number of people, the pricing remains the same. But, the number must not exceed 13, as that is the largest van size we have. Price may be dynamic, and vary depending on the day or time of travel.</p>"
    //     }
    // ];
    function handelClick(id) {
        if (id === cardOpen) {
            setCardOpen(-1);
        } else {
            setCardOpen(id);
        }
    }
    return (
        <section className="faq-section">
            <div className="container">
                <div className="witr_section_title">
                    <div className="greenHead witr_section_title_inner text-center">
                        <h2>FAQ&apos;s</h2>
                        <h3>FAQs About 13Cabs Sydney<span>Services</span></h3>
                    </div>
                </div>
                <div className="faq-section-content">
                    {faqs.map((faq, id)=> (
                    <div key={`faqs-${id}`} className="faq-section-card">
                        <button className={`faq-section-card-link ${cardOpen == id?"active":""}`} onClick={()=>handelClick(id)}>
                        {faq.que}
                            {cardOpen == id ?(
                                <svg width="24" height="24" viewBox="-0.15 -0.33 0.72 0.72" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" className="jam jam-minus">
                                <path d="M.03 0h.36a.03.03 0 0 1 0 .06H.03a.03.03 0 1 1 0-.06"/>
                                </svg>
                            ):(
                                <svg width="24" height="24" viewBox="0 0 0.72 0.72" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" className="icon flat-color">
                                <path d="M.36.6A.03.03 0 0 1 .33.57V.39H.15a.03.03 0 0 1 0-.06h.18V.15a.03.03 0 0 1 .06 0v.18h.18a.03.03 0 0 1 0 .06H.39v.18A.03.03 0 0 1 .36.6"/>
                                </svg>
                            )}
                        </button>
                        <div className={`faq-section-card-text ${cardOpen == id?"active":""}`} dangerouslySetInnerHTML={{ __html: faq.ans }}>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
}