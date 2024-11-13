import '@/style/about.scss';
import Slider from '@/components/Slider/slider';
import Breadcrumbs from '@/components/Breadcrumbs/breadcrumbs';
import ContactForm from '@/components/ContactForm/contactForm';
import Image from 'next/image';

export const metadata = {
    title: "About Apex Maxi Cab | Reliable Group Transportation",
    description: "Learn about Apex Maxi Cab, your trusted provider of reliable and affordable group transportation services. Explore our commitment to comfort, safety, and customer satisfaction.",
    keywords: "About Sydney taxi services, Trusted taxi service Sydney, Sydney cab company, Local taxi business Sydney, Reliable transportation Sydney, Why choose Sydney taxis"
};
export default function BookRide() {
    return (
    <>
    <Breadcrumbs name="Book a Ride" />
    <section class="book-ride-two">
        <div class="container">
            <div class="block-title">
                <div class="dot-line"></div>
                <p>Looking for a taxi</p>
                <h2>Make your booking</h2>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <ContactForm />
                </div>
                <div class="col-lg-6">
                <iframe class="google-map" id="contact-google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.80759055258!2d151.0325070765562!3d-33.92035132173223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bd803fead229%3A0x199cbb2c60384ee7!2sApex%20Cabs!5e0!3m2!1sen!2sin!4v1726077572411!5m2!1sen!2sin" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </section>
    </>
    );
}