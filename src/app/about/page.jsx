import '@/style/about.scss';
import Slider from '@/components/Slider/slider';
import Breadcrumbs from '@/components/Breadcrumbs/breadcrumbs';
import Image from 'next/image';

export const metadata = {
    title: "About Apex Maxi Cab | Reliable Group Transportation",
    description: "Learn about Apex Maxi Cab, your trusted provider of reliable and affordable group transportation services. Explore our commitment to comfort, safety, and customer satisfaction.",
    keywords: "About Sydney taxi services, Trusted taxi service Sydney, Sydney cab company, Local taxi business Sydney, Reliable transportation Sydney, Why choose Sydney taxis"
};
export default function About() {
    return (
    <>
    <Breadcrumbs name="About" />
    <section class="about-style-two">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="content-block">
                        <div class="block-title">
                            <div class="dot-line"></div>
                            <p>Few words about conexi</p>
                            <h2>Learn about our <br /> taxi company</h2>
                        </div>
                        <p>There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form by injected humour or random words which don't look even slightly believable. If you are going to use a passage of lorem ipsum you need to be sure there isn't anything embarrassing.</p>
                        <a href="#" class="about-btn">Discover More</a>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="hvr-float-shadow">
                        <div class="image-block">
                            <img src="/img/resources/about-1-1.jpg" alt="Awesome Image" />
                            <div class="bubble-block">
                                <div class="inner-block">
                                    <p>Trusted by</p>
                                    <span class="counter">4880</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="funfact-style-one">
        <div className="container">
            <div className="block-title text-center">
                <div className="dot-line"></div>
                <p>Our fun facts</p>
                <h2>Numbers speak</h2>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="single-funfact-one hvr-float-shadow">
                        <i className="conexi-icon-meter"></i>
                        <h3 className="counter">8700</h3>
                        <p>KM Driven</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="single-funfact-one hvr-float-shadow">
                        <i className="conexi-icon-team"></i>
                        <h3 className="counter">4978</h3>
                        <p>People Dropped</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="single-funfact-one hvr-float-shadow">
                        <i className="conexi-icon-taxi"></i>
                        <h3 className="counter">800</h3>
                        <p>Taxis & Drivers</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="single-funfact-one hvr-float-shadow">
                        <i className="conexi-icon-happy"></i>
                        <h3 className="counter">2480</h3>
                        <p>Happy People</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="history-style-one">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                </div>
                <div class="col-lg-6">
                    <div class="content-block">
                        <div class="block-title" style={{position: "absolute"}}>
                            <div class="dot-line"></div>
                            <p>Conexi history</p>
                            <h2>How we reached <br/> to this level</h2>
                        </div>
                    </div>
                </div>
            </div>
            <Slider slidesNumber={1} arrows={true}>
            <div class="row">
                <div class="col-lg-6">
                    <div class="history-carousel-block ">
                        <div class="image-block">
                            <img src="/img/resources/history-1-1.jpg" alt="history image" />
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="content-block">
                        <div class="block-title" style={{opacity: 0}}>
                            <div class="dot-line"></div>
                            <p>Conexi history</p>
                            <h2>How we reached <br/> to this level</h2>
                        </div>
                        <div class="history-content history-content-one-pager">
                            <div class="pager-item active" >
                                <h3>1987</h3>
                                <p>There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form by injected humour or random words which don't look even slightly believable. If you are going to use a passage of lorem ipsum you need to be sure there isn't anything embarrassing.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <div class="history-carousel-block ">
                        <div class="image-block">
                            <img src="/img/resources/history-1-1.jpg" alt="history image" />
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="content-block">
                        <div class="block-title" style={{opacity: 0}}>
                            <div class="dot-line"></div>
                            <p>Conexi history</p>
                            <h2>How we reached <br/> to this level</h2>
                        </div>
                        <div class="history-content history-content-one-pager">
                            <div class="pager-item active" >
                                <h3>1987</h3>
                                <p>There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form by injected humour or random words which don't look even slightly believable. If you are going to use a passage of lorem ipsum you need to be sure there isn't anything embarrassing.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <div class="history-carousel-block ">
                        <div class="image-block">
                            <img src="/img/resources/history-1-1.jpg" alt="history image" />
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="content-block">
                        <div class="block-title" style={{opacity: 0}}>
                            <div class="dot-line"></div>
                            <p>Conexi history</p>
                            <h2>How we reached <br/> to this level</h2>
                        </div>
                        <div class="history-content history-content-one-pager">
                            <div class="pager-item active" >
                                <h3>1987</h3>
                                <p>There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form by injected humour or random words which don't look even slightly believable. If you are going to use a passage of lorem ipsum you need to be sure there isn't anything embarrassing.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Slider>
        </div>
    </section>
    <section class="cta-style-one text-center">
        <div class="container">
            <p>Call 24 hour service available</p>
            <h3>Call now and book <br/> our taxi for your next ride</h3>
            <a href="taxi.html" class="cta-btn">Choose Your Taxi</a>
        </div>
    </section>
    <section className="testimonials-style-one">
        <div className="container">
            <div className="block-title text-center">
                <div className="dot-line"></div>
                <p className="light">What our customers are saying</p>
                <h2 className="light">Voices of Satisfaction</h2>
            </div>
            <Slider slidesNumber={1} className="slider testimonials-slider-one" arrows={true}>
                <li className="slide-item">
                    <div className="single-testimonial-one">
                        <p>This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch.</p>
                        <h3>Shana Druckman</h3>
                    </div>
                </li>
                <li className="slide-item">
                    <div className="single-testimonial-one">
                        <p>This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch.</p>
                        <h3>Emanuel Mcnamara</h3>
                    </div>
                </li>
                <li className="slide-item">
                    <div className="single-testimonial-one">
                        <p>This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch.</p>
                        <h3>Jodie Hadlock</h3>
                    </div>
                </li>
            </Slider>
        </div>
    </section>
    </>
    );
}