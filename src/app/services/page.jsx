import Breadcrumbs from '../../components/Breadcrumbs/breadcrumbs';
import '../../style/service.scss';
import Image from 'next/image';
import Slider from '@/components/Slider/slider';

export const metadata = {
    title: "Apex Maxi Cab - Affordable Maxi Taxi to Sydney Airport",
    description: "Book Apex Maxi Cab for comfortable, spacious maxi taxi rides to Sydney Airport. Enjoy affordable group transfers with reliable service. Reserve your airport taxi today!",
    keywords: "Sydney airport shuttle, Corporate taxi services Sydney, Luxury taxi Sydney, Family taxi service Sydney, Wheelchair accessible taxis Sydney, Group taxi service Sydney"
};
export default function Service() {
    const comprehensiveTaxi = [
        {
            'img': "/img/cars/kiac.webp",
            'icon': '<svg xmlns="http://www.w3.org/2000/svg" height="44" width="44" viewBox="0 0 80 80"><path d="M64.784 6.64 52.888 18.928c-.816.84-2.376 1.224-3.488.864l-25.736-8.456c-1.112-.368-2.68.008-3.504.84l-6.696 6.704c-.824.824-.64 1.888.424 2.384l23.52 10.792c1.064.488 1.264 1.568.456 2.4L21.968 50.864c-.208.208-.416.416-.608.624-.32.36-1.432.264-2.496-.224l-7.368-3.392c-1.064-.488-2.6-.216-3.424.616L6.2 50.36c-.824.824-.696 1.992.312 2.608l9.328 5.76c.992.616 2.472 1.784 3.296 2.608l.288.288c.824.824 2.024 2.28 2.672 3.264l6.224 9.296c.648.976 1.848 1.096 2.672.256l1.52-1.52c.824-.824 1.096-2.36.6-3.416l-4.456-9.544c-.496-1.056-.704-2.048-.496-2.216.128-.104.256-.216.368-.328L45.264 41.2c.84-.816 1.592-1.408 1.664-1.328.08.08.576.992 1.096 2.04l12.36 24.528c.528 1.04 1.624 1.216 2.448.392l5.992-6c.824-.824 1.192-2.392.816-3.504l-9.4-27.784c-.368-1.104-.704-2.024-.72-2.048s.64-.704 1.48-1.52L72.752 14.6a5.63 5.63 0 0 0 0-7.952c-2.2-2.2-5.76-2.2-7.968-.008"/></svg>',
            'name': "Airport Transfer",
            'text': "Getting late for a flight! Leave the stress baggage at home, and hop into comfort with Apex Cabs. Sedan, SUV, or maxi-taxi, a complete package we have. Enjoy a smooth ride to the airport, every single time.",
            'link': '/service/airport-transfer'
        },
        {
            'img': "/img/cars/7-seater.webp",
            'icon': '<svg xmlns="http://www.w3.org/2000/svg" height="44" width="44" viewBox="0 0 80 80"><path d="M50.296 35.528c-1.16-2.768-4.08-4.384-7.736-4.384H24.496c-9.776 0-17.984 11.392-6.88 22.344.08.176-.008.32-.2.32H9.192S5 53.808 5 60.184c.2 4.12 3.416 4.784 3.992 4.784h16.752s4.2 0 4.384-5.032l.024-.192c.008-.744 0-4.584 0-4.584.008-.544.424-1.168.984-1.168h13.12c.192 0 .36.152.376.344l3.096 7.008c1.152 2.864 3.408 4.968 7.16 3.616 3.552-1.28 3.736-4.096 3.112-6.072zm12.568-20.944c-6.704 0-12.136 5.432-12.136 12.136s5.432 12.136 12.136 12.136S75 33.432 75 26.72c0-6.704-5.44-12.136-12.136-12.136"/></svg>',
            'name': "Baby Seat Taxi",
            'text': "Need a completely comfortable ride and secure for your toddler? Book a baby seat taxi at Apex Cabs! Ensures a perfect set-up for your child’s journey to make it safe and smooth. Book now for a stress-free, joyful trip with your kid on board.",
            'link': '/service/baby-seat'
        },
        {
            'img': "/img/cars/11-seater.webp",
            'icon': '<svg xmlns="http://www.w3.org/2000/svg" height="44" width="44" viewBox="0 0 80 80"><path d="M44.432 62.68a18.14 18.14 0 0 1-10.84 3.56c-9.984 0-18.16-8.104-18.16-18.088 0-5.496 2.504-10.64 6.824-14.096l1.192-.952-5.632-6.752-1.12.92C10.336 32.408 6.68 40.016 6.68 48.152 6.68 62.976 18.776 75 33.592 75c6.912 0 13.472-2.6 18.472-7.32l1.584-1.48-8.536-4.088zm27.84-2.872c-.632-.728-1.448-1.12-2.472-1.12l-4.712.032-7.536-20.616-20.128.032-.296-4.784 14.032.072-.04-8.264H36.432l-.4-7.352c1.648-1.352 2.632-3.328 2.632-5.496C38.664 8.256 35.384 5 31.32 5c-4.048 0-7.344 3.264-7.344 7.312 0 3.592 3 5.896 3 5.896l2.888 28.336 21.808-.032 8 20.12 13.248-.088.192-1.192c.144-.632.608-3.792-.84-5.544"/></svg>',
            'name': "Disability",
            'text': "Physically challenged? No problem! We have a fleet of cool, equipped vehicles and super friendly,  experienced and NDIS-accredited drivers. No matter what, we get you where you need to go. Just book and let's ride! ",
            'link': ''
            // 'link': '/service/wheelchair'
        },
        {
            'img': "/img/cars/canry.webp",
            'name': "Premium Service",
            'text': "Stylish ride at a reliable cost! Apex Cabs' premium service provides you with luxury, long-wheelbase sedans that bring an extra touch of elegance at a minimum booking fee. Comfort, class means Apex cabs. Book now and enjoy the ride.",
            'link': ''
        },
        // {
        //     'img': "/img/cars/canry.webp",
        //     'name': "Fixed Fare Taxi",
        //     'text': "Enjoy a stress-free ride across Australia with 13cabs’ Fixed Fare Taxi service. Know your fare upfront, ensuring a smooth journey at a predetermined price.",
        //     'link': ''
        // },
        {
            'img': "/img/cars/7-seaterPets.webp",
            'icon': '<svg xmlns="http://www.w3.org/2000/svg" height="44" width="44" viewBox="0 0 44 44"><path d="M29.502 32.028c.462.713.581 1.61.506 2.49-.044.471-.233.814-.752.902-.264.048-.546.185-.752-.062-.22-.26.004-.488.128-.726.59-1.135.264-2.169-.893-2.653-1.008-.422-1.962-.871-2.561-1.848-.123-.202-.343-.392-.603-.326-.268.075-.304.365-.33.598-.04.374-.026.748-.04 1.126-.053 1.434-.788 2.53-1.742 3.511-.207.211-.488.352-.805.321-.414-.044-.62-.233-.356-.638.207-.308.444-.607.708-.871.827-.849.449-1.725.088-2.614-.326-.814-.924-1.144-1.773-1.06-.475.053-.959.026-1.434.158-1.153.326-1.439.906-.898 1.962.37.717.735 1.43.735 2.27 0 .713-.62 1.131-1.294.876-.334-.128-.462-.356-.145-.576.506-.365.422-.796.163-1.192a42 42 0 0 0-1.632-2.292c-.202-.268-.537-.352-.867-.356-1.131-.018-2.248.106-3.331.475-.761.26-1.228.748-1.272 1.58-.009.185.009.374-.132.532-.123.145-.264.295-.471.268-.273-.04-.198-.273-.207-.449-.075-1.408.541-2.385 1.76-3.098 1.25-.73 1.619-1.91 1.131-3.164-.211-.528-.515-.849-1.162-.713a3.2 3.2 0 0 1-1.122.018c-.678-.11-.972-.678-.708-1.302.277-.656.444-1.382 1.316-1.584.458-.106.084-.634.321-.937.563.141.906.612 1.324.968.365.312.686.678 1.074.972 1.272.959 2.605 1.135 4.044.299 1.927-1.122 4.026-1.703 6.169-.898 1.298.484 2.314.66 3.59-.084 1.166-.673 2.341.053 3.366.717 1.012.66 1.962 1.421 3.001 2.033 1.456.854 2.895.251 3.37-1.329.233-.783.123-1.54-.466-2.09-.634-.59-1.448-.814-2.319-.607-.449.106-.726.427-.818.893.057.031.101.07.154.075.528.075 1.065.172.986.88-.053.444-.937.818-1.478.669-1.201-.33-1.628-1.976-.779-2.97.766-.889 2.719-1.148 4.237-.563 1.355.524 2.143 1.606 2.121 2.93-.035 2.578-2.702 4.374-5.13 3.463-1.17-.44-2.196-1.113-3.177-1.874-.44-.348-.876-.708-1.399-.946-.568-.255-1.131-.339-1.716-.079-.88.392-.928.845-.537 1.698.854 1.804 1.725 3.564 2.812 5.214M10.371 21.626c.066-.268.317-.004.453.07.994.506 1.782 1.28 2.614 2.006 1.395 1.214 2.442 1.483 4.202.48 2.385-1.364 4.937-1.531 7.476-.312.378.185.638.106.955-.088 1.109-.708 2.297-.889 3.529-.387.585.233 1.131.563 1.76.884-.33-1.76.436-2.838 2.002-3.441-.801-1.166-1.835-2.015-3.049-2.627-2.583-1.307-5.359-1.584-8.158-1.223-3.454.449-6.653.145-9.324-2.328-1.351-1.258-2.715-2.526-3.084-4.479-.119-.625-.453-1.192-.858-1.698h-.158c-.312.568-.603 1.166-.603 1.813 0 .493-.224.634-.62.744-.854.229-1.694.607-1.91 1.536-.154.62-.524.893-.99 1.14-.427.224-.867.436-1.329.568-.678.198-.629.541-.268.99.66.814 1.549 1.157 2.561 1.122.598-.022.924.202 1.201.7.915 1.615 2.002 3.115 3.164 4.558.092.097.268.673.436-.026m24.27 4.052c.356.224.788.827 1.311.312.528-.524.708-1.223.414-1.914-.299-.713-.994-.783-1.668-.845.524.616.713 1.223.238 1.923-.11.172-.625.304-.295.524m1.126 3.634c-.154-.246-.308-.374-.634-.378-1.272 0-2.424-.431-3.472-1.126-.893-.594-1.751-1.241-2.631-1.848-.431-.295-.893-.506-1.434-.295-.436.172-.629.356-.33.889.664 1.175 1.65 1.967 2.798 2.583 1.096.581 1.584 1.496 1.549 2.688-.018.603-.044 1.254-.818 1.483-.26.075-.255 1.298-.022 1.421.427.224 1.883-.422 2.024-.946.396-1.448.713-2.913.238-4.655 1.324 1.065 2.341 2.116 3.084 3.401.418.722.26 1.016-.546 1.302-.361.123-.532.383-.502.73.035.361.356.339.625.348a7.4 7.4 0 0 0 1.76-.145c.946-.198 1.206-.713.708-1.549-.783-1.307-1.606-2.596-2.398-3.903m5.047-3.903c-.365-.158-.717-.33-1.096-.471-.238-.088-.488-.106-.51.268-.035.572-.282 1.074-.576 1.606.924.057 1.998-.744 2.622-1.241z"/></svg>',
            'name': "Taxi For Pets",
            'text': "Do you have an appointment with a dog doctor? With Apex Cabs taxi for pets, whether it's a vet visit or some grooming session, hassle-free pet transport is covered by Apex taxi. Don't look at stress and say hello to easy, breezy pet rides.",
            'link': ''
        },
        {
            'img': "/img/cars/parcel.webp",
            'name': "Parcel Delivery",
            'text': "Is something important to send? Anything that fits in an Apex Cabs car or van, we surely deliver door to door at the price of a cab fare. Do you know the best part? We guarantee pick-up in under 10 minutes. Say hello to speedy, reliable service. Let's get that parcel delivered!",
            'link': ''
        },
        {
            'img': "/img/cars/canry.webp",
            'name': "Full Size Sedan",
            'text': "Planned a business trip? A night out with friends? Or an important meeting? No need to compromise, when you can ride your best comfortable Apex Cabs! Enjoy the ride, because Apex Cabs provides luxury at a reliable cost. Sit in, relax, and let's get you there in style!",
            'link': ''
        },
        {
            'img': "/img/cars/kiac.webp",
            'name': "SUV",
            'text': "Need some extra leg space? Need space for more luggage? Our SUVs will be covered for you. Smoothy, comfy, and perfect for a maximum of seven passengers. Style and comfort are provided by our SUV fleet!",
            'link': ''
        },
        {
            'img': "/img/cars/11-seater.webp",
            'name': "maxi-taxi - Group Travel",
            'text': "A big joint family heading towards the airport? Or are team members going to an event? No issue! Our Apex Cabs maxi-taxi provides a comfortable ride for up to ten people. Easy, spacious, and completely fun – just book your maxi-taxi now!",
            'link': ''
        }
    ];
    return (
        <>
        <Breadcrumbs name="Service" />
        <section class="taxi-style-one taxi-page">
            <div class="container">
                <div class="tab-content">
                    <div class="row">
                    {comprehensiveTaxi.map((taxi,idx)=> (
                        <>
                        <div key={idx} class="col-md-6 col-sm-12">
                            <div class="single-taxi-one px-5">
                                <div class="inner-content">
                                    <Image loading="lazy" className="taxiCard-imgs-img" width={523} height={277} src={taxi.img} alt={taxi.name} />
                                    {/* <img src="/img/pricing/pricing-1-1.png" alt="Awesome Image" /> */}
                                    {taxi.icon && (
                                        <div className="icon-block" dangerouslySetInnerHTML={{ __html: taxi.icon}} />
                                    )}
                                    <h3>{taxi.name}</h3><p>{taxi.text}</p>
                                    {/* <ul class="feature-list">
                                        <li>
                                            <span class="name-line">Base Rate:</span>
                                            <span class="price-line">$4.30</span>
                                        </li>
                                        <li>
                                            <span class="name-line">Per Mile/KM:</span>
                                            <span class="price-line">$2.00</span>
                                        </li>
                                        <li>
                                            <span class="name-line">Passengers:</span>
                                            <span class="price-line">4</span>
                                        </li>
                                    </ul> */}
                                    {taxi.link? 
                                    <div className="flex gap-2">
                                    <a href={taxi.link} class="book-taxi-btn">Know More</a>
                                        <a href="tel:+611300530570" class="book-taxi-btn">Call Now</a>
                                    </div>:
                                    <div className="flex gap-2">
                                        <a href="/contact" class="book-taxi-btn">Book Now</a>
                                        <a href="tel:+611300530570" class="book-taxi-btn">Call Now</a>
                                    </div>}
                                </div>
                            </div>
                        </div>
                        </>
                    ))}
                    </div>
                </div>
            </div>
        </section>
        <section className="testimonials-style-one">
            <div className="container">
                <div className="block-title text-center">
                    <div className="dot-line"></div>
                    <p className="light">Latest blog posts</p>
                    <h2 className="light">News & updates</h2>
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
