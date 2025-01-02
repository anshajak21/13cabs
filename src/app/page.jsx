import '@/style/homepage.scss';
import HomeForm from '@/components/HomeForm/homeform';
import Image from 'next/image';
import ServiceTab from '@/components/ServiceTab/servicetab';
import '@/style/serviceTabs.scss';
import FAQ from '@/components/FAQ/faq';
import Slider from '@/components/Slider/slider';
import '@/style/datepicker.scss';
import Breadcrumbs from '@/components/Breadcrumbs/breadcrumbs';

export const metadata = {
    title: "Reliable taxi in Sydney | 13Cabs Sydney Taxi Service",
    description: "Going to book a cab in Sydney? 13Cabs Sydney works 24/7, providing affordable taxi services with easy booking. Safest, reliable, and stress-free taxi ride in Sydney.",
    keywords: "Sydney taxi service, Affordable cabs Sydney, Book a taxi Sydney, 24/7 taxi service Sydney, Sydney airport transfers, Fast taxi booking"
};

export default function Home() {
    const comprehensiveTaxi = [
        {
            'img': "/images/service/airporttransfer.webp",
            'icon': '<svg xmlns="http://www.w3.org/2000/svg" height="80" width="80" viewBox="0 0 80 80"><path d="M64.784 6.64 52.888 18.928c-.816.84-2.376 1.224-3.488.864l-25.736-8.456c-1.112-.368-2.68.008-3.504.84l-6.696 6.704c-.824.824-.64 1.888.424 2.384l23.52 10.792c1.064.488 1.264 1.568.456 2.4L21.968 50.864c-.208.208-.416.416-.608.624-.32.36-1.432.264-2.496-.224l-7.368-3.392c-1.064-.488-2.6-.216-3.424.616L6.2 50.36c-.824.824-.696 1.992.312 2.608l9.328 5.76c.992.616 2.472 1.784 3.296 2.608l.288.288c.824.824 2.024 2.28 2.672 3.264l6.224 9.296c.648.976 1.848 1.096 2.672.256l1.52-1.52c.824-.824 1.096-2.36.6-3.416l-4.456-9.544c-.496-1.056-.704-2.048-.496-2.216.128-.104.256-.216.368-.328L45.264 41.2c.84-.816 1.592-1.408 1.664-1.328.08.08.576.992 1.096 2.04l12.36 24.528c.528 1.04 1.624 1.216 2.448.392l5.992-6c.824-.824 1.192-2.392.816-3.504l-9.4-27.784c-.368-1.104-.704-2.024-.72-2.048s.64-.704 1.48-1.52L72.752 14.6a5.63 5.63 0 0 0 0-7.952c-2.2-2.2-5.76-2.2-7.968-.008"/></svg>',
            'name': "Airport Transfers Sydney",
            'text': "Traveling to and from the airport can often be a stressful experience. However, with our fast and affordable airport transfers Sydney services, you can leave all your worries behind. We specialize in providing comfortable, convenient, and door-to-door cab services to and from both Sydney airports at highly competitive prices.   Our variety of taxis is designed to accommodate and to ensure that there is ample room for luggage. Whether you are traveling with family, friends, or colleagues, our spacious vehicles provide comfort and convenience."
        },
        {
            'img': "/images/service/maxicabs.webp",
            'icon': '<svg xmlns="http://www.w3.org/2000/svg" height="80" width="80" viewBox="0 0 80 80"><path d="M20.52 46.664a6.504 6.504 0 1 0 0 13.008 6.504 6.504 0 0 0 0-13.008m0 9.328a2.824 2.824 0 1 1 0-5.647 2.824 2.824 0 0 1 0 5.647m38.176-9.328a6.504 6.504 0 1 0 0 13.008 6.504 6.504 0 0 0 0-13.008m0 9.328a2.824 2.824 0 1 1 0-5.647 2.824 2.824 0 0 1 0 5.647m12.408-35.664H12.776c-2.136 0-4.24 1.712-4.664 3.808l-2.336 8.512C5.352 34.744 5 38.2 5 40.344v8.936a3.897 3.897 0 0 0 3.888 3.888h3.96c0-4.224 3.44-7.664 7.672-7.664s7.672 3.44 7.672 7.664h22.84c0-4.224 3.44-7.664 7.672-7.664s7.672 3.44 7.672 7.664h4.744a3.897 3.897 0 0 0 3.888-3.888V24.216c-.016-2.136-1.76-3.888-3.904-3.888m-49.96 16.4h-9.048l1.44-3.4a1.164 1.164 0 0 0-.624-1.528 1.164 1.164 0 0 0-1.528.624L9.608 36.64c-1.2-.312-1.936-1.44-1.688-2.776l2.088-8.344c.288-1.576 1.84-2.864 3.448-2.864h7.696zm17.296 0H23.48V22.656h14.96zm17.296 0h-14.96V22.656h14.96zm16.88-2.912c0 1.6-1.312 2.912-2.912 2.912h-11.64V22.656h11.632c1.6 0 2.912 1.312 2.912 2.912z"/></svg>',
            'name': "Maxi Cab Sydney",
            'text': "Looking for a Maxi Cabs Sydney and stressed about the luggage for your family trips? Don’t stress about anything we at 13 Cabs Sydney ensure and assist you with a comfortable transport of up to 11 passengers and their luggage/baggage at once. When you book a maxi cab in Sydney you will get a spacious and well-kept taxi van. We make an effort to provide the best and most affordable fares. Our maxi cab Sydney has 1-11 seats with lots of features such as air conditioning and clean and well-maintained vans. Travel with extra space and luxury."
        },
        {
            'img': "/images/service/wheelchair.webp",
            'icon': '<svg xmlns="http://www.w3.org/2000/svg" height="80" width="80" viewBox="0 0 80 80"><path d="M44.432 62.68a18.14 18.14 0 0 1-10.84 3.56c-9.984 0-18.16-8.104-18.16-18.088 0-5.496 2.504-10.64 6.824-14.096l1.192-.952-5.632-6.752-1.12.92C10.336 32.408 6.68 40.016 6.68 48.152 6.68 62.976 18.776 75 33.592 75c6.912 0 13.472-2.6 18.472-7.32l1.584-1.48-8.536-4.088zm27.84-2.872c-.632-.728-1.448-1.12-2.472-1.12l-4.712.032-7.536-20.616-20.128.032-.296-4.784 14.032.072-.04-8.264H36.432l-.4-7.352c1.648-1.352 2.632-3.328 2.632-5.496C38.664 8.256 35.384 5 31.32 5c-4.048 0-7.344 3.264-7.344 7.312 0 3.592 3 5.896 3 5.896l2.888 28.336 21.808-.032 8 20.12 13.248-.088.192-1.192c.144-.632.608-3.792-.84-5.544"/></svg>',
            'name': "Wheelchair Taxi Sydney",
            'text': "At 13 Cabs Sydney, we believe in making transportation accessible to everyone. Our wheelchair-accessible taxi transfer service is designed with your comfort and convenience in mind. We offer specially equipped vehicles that ensure a smooth and safe ride for passengers with mobility challenges. Whether you need assistance getting in and out of the vehicle, or you require a spacious and secure environment during your journey, our professional and well-trained drivers provide you with the support that you need."
        },
        {
            'img': "/images/service/babyseat.webp",
            'icon': '<svg xmlns="http://www.w3.org/2000/svg" height="80" width="80" viewBox="0 0 80 80"><path d="M50.296 35.528c-1.16-2.768-4.08-4.384-7.736-4.384H24.496c-9.776 0-17.984 11.392-6.88 22.344.08.176-.008.32-.2.32H9.192S5 53.808 5 60.184c.2 4.12 3.416 4.784 3.992 4.784h16.752s4.2 0 4.384-5.032l.024-.192c.008-.744 0-4.584 0-4.584.008-.544.424-1.168.984-1.168h13.12c.192 0 .36.152.376.344l3.096 7.008c1.152 2.864 3.408 4.968 7.16 3.616 3.552-1.28 3.736-4.096 3.112-6.072zm12.568-20.944c-6.704 0-12.136 5.432-12.136 12.136s5.432 12.136 12.136 12.136S75 33.432 75 26.72c0-6.704-5.44-12.136-12.136-12.136"/></svg>',
            'name': "Baby Seat Taxi",
            'text': "We are providing specialized luxurious taxi providers for families touring with babies and children. We offer you and your child a relaxing and comfortable travel anywhere in Sydney. Making travel arrangements early in the morning, baby seat taxi Sydney airport transfers to and from there? You are welcome at 13cabsSydney baby seat taxi. Your child will enjoy a comfortable trip. If your child or baby travels with you, we provide the best and most comfortable child or baby seat. Speed up now and book a baby seat taxi in Sydney."
        },
        {
            'img': "/images/service/regulartaxi.webp",
            'icon': '<svg xmlns="http://www.w3.org/2000/svg" height="80" width="80" viewBox="0 0 80 80"><path d="M70.32 33.296c.808-.056 1.632-.008 2.44-.008 1.56-.008 2.208-.752 2.232-2.544.024-1.856-.616-2.68-2.176-2.736-.848-.032-1.696-.008-2.536-.008-2.248.008-3.624 1.408-3.824 3.888 1.128.992 2.392 1.512 3.864 1.408m-3.864-1.408-.008-.008c-.152-.32-.328-.632-.448-.968-1.376-3.824-2.768-7.648-4.104-11.488-.728-2.096-2.088-3.328-4.12-3.472-5.136-.368-10.264-.784-15.408-.928-6.688-.192-13.368.184-20.024.896-2.024.216-3.48 1.248-4.208 3.36-.56 1.624-1.112 3.248-1.688 4.856-.888 2.472-1.792 4.944-2.752 7.576-.16-.464-.256-.752-.36-1.032-.752-2.032-1.64-2.68-3.648-2.688H7.8c-2.288 0-3.064.968-2.728 3.424.16 1.168.8 1.872 1.888 1.848 2.232-.056 4.584.568 6.632-1.176-.64.984-1.344 1.84-2.112 2.608-.88.872-1.944 1.544-2.704 2.512-.624.792-1.232 1.848-1.312 2.84-.216 2.84-.16 5.704-.2 8.56-.016 1.144 0 2.288 0 3.456H7.12c-.304 2.192.512 3.848 2.328 4.536.592.224.736.512.72 1.144-.032 1.664-.04 3.336 0 5 .04 1.608.448 2.184 1.728 2.216 2.096.048 4.192-.016 6.288-.08.688-.016 1.168-.432 1.264-1.232.104-.904.224-1.824.232-2.736.008-.928.32-1.184 1.16-1.176 6.944.04 13.896.024 20.84.024 5.896 0 11.792.024 17.688-.024.824-.008 1.104.288 1.096 1.136-.008.68.056 1.36.104 2.032.104 1.504.464 1.944 1.816 2 1.816.072 3.64.096 5.456.08 1.664-.016 2.112-.528 2.152-2.408.032-1.632.032-3.272 0-4.904-.008-.584.12-.864.68-1.08 1.88-.72 2.768-2.544 2.328-4.552h-.184c.056-.272.136-.504.136-.736-.056-2.856.016-5.72-.216-8.56-.296-3.64-1.816-6.56-4.792-8.552-.688-.464-1.016-1.552-1.512-2.352l.024.024zM17.24 27.28c.84-1.896 1.736-3.768 2.56-5.68.448-1.032 1.168-1.584 2.192-1.648q5.076-.348 10.152-.648c7.344-.44 14.68-.168 22.016.44 1.344.112 2.696.176 4.04.248 1 .056 1.664.496 2.096 1.544 1.36 3.28 2.8 6.528 4.208 9.784.144.328.272.672.44 1.104h-49.92c.776-1.784 1.48-3.472 2.216-5.144M10.768 43.2c.032-1.176.688-1.936 1.768-1.944 3.072-.032 6.152-.032 9.224-.008 1.056.008 1.776.768 1.832 1.904a30 30 0 0 1 0 2.96c-.056 1.136-.768 1.88-1.832 1.896-1.536.032-3.072.008-4.616.008v.008c-1.472 0-2.952.016-4.424-.008-1.296-.016-1.944-.752-1.96-2.168 0-.88-.016-1.768.008-2.648m58.472.112c.024.848.032 1.704-.008 2.552-.064 1.184-.672 1.944-1.768 1.96a259 259 0 0 1-9.32.008c-1.168-.024-1.728-.784-1.736-2.048-.008-.848-.008-1.704 0-2.552.008-1.384.672-2.152 1.952-2.176 1.504-.032 3.016-.008 4.52-.008 1.416 0 2.824-.016 4.24 0 1.368.024 2.08.784 2.12 2.264"/></svg>',
            'name': "Regular Taxi Sydney",
            'text': "Daily traveling can make a large difference in your pocket but with 13CabsSydney. You will find the best reliable regular taxi in Sydney. Here we ensure comfort, safety, and quick options in one place with affordable rates for passengers in Sydney. It’s a quick dash across your town, leaving the stress baggage at home. With our regular taxi Sydney you will find the option of travelling daily in the city. In the traffic of Sydney City, there will always be the issue of timing but, Our drivers know all the way to get you there in the meantime."
        },
        {
            'img': "/images/service/citytour.webp",
            'icon': '<svg xmlns="http://www.w3.org/2000/svg" height="80" width="80" viewBox="0 0 80 80"><path d="M79.504 49.296c-.384-2.768-1.904-4.8-4.528-5.84a105 105 0 0 0-6.952-2.44c-2.2-.704-4.512-1.088-6.648-1.928-4.192-1.656-8.28-3.584-12.448-5.312-2.8-1.16-5.624-2.272-8.712-2.416-.696-.032-1.384-.032-2.08-.048v-.016a.505.505 0 0 0-.512-.512h-6.44a.51.51 0 0 0-.512.512v.08c-2.464.112-4.928.288-7.384.552-1.2.128-2.472.288-3.544.8-5.816 2.76-11.584 5.632-17.384 8.456-.568.272-.96.56-1 1.288-.04.792-.28 1.576-.4 2.368-.392 2.728-1.192 5.4-.896 8.208.12 1.104.16 2.216.24 3.296h4.448c.072-.96.104-1.88.232-2.784.472-3.408 3.384-6.104 6.616-6.336 4.384-.304 7.296 2.752 7.872 5.584.232 1.152.304 2.336.448 3.512h38.944c0-1.2-.16-2.352.032-3.448.68-3.92 3.992-6.232 8.104-5.792 3.736.4 6.528 3.4 6.64 7.096.016.68.104 1.352.168 2.216 1.896-.088 3.696-.16 5.496-.256.48-.024.736-.272.688-.816-.168-2.008-.216-4.032-.488-6.024m-58.8-8.432c.952-1.92 1.976-3.616 3.368-5.064.88-.92 2.048-1.184 3.24-1.296 2.416-.232 4.832-.408 7.344-.608.112 2.752.224 5.288.336 7.936-4.792-.328-9.488-.64-14.288-.968m37.184 1.88c-6.008-.208-12.016-.456-18.016-.704-.744-.024-1.48-.096-2.32-.152-.152-2.584-.304-5.16-.464-7.84 2.56-.12 4.928.256 7.264.848 4.88 1.232 9.408 3.304 13.712 5.864.128.08.28.144.376.248.408.464.808.936 1.208 1.4-.584.12-1.176.36-1.76.336m8.296 5.744c-3.376 0-6.128 2.744-6.136 6.112 0 3.368 2.728 6.128 6.104 6.152 3.368.032 6.248-2.832 6.208-6.168-.04-3.368-2.8-6.096-6.176-6.096m.04 8.672a2.54 2.54 0 0 1-2.6-2.488c-.032-1.456 1.08-2.616 2.544-2.632 1.44-.008 2.616 1.152 2.616 2.576-.008 1.376-1.168 2.528-2.56 2.544m-53.856-8.672a6.14 6.14 0 0 0-6.216 6.12c-.016 3.344 2.736 6.12 6.12 6.144 3.36.032 6.128-2.712 6.152-6.088.016-3.4-2.672-6.144-6.056-6.176m-.072 8.68c-1.416-.008-2.56-1.136-2.568-2.528-.016-1.464 1.112-2.6 2.568-2.592 1.488.008 2.568 1.112 2.544 2.6-.016 1.44-1.112 2.52-2.544 2.52M31.4 30.52h6.008c0-.952.024-1.864-.008-2.776-.024-.712-.32-1.32-.84-1.84-.92-.904-1.976-1.168-3.168-.744-1.208.432-1.88 1.344-1.976 2.632-.048.576-.008 1.16-.016 1.744zm5.592-2.936c.08.856.016 1.712.016 2.6h-.952c0-.656-.008-1.304 0-1.952.016-1.344-.544-2.312-1.824-2.824-.032-.008-.056-.048-.096-.08 1.36-.168 2.744.896 2.856 2.256m1.872-.528c.016.304.224.392.496.392h2.408c.272-.008.472-.112.464-.416 0-.288-.2-.376-.448-.376h-2.456c-.272 0-.472.096-.464.4m-.632-3.208c.264-.28.536-.56.8-.84.288-.304.576-.6.864-.904.184-.2.24-.416.016-.616-.208-.2-.408-.112-.576.064-.568.592-1.136 1.184-1.696 1.776-.192.192-.264.408-.032.616.224.192.44.104.624-.096m-11.192 3.6h2.416c.264 0 .472-.088.488-.392s-.192-.4-.464-.4h-2.456c-.248 0-.448.088-.448.376 0 .304.192.408.464.416m2.736-4.44c.272.28.536.56.808.84.184.192.392.288.616.088.232-.2.16-.416-.024-.608-.568-.592-1.128-1.184-1.696-1.776-.176-.176-.376-.264-.584-.064-.216.2-.168.416.024.616.28.304.568.6.856.904m4.608-.4c.304.016.408-.192.408-.464 0-.816.008-1.632.008-2.448 0-.256-.088-.448-.376-.456-.296-.008-.408.192-.408.464-.008.416-.008.832-.008 1.248-.008.384-.008.776-.008 1.16 0 .272.088.48.384.496"/></svg>',
            'name': "City Tour Taxi",
            'text': "Wanted to travel the whole city luxuriously. Just arrived in Sydney and don’t want to be involved in the stressful process of public transport and keeping the clock in the city. With 13CabsSydney, you get all the solutions to your problems in one place. Just book a city tour taxi and enjoy a stress-free ride in a spacious taxi at a reliable and affordable cost.  Our friendly drivers aren’t just experts behind the wheel—they know the best Sydney spots, iconic monuments, and all the hidden parts of the city."
        }
    ];

    const chooseUs = [
        {
            'icon':'<i class="conexi-icon-insurance"></i>',
            'link':'#',
            'name':"Guaranteed On-time Service",
            'text':"Punctuality is very important in catching a flight or attending very important events. Time is of the essence that's why we have a guaranteed on-time service which assures you reach your cab's destination without any delays. Traffic conditions are monitored in real-time by experienced drivers and proper adjustments are carried out."
        },
        {
            'icon':'<i class="conexi-icon-seatbelt"></i>',
            'link':'#',
            'name':"Expert Drivers",
            'text':"Very highly qualified and very experienced drivers from our company are going to provide the best transportation experience in Sydney. Our drivers are all used to driving in the cities, delivering superior efficiency, safety, and smoothness whether it is to cross town, reach a hotel, or home after a business trip. Cooperative and trustful drivers serving you."
        },
        {
            'icon':'<i class="conexi-icon-consent"></i>',
            'link':'#',
            'name':"Comfort and Convenience ",
            'text':"After a long flight and a busy day of meetings, the thing you want most is to struggle with transport. With our service, you will enjoy maximum comfort and convenience, every time you book with our service. Our fleet of clean, modern, well-maintained vehicles gives you the ride quality you need in every situation, whether you are with a group, or on your own."
        },
        {
            'icon':'<i class="conexi-icon-consent"></i>',
            'link':'#',
            'name':"Local Knowledge",
            'text':"New in Sydney, or do you want to explore the city like a local? Our drivers not only excel in providing A-to-B transportation; they fully know the city and can tell you a lot of interesting things about it to make your stay even better. Looking for the best restaurants, top tourist attractions, or hidden gem off the beaten path? Our drivers would be happy to list some for you"
        },
        {
            'icon':'<i class="conexi-icon-consent"></i>',
            'link':'#',
            'name':"Flexible Booking",
            'text':"Travel plans change. This is why we offer flexible booking to allow you to book your ride anytime you want. We are there for any travel needs from airports to special events Sydney taxis and simply across town. No matter the time of day or night, we are available to ensure that you always have a reliable transportation option. Anytime you can cancel the ride."
        }
    ];

    const testimonials = [
        {
            'name':"Shana Druckman",
            'text':"Very happy with the service. The driver is very friendly and patient. He helped with our bags. He was slightly late due to traffic which is not unexpected. But he kept us informed, which I appreciate. I will use them again."
        },
        {
            'name':"Jodie Hadlock",
            'text':"I booked a taxi for my family to the Sydney Airport.b. Driver arrived early, which put my mind at ease. He provided a clean car seat for our young child, and he helped us to manage all of our suitcases. We enjoyed our ride."
        },
        {
            'name':"Emanuel Mcnmara",
            'text':"Exceptional customer service. Arrived in time. Our driver was so friendly. The trip to the Sydney airport was smooth. We travelled as a family of 6 anD will book again on our return home. Thank You so much for your service."
        }
    ];

    return (
        <>
        <section className="main-banner-wrapper">
            <div className="banner-style-one" slidesNumber={1}>
                <div className='react-multi-carousel-item--active'>
                <div className="slide-img" style={{backgroundImage: "url('/images/page/home.webp')"}}>
                    <div className="slide">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <h1 className="banner-title">Enjoy your reliable regular <br /> transfers taxi Sydney</h1>
                                    <p>Welcome to the most trusted and Reliable taxi service company</p>
                                    <div className="btn-block">
                                        <a href="#" className="banner-btn">Learn More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
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
                        <HomeForm />
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
        <section className="offer-style-one">
            <div className="container">
                <div className="block-title text-center">
                    <div className="dot-line"></div>
                    <p>Just check our list of taxi services in Sydney</p>
                    <h2>What we’re offering</h2>
                </div>
                <Slider slidesNumber={3} arrows={true} infinite={true}>
                {comprehensiveTaxi.map((taxi, index) => (
                    <div key={`oferings-${index}`}  className="single-offer-one hvr-float-shadow p-2">
                        <div className="image-block">
                            {/* <a href="#" ><i className="fa fa-link"></i></a> */}
                            <Image loading="lazy" width={800} height={600} src={taxi.img} alt={taxi.name} />
                        </div>
                        <div className="text-block">
                            <h3><a href="#">{taxi.name}</a></h3>
                            <p>{taxi.text}</p>
                        </div>
                    </div>
                ))}
                </Slider>
            </div>
        </section>
        <ServiceTab />
        <section className="feature-style-one thm-black-bg">
            <img src="/img/background/feature-bg-1-1.png" alt="Awesome Image" className="feature-bg" />
            <div className="container">
                <div className="block-title text-center">
                    <div className="dot-line"></div>
                    <p>13CabsSydney benefit list</p>
                    <h2 className="light">Why choose us</h2>
                </div>
                <Slider infinite={true} slidesNumber={3} arrows={true} autoPlay={true}>
                    {chooseUs.map((item,index)=>(
                    <div key={`chooseUs-${index}`} style={{paddingInline: 10}}>
                        <div className="single-feature-one">
                            <div className="icon-block" dangerouslySetInnerHTML={{__html:item.icon}}></div>
                            <h3><a href={item.link}>{item.name}</a></h3>
                            <p>{item.text}</p>
                        </div>
                    </div>
                    ))}
                </Slider>
            </div>
        </section>
        <section className="about-style-one ">
            <div className="container">
                <div className="block-title text-center">
                    <div className="dot-line"></div>
                    <p>Welcome to 13CabsSydney</p>
                    <h2>Yours First Choice <br/>to Travel Anywhere</h2>
                </div>
                <div className="row high-gutter">
                    <div className="col-lg-6">
                        <div className="about-image-block">
                            <img src="/img/resources/choise-1-1.png" alt="Awesome Image" />
                            <p>Upon arriving in Sydney City, the last thing you want to worry about is how to get to your accommodation. By Booking with 13CabsSydney in Advance, you can be certain of a comfortable and stylish arrival at your desired location. We cater to all passengers and tourists, ensuring that you reach your destination for the duration of your stay without any hassle. Our reputation for exceptional services has been built over the years, we take pride in delivering a top-notch experience to our clients.  You can consider our full service Sydney taxi company, offering more than just airport transfer Sydney. If you are new in Sydney, our drivers can provide valuable insights into the city’s top tourist destinations helping you make the most of your visit.</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="text-block">
                            <div className="video-block-one">
                                {/* <div className="image-block">
                                    <div className="inner-block">
                                        <img src="/img/resources/video-1-1.png" alt="Awesome Image" />
                                        <a href="https://www.youtube.com/watch?v=hsb-fA6ApiE" className="video-popup"><i className="fa fa-play"></i></a>
                                    </div>
                                </div> */}
                                <div className="content-block">
                                    <h3>We ensures in providing the best Taxi service in Sydney</h3>
                                </div>
                            </div>
                            <p>Upon arriving in Sydney City, the last thing you want to worry about is how to get to your accommodation. By Booking with 13CabsSydney in Advance, you can be certain of a comfortable and stylish arrival at your desired location. We cater to all passengers and tourists, ensuring that you reach your destination for the duration of your stay without any hassle. Our reputation for exceptional services has been built over the years, we take pride in delivering a top-notch experience to our clients.  You can consider our full service Sydney taxi company, offering more than just airport transfer Sydney. If you are new in Sydney, our drivers can provide valuable insights into the city’s top tourist destinations helping you make the most of your visit.</p>
                            <hr className="style-one" />
                            <div className="call-block">
                                <div className="left-block">
                                    <div className="icon-block">
                                        <i className="conexi-icon-phone-call"></i>
                                    </div>
                                    <div className="content-block">
                                        <p>Call us now and make <br/>your booking</p>
                                    </div>
                                </div>
                                <div className="right-block">
                                    <a className="phone-number" href="callto:888-888-0000">1300 530 570</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="cta-style-two">
            <div className="container">
                <div className="content-block">
                    <p>Make a call or fill form</p>
                    <h3>Call our agent to get a quote.</h3>
                </div>
                <div className="button-block">
                    <a href="book-ride.html" className="cta-btn">Book Taxi Now</a>
                </div>
            </div>
        </section>
        <section className="testimonials-style-one">
            <div className="container">
                <div className="block-title text-center">
                    <div className="dot-line"></div>
                    <p className="light">What our customers are saying</p>
                    <h2 className="light">Voices of Satisfaction</h2>
                </div>
                <Slider infinite={true} slidesNumber={2} className="slider testimonials-slider-one" arrows={true}>
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
        <section className="cta-style-one text-center">
            <div className="container">
                <p>Call 24 hour service available</p>
                <h3>Call now and book <br/> our taxi for your next ride</h3>
                <a href="taxi.html" className="cta-btn">Choose Your Taxi</a>
            </div>
        </section>
    </> 
    );
}
