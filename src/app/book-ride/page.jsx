import Breadcrumbs from '@/components/Breadcrumbs/breadcrumbs';
import ContactForm from '@/components/ContactForm/contactForm';

export const metadata = {
    title: "Best taxi service in Sydney 13Cabs Sydney",
    description: "Choose 13Cabs Sydney for the best taxi service in Sydney. We provide Sydney airport transfers, Baby-seat taxis, wheelchair-accessible taxis, group transfers, and maxi-taxi Sydney services.",
    keywords: "Sydney airport shuttle, Corporate taxi services Sydney, Luxury taxi Sydney, Family taxi service Sydney, Wheelchair accessible taxis Sydney, Group taxi service Sydney"
};
export default function BookRide() {
    return (
    <>
    <Breadcrumbs name="Book a Ride" />
            <section className="about-style-three clearfix">
                <div className="left-block">
                    <div className="content-block">
                        <div className="image-block">
                            <img style={{aspectRatio: "2/1", objectFit:"cover", objectPosition:"center"}} src="/img/resources/book-1-1.jpg" alt="Awesome Image"/>
                        </div>
                        <div className="block-title">
                            <div className="dot-line"></div>
                            <p>We’re the best in your town</p>
                            <h2>Welcome to the most trusted and Reliable taxi service company</h2>
                        </div>
                        <p>13 Cabs Sydney has been operating in Sydney. We are providing Cabs service Sydney in its luxury fleet. We also provide Sedans, WHeelchair taxis, Maxi Cabs and modified vehicles for special needs at the best price across Sydney.</p>
                        <p>Our vehicles and drivers are fully licensed and compiled with point to point commision, NSW.</p>
                        <p>We always preferred a reliable transport company for the airport and corporate transfers. We at 13 Cabs Sydney focus on customers requirements and aim to deliver maximum comfort because we believe in a customer first policy.</p>
                        <hr className="style-one" />
                        <div className="tag-line">
                            <span>Safe .</span>
                            <span>Fast .</span>
                            <span>Reliable .</span>
                        </div>
                    </div>
                </div>
                <div className="right-block">
                    <div className="right-upper-block">
                        <div className="content-block">
                            <div className="block-title">
                                <div className="dot-line"></div>
                                <p className="light-2">Looking for taxi?</p>
                                <h2 className="">Make your booking</h2>
                            </div>
                            <ContactForm />
                        </div>
                    </div>
                    <div className="right-bottom-block">
                        <div className="content-block cta-block">
                            <div className="icon-block">
                                <i className="conexi-icon-phone-call"></i>
                            </div>
                            <div className="text-block">
                                <p>Call and book emergency taxi</p>
                                <a href="callto:+611300530570">1300 530 570</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
    );
}