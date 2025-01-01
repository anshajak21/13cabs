import '@/style/contact.scss';
import ContactForm from '@/components/ContactForm/contactForm';
import Image from 'next/image';
import '@/style/datepicker.scss';
import Breadcrumbs from '@/components/Breadcrumbs/breadcrumbs';
import Script from 'next/script';
import Slider from '@/components/Slider/slider';

export const metadata = {
    title: "Contact Apex Maxi Cab | 24/7 Cab Service in Sydney - Call 2 8188 3546",
    description: "Need a cabin Sydney? Contact Apex Maxi Cab at 2 8188 3546 for 24/7 service. We're here to provide safe, efficient, and reliable maxi cab transport when you need it.",
    keywords: "Contact Sydney taxi service, Sydney taxi phone number, Taxi service inquiries Sydney, Book a taxi online Sydney, Sydney taxi support, Sydney cab reservation"
};
export default function Contact() {
    return (
        <>
        <section className="main-banner-wrapper">
            <Slider className="banner-style-one" slidesNumber={1}>
                <div className="slide-img" style={{backgroundImage: "url('/images/page/contact.webp')"}}>
                <div className="slide">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h3 className="banner-title">SYDNEY TAXI SERVICES</h3>
                                <p>You couldn’t find the best ride in Sydney. Don’t be stressed—book a 13CabsSydney taxi now. Say goodbye to the last time stressed book your ride in advance with us. whether it’s an interview or a group trip, just fill out the form. Drop in your details, and confirm the taxi booking at 13CabsSydney. Our driver will wait for you at your selected location.</p>
                                <p>Plan and ride with ease. Travel with smartness and leave the stress. Book now and relax!</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </Slider>
        </section>
        <Breadcrumbs name="Contact" />
        <section class="contact-form-style-one">
            <div class="container">
                <div class="block-title text-center">
                    <div class="dot-line"></div>
                    <p>Contact with us now</p>
                    <h2>Leave a message</h2>
                </div>
                <form action="https://ashik.templatepath.net/conexi-preview-files/inc/sendmail.php" class="contact-form-one row" id="contact-form" method="post">
                    <div class="col-lg-6">
                        <div class="input-holder">
                            <input class="form-control" type="text" name="form_name" placeholder="Your name" />
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="input-holder">
                            <input class="form-control" type="email" name="form_email" placeholder="Email address" />
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="input-holder">
                            <input class="form-control" type="text" name="form_phone" placeholder="Phone" />
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="input-holder">
                            <input class="form-control" type="text" name="form_subject" placeholder="Subject" />
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="input-holder">
                            <textarea class="form-control" name="form_message" placeholder="Write message"></textarea>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="input-holder text-center">
                            <input id="form_botcheck" name="form_botcheck" class="form-control" type="hidden" value="" />
                            <button class="theme-btn btn-style-two" type="submit" data-loading-text="Please wait..."><span>Send Message</span></button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
        <section className="lostFound">
            <div className="container">
                <div class="block-title text-center">
                    <h2>Lost Something in 13CabsSydney?</h2>
                    <h5 className="mt-4">Don’t be stressed because you have booked your taxi ride with 13CabsSydney. Our management and drivers are very cooperative and ready to assist you at all times.</h5>
                </div>
                <div className="lostFound-cards">
                    <div className="lostFound-card">
                        <div className="lostFound-card-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" height="50" width="50" viewBox="0 0 50 50">
                            <path d="M13.745 22.06c1.745-2.245 3.385-4.555 4.55-7.165.425-.95.755-1.935.745-2.995-.075-5.29-5.29-9.04-10.34-7.48-4.125 1.275-7.04 6.205-4.795 10.555.845 1.635 1.765 3.25 2.815 4.76 1.325 1.915 2.815 3.715 4.31 5.67.98-1.205 1.87-2.26 2.715-3.345M8.29 11.965c.01-1.51 1.305-2.785 2.815-2.77a2.794 2.794 0 0 1 2.755 2.82c-.015 1.495-1.305 2.765-2.785 2.75-1.53-.015-2.795-1.285-2.785-2.8m38.525 16.36c-.63-4.705-5.295-7.825-9.9-6.65-4.12 1.05-7.675 6.03-4.975 11.135 1.32 2.495 2.89 4.8 4.625 7.01.75.955 1.535 1.88 2.345 2.865 1.935-2.22 3.72-4.43 5.23-6.835.79-1.26 1.485-2.585 2.13-3.925.535-1.125.715-2.33.545-3.6m-7.89 3.805c-1.505 0-2.78-1.275-2.78-2.79 0-1.5 1.285-2.785 2.785-2.79 1.51 0 2.795 1.28 2.785 2.785 0 1.505-1.29 2.795-2.79 2.795M27.495 43.6a131 131 0 0 0-2.42-.17c-.715-.04-1.18.32-1.235.935-.055.63.375 1.09 1.105 1.145.695.055 1.39.085 2.085.125v.01h.34c.705.01 1.175-.37 1.205-.98.025-.585-.395-1.01-1.08-1.065m-13.09-1.605c-.76-.215-1.52-.44-2.28-.66-.14-.04-.285-.06-.355-.075-.55 0-.97.325-1.07.77-.12.54.135 1.055.685 1.235.83.275 1.67.51 2.51.735.68.18 1.21-.11 1.365-.715.165-.59-.185-1.1-.855-1.29m6.625 1.1c-.91-.14-1.83-.235-2.745-.35-.585-.02-1.025.34-1.085.88-.065.595.25 1.055.855 1.15.895.145 1.795.26 2.695.36.58.06 1.05-.315 1.13-.835.09-.605-.24-1.11-.85-1.205m.45-10.575c-.91.22-1.815.47-2.715.74-.515.155-.77.66-.67 1.2.085.46.515.79 1.05.875 1.02-.305 2.05-.58 3.05-.935.46-.16.62-.73.465-1.195-.175-.525-.625-.815-1.18-.685m-6.39 1.57c-.995.21-1.98.475-2.95.78-.47.15-.67.69-.55 1.17.11.455.52.765 1.15.765.885-.245 1.925-.49 2.935-.82.44-.145.625-.7.51-1.145-.125-.485-.58-.86-1.095-.75m10.23-3.305c-.23-1.355-1.095-2.19-2.28-2.75-.17-.08-.415-.075-.605-.03-.41.1-.67.375-.745.8-.08.465.08.835.48 1.075.57.34 1.045.715 1.18 1.44.09.475.505.68.89.695.735-.015 1.19-.575 1.08-1.23m-5.455-2.71c.095-.605-.315-1.105-1-1.185-.755-.085-1.51-.155-2.14-.215h-.27c-.795-.03-1.26.32-1.29.975-.03.64.37 1.015 1.15 1.085.755.07 1.515.13 2.27.215.665.08 1.185-.26 1.28-.875m14.54 15.77c-.98-.06-1.97-.09-2.955-.05-.62.025-.965.51-.925 1.085.04.545.445.92 1.04.945.435.015.875.005 1.31.005v.04c.225 0 .455-.005.68 0s.455.04.68.025c.575-.04.99-.445 1.03-.975.035-.495-.345-1.04-.86-1.075M8.32 36.9c-.655.665-.985 1.47-1.005 2.59.055.195.125.58.265.935a.996.996 0 0 0 1.23.595c.525-.16.855-.67.69-1.215-.185-.62-.035-1.085.365-1.56.365-.43.295-1.05-.1-1.4a1.05 1.05 0 0 0-1.445.055m31.52 6.955a10 10 0 0 0-1.645 0c-.555.045-.94.53-.92 1.065.025.535.44.96.995 1 .24.015.485.005.725.005v-.005c.26 0 .52.02.775-.005.555-.05.97-.5.975-1.025.005-.515-.38-.995-.905-1.035M11.455 28.62c.29 0 .585.02.87-.005.5-.05.875-.49.875-.995 0-.53-.385-1-.9-1.025q-.825-.044-1.65-.005c-.52.025-.925.49-.93 1.005-.005.52.39.98.905 1.025.28.02.555 0 .83 0"/>
                            </svg>
                        </div>
                        <h2>Step 1</h2>
                        <p>Describe your trip details, when and where your stuff had been lost.</p>
                    </div>
                    <div className="lostFound-card">
                        <div className="lostFound-card-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" height="44" width="44" viewBox="0 0 44 44">
                            <path d="M3.432 35.081h1.861c-.352 7.058 7.04 8.457 12.791 8.232.238.409.673.686 1.179.686h5.852c.757 0 1.373-.612 1.373-1.373v-1.21c0-.757-.616-1.373-1.373-1.373h-5.852c-.669 0-1.223.48-1.346 1.109-4.655.242-10.674-.453-10.437-6.072h2.526c.647 0 1.166-.524 1.166-1.166V20.262c0-.647-.524-1.166-1.166-1.166H6.473c.462-8.404 7.427-15.347 15.62-15.347 8.197 0 15.162 6.939 15.624 15.347h-3.7c-.647 0-1.166.524-1.166 1.166V33.92c0 .642.519 1.166 1.166 1.166h6.582c.642 0 1.166-.524 1.166-1.166V20.262c0-.29-.11-.55-.286-.757C41.232 8.884 32.463 0 22.101 0 11.796 0 3.062 8.796 2.719 19.342a1.17 1.17 0 0 0-.453.92V33.92c0 .642.524 1.162 1.166 1.162"/>
                            </svg>
                        </div>
                        <h2>Step 2</h2>
                        <p>You can get in contact with us through email or you can dial 1300 530 570.</p>
                    </div>
                    <div className="lostFound-card">
                        <div className="lostFound-card-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" height="50" width="50" viewBox="0 0 50 50">
                            <path d="m38.615 20.355-13.085-7.97 8.25-6.83 13.095 8.06zm-4.92 15.065 12.565-7.355-7.56-6.395-12.3 7.445zm-10.09-6.305L11.3 21.67l-7.56 6.395 12.57 7.355zm-11.69 5.255v2.365l12.56 7.71v-14.63l-8.34 6.83zm26.17 0-4.215 2.275-8.34-6.83v14.63l12.56-7.71V34.37zm-13.61-21.985-8.255-6.83L3.125 13.61l8.26 6.745z"/>
                            </svg>
                        </div>
                        <h2>Step 3</h2>
                        <p>Welcome to our place and get your property safely.</p>
                    </div>
                </div>
            </div>
        </section>
        <div class="contact-page-map-wrapper">
            <iframe class="google-map" id="contact-google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.80759055258!2d151.0325070765562!3d-33.92035132173223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bd803fead229%3A0x199cbb2c60384ee7!2sApex%20Cabs!5e0!3m2!1sen!2sin!4v1726077572411!5m2!1sen!2sin" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <div class="contact-info-block">
                <p>7/46-48 Restwell St, Bankstown NSW 2200, Australia</p>
                <ul class="contact-infos">
                    <li><i class="fa fa-envelope"></i> info@apexcabs.com.au</li>
                    <li><i class="fa fa-phone-square"></i> 1300 530 570</li>
                </ul>
            </div>
        </div>
        <Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBk25E4mNfVIEt3tNl3K1HwNZVruVoFBlA"></Script>
        <Script src="js/gmaps.js"></Script>
        </>
    );
}