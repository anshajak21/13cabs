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
    const history = [
        {
            'img': "/img/resources/history-1-1.jpg",
            'date': "August, 2019",
            'title': "Our Sydney Launch",
            'text': "In August 2019, 13Cabs Sydney opened its doors with a historic vision to change the nature of taxi services in Sydney. Beginning with a meager fleet, we soon realized the growing demand for reliable, safe, and efficient transportation. With demand came our growth too-expansion of fleet size to meet the needs of our growing customer base.\nOur commitment is customer satisfaction; it is part of everything we do. The commitment provides a strong impetus for ensuring that whatever service we provide is best for all Sydney residents and visitors every day. Whether it is a short trip across town or a long journey, we are here to provide you with reliable, comfortable rides you can count on."
        },
        {
            'img': "/img/resources/history-1-1.jpg",
            'date': "February, 2022",
            'title': "Our Development and Devotion",
            'text': "We have now taken your input and begun to improve it after six months of service. We have strengthened 13Cabs Sydney with some of the best drivers and dispatchers within the industry. Their deep local knowledge brought forth with their commitment and professionalism quickly has become the backbone of service.\nBecause of this commitment to excellence, we can now deliver consistent first-class experiences to our customers. We continue to be dedicated to offering safe, comfortable, enjoyable, and dependable travel for the people and visitors of Sydney as we evolve and grow to meet their demands."
        },
        {
            'img': "/img/resources/history-1-1.jpg",
            'date': "July, 2023",
            'title': "Widening Our Horizons",
            'text': "Haven't been expanded and paid for by 13CabsSydney in the strategic partnership program with trusted taxi operators across Australia in July 2024. This already took place in Melbourne and Brisbane and is an exciting beginning for us.\nWe want to create a seamless network of cities, bringing such great taxi service to more customers across the country. We are putting all our trust in you to be relied upon by 13CabsSydney, no matter what other country you are in, for the same highly efficient, reliable, and comfortable Sydney rides the people trust."
        },
    ];
    const testimonials = [
        {
            'name':"Shana Druckman",
            'text':"Very happy with the service. The staff/driver is very friendly and patient. He helped with our luggages. He was slightly late due to traffic which is not unexpected. But he kept us informed, which I really appreciate. I will definitely use them again"
        },
        {
            'name':"Jodie Hadlock",
            'text':"I booked a taxi for my family to the Sydney Airport.b. Driver arrived early, which put my mind at ease. He provided a clean car seat for our young child, and he helped us to manage all of our suitcases. We enjoyed our ride very much."
        },
        {
            'name':"Emanuel Mcnmara",
            'text':"Exceptional customer service. Arrived in time. Our driver was so friendly. The trip to the Sydney airport was smooth. We travelled as a family of 6 anD will book again on our return home. Thank You so much for your service."
        }
    ];
    return (
    <>
    <h1 style={{fontSize:0}}>13CabsSydney. TRUSTED TAXI SERVICE </h1>
    <Breadcrumbs name="About" />
    <section class="about-style-two">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="content-block">
                        <div class="block-title">
                            <div class="dot-line"></div>
                            <p>Few words about 13CabsSydney</p>
                            <h2>We are Sydney Taxi Company</h2>
                        </div>
                        <p> Travel with Australia&apos;s largest team of professional Drivers, we&apos;re always here whenever you are ready—providing services with a fixed price and no surge pricing, ever.</p>
                        <p>The best taxi service in Sydney, trusted, safest, and reliable is 13CabsSydney, which is there for you. We ensure hundred percent safe, comfortable, safe, and secure rides. Need to catch a flight or have an urgent meeting? Looking for a smooth ride for your family trip? Surely the safest option for all your needs 13CabsSyndey is there for you. It has covered for you all. We deliver exactly the services you require and never compromise on our services. Available 24/7 Whether you&apos;re traveling solo or with family, we&apos;ve got the right ride for every journey. Easy booking for passengers, just a few taps here and there and we are on board.  Discover Sydney’s premium taxi service with 13CabsSydney. Trusted, reliable, and always on time, we are the first choice for comfort and convenience. Experience a safe, secure, and smoothest ride in Sydney every time. </p>
                        {/* <a href="#" class="about-btn">Discover More</a> */}
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
                            <p>13CabsSydney history</p>
                            <h2>How did we reach this place?</h2>
                        </div>
                    </div>
                </div>
            </div>
            <Slider slidesNumber={1} arrows={true} infinite={true}>
                {history.map((item,index)=>(
                <div key={`history-${index}`} class="row">
                    <div class="col-lg-6">
                        <div class="history-carousel-block ">
                            <div class="image-block">
                                <img src={item.img} alt="history image" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="content-block">
                            <div class="block-title" style={{opacity: 0}}>
                                <div class="dot-line"></div>
                                <p>13CabsSydney history</p>
                                <h2 style={{fontSize:"2rem"}}>How did we reach this place?</h2>
                            </div>
                            <div class="history-content history-content-one-pager">
                                <div class="pager-item active" >
                                    <h3>{item.date}</h3>
                                    <h4>{item.title}</h4>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
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
                <Slider slidesNumber={2} infinite={true} className="slider testimonials-slider-one" arrows={true}>
                    {testimonials.map((item,index)=>(
                    <li key={`testimonial-${index}`} className="slide-item">
                        <div className="single-testimonial-one">
                            <p>{item.text}</p>
                            <h3>{item.name}</h3>
                        </div>
                    </li>
                    ))}
                </Slider>
            </div>
        </section>
    </>
    );
}