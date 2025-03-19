import '@/style/location.scss';
import fs from 'fs/promises';
import Image from 'next/image';
import path from 'path';
import NotFound from "@/components/NotFound/notfound";

async function getJson() {
    const filePath = path.join(process.cwd(), 'src', 'data', 'sydney.json');
    const data = await fs.readFile(filePath, 'utf-8');
    const jsonData = JSON.parse(data);
    return jsonData;
}

export async function generateStaticParams() {
    try {
        const jsonData = await getJson();
        return Object.keys(jsonData).map((item) => ({ serviceId: item }));
    } catch (error) {
        console.error("Failed to fetch data:", error);
        return [];
    }
}

export async function generateMetadata({ params }) {
    const { serviceId } = params;
    let locationData = {};
    try {
        const jsonData = await getJson();
        locationData = jsonData[serviceId];
    } catch (error) {
        console.error("Failed to fetch location data:", error);
    }

    if (!locationData || Object.keys(locationData).length === 0) {
        return {
            title: "Page Not Found",
            description: "The page you are looking for does not exist.",
            robots: "noindex, nofollow",
        };
    }

    const { title, description, keywords } = locationData;
    return {
        title: title,
        description: description.substring(0, 160),
        keywords: keywords,
        openGraph: {
            title: title,
            description: description.substring(0, 160),
        },
        twitter: {
            card: 'summary_large_image',
            title: title,
            description: description.substring(0, 160),
        }
    };
}

export default async function Location({ params }) {
    const { serviceId } = params;
    let locationData = {};
    try {
        const jsonData = await getJson();
        locationData = jsonData[serviceId];
    } catch (error) {
        console.error("Failed to fetch location data:", error);
    }
    if (!locationData || Object.keys(locationData).length === 0) {
        return(<NotFound/>)
    }
    const { banner, services, qusetionset1, location, qusetionset2 } = locationData;
    
    return (
        <>
        {banner && (<section className="banner-section" style={{backgroundImage: `url(${banner.image})`}}>
            <div className="padWidth">
                <div className="yellowHead witr_section_title_inner">
                    <h1>{banner.title}</h1>
                    <div dangerouslySetInnerHTML={{__html: banner.text}}></div>
                </div>
                <a className="callBtn service-btn" href="tel:+611300530570">
                    <svg height="30" width="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.2 19.2" xmlSpace="preserve">
                        <path d="M15.145 15.363c-0.663 -0.529 -2.728 -1.547 -3.238 -1.664 -0.509 -0.118 -1.124 0.374 -1.294 0.984 -0.171 0.611 -0.489 0.553 -0.489 0.553s-1.225 -0.45 -3.466 -2.683c-2.241 -2.233 -2.694 -3.457 -2.694 -3.457s-0.06 -0.318 0.551 -0.491c0.609 -0.171 1.099 -0.789 0.98 -1.297 -0.119 -0.509 -1.145 -2.571 -1.676 -3.231 -0.532 -0.66 -1.56 -0.32 -1.786 -0.155 -0.227 0.164 -2.616 1.683 -1.898 4.48 0.719 2.797 2.263 5.035 3.959 6.726 1.697 1.69 3.94 3.225 6.739 3.934 2.799 0.709 4.309 -1.685 4.473 -1.913 0.164 -0.227 0.5 -1.256 -0.161 -1.786M9.263 7.094c0.371 0.182 0.962 0.52 1.646 1.204 0.684 0.684 1.022 1.275 1.204 1.646 0.191 0.39 0.332 0.469 0.447 0.442 0.189 -0.044 0.251 -0.094 0.269 -0.488 0.014 -0.335 -0.146 -1.335 -1.165 -2.354s-2.019 -1.179 -2.354 -1.165c-0.394 0.017 -0.444 0.08 -0.487 0.269 -0.027 0.114 0.051 0.255 0.441 0.446m0.597 -3.935c-0.48 0 -0.602 0.297 -0.616 0.412 -0.03 0.233 0.142 0.422 0.499 0.524 0.408 0.117 2.024 0.635 3.379 1.989 1.355 1.354 1.873 2.971 1.99 3.379 0.102 0.356 0.29 0.528 0.524 0.499 0.116 -0.014 0.413 -0.135 0.412 -0.616 0 -0.38 -0.232 -2.371 -2.024 -4.164C12.231 3.391 10.24 3.159 9.861 3.159m6.538 -0.351C13.831 0.241 11.123 0.02 10.657 0.008c-0.568 -0.014 -0.794 0.241 -0.793 0.502 0 0.223 0.228 0.452 0.568 0.539 0.51 0.131 2.531 0.449 4.904 2.822 2.374 2.373 2.692 4.395 2.823 4.905 0.087 0.339 0.316 0.568 0.539 0.568 0.262 0 0.517 -0.225 0.502 -0.793 -0.012 -0.466 -0.233 -3.175 -2.8 -5.743"></path>
                    </svg>
                    CALL TO BOOK TAXI
                </a>
            </div>
        </section>)}
        {services && (<section className="services-section padWidth">
            <div className="services-image">
                {services?.image && <Image loading="lazy" width={700} height={400} src={services.image} className="" alt={services.title} />}
            </div>
            <div className="services-content">
                <div className="greenHead witr_section_title_inner">
                    <h2><span>{services.title}</span></h2>
                </div>
                <div className="services-list">
                <ul>
                    {services.list.map((element, key) => (
                        <>
                        <li key={key}><p><a href={element.link}>{element.name}</a><br/>{element.desc}</p></li>
                        </>
                    ))}
                </ul>
                </div>
            </div>
        </section>)}
        {location && (location.html ?
        (<section className="location-section">
            <div className="container">
            {location.html.map((item, key) => (
                <div key={key} className="greenHead witr_section_title_inner" dangerouslySetInnerHTML={{__html: item}} />
            ))}
            </div>
        </section>):
        (<section className="location-section">
            <div className="container">
                <div className="greenHead witr_section_title_inner">
                    <h4>{location.title}</h4>
                    <p>{location.text}</p>
                </div>
                <div className="location-list">
                    {location.list.map((item, key) => (
                    <div className="location-item" key={key}>
                        <div className="location-item-image" dangerouslySetInnerHTML={{__html: item.image}} />
                        <div>
                            <h4>{item.title}</h4>
                            <p>{item.text}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>)
        )}
        {qusetionset1 && (<section className="qusetionset1-section">
            <div className="qusetionset1-item container">
                {qusetionset1.map((item, key) => (
                <div key={key} className="witr_section_title_inner" dangerouslySetInnerHTML={{__html: item}} />
                ))}
            </div>
        </section>)}
        <section className="contact-section container">
            <div className="contact-image">
                {services?.image && <Image loading="lazy" width={700} height={400} src="/images/team/support.webp" className="" alt={services.title} />}
            </div>
            <div className="contact-content">
                <div className="greenHead witr_section_title_inner">
                    <h2>We&apos;re here to help you</h2>
                </div>
                <div className="contact-list">
                <ul>
                    <li><span>24/7 customer support &apos; speak to a real person!</span></li>
                    <li><span>Personalised service</span> </li>
                    <li><span>Trained Professionals</span> </li>
                </ul>
                </div>
                <a className="callBtn service-btn" href="tel:+611300530570">
                    <svg height="30" width="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.2 19.2" xmlSpace="preserve">
                        <path d="M15.145 15.363c-0.663 -0.529 -2.728 -1.547 -3.238 -1.664 -0.509 -0.118 -1.124 0.374 -1.294 0.984 -0.171 0.611 -0.489 0.553 -0.489 0.553s-1.225 -0.45 -3.466 -2.683c-2.241 -2.233 -2.694 -3.457 -2.694 -3.457s-0.06 -0.318 0.551 -0.491c0.609 -0.171 1.099 -0.789 0.98 -1.297 -0.119 -0.509 -1.145 -2.571 -1.676 -3.231 -0.532 -0.66 -1.56 -0.32 -1.786 -0.155 -0.227 0.164 -2.616 1.683 -1.898 4.48 0.719 2.797 2.263 5.035 3.959 6.726 1.697 1.69 3.94 3.225 6.739 3.934 2.799 0.709 4.309 -1.685 4.473 -1.913 0.164 -0.227 0.5 -1.256 -0.161 -1.786M9.263 7.094c0.371 0.182 0.962 0.52 1.646 1.204 0.684 0.684 1.022 1.275 1.204 1.646 0.191 0.39 0.332 0.469 0.447 0.442 0.189 -0.044 0.251 -0.094 0.269 -0.488 0.014 -0.335 -0.146 -1.335 -1.165 -2.354s-2.019 -1.179 -2.354 -1.165c-0.394 0.017 -0.444 0.08 -0.487 0.269 -0.027 0.114 0.051 0.255 0.441 0.446m0.597 -3.935c-0.48 0 -0.602 0.297 -0.616 0.412 -0.03 0.233 0.142 0.422 0.499 0.524 0.408 0.117 2.024 0.635 3.379 1.989 1.355 1.354 1.873 2.971 1.99 3.379 0.102 0.356 0.29 0.528 0.524 0.499 0.116 -0.014 0.413 -0.135 0.412 -0.616 0 -0.38 -0.232 -2.371 -2.024 -4.164C12.231 3.391 10.24 3.159 9.861 3.159m6.538 -0.351C13.831 0.241 11.123 0.02 10.657 0.008c-0.568 -0.014 -0.794 0.241 -0.793 0.502 0 0.223 0.228 0.452 0.568 0.539 0.51 0.131 2.531 0.449 4.904 2.822 2.374 2.373 2.692 4.395 2.823 4.905 0.087 0.339 0.316 0.568 0.539 0.568 0.262 0 0.517 -0.225 0.502 -0.793 -0.012 -0.466 -0.233 -3.175 -2.8 -5.743"></path>
                    </svg>
                    CALL FOR SUPPORT
                </a>
            </div>
        </section>
        {qusetionset1 && (<section className="qusetionset1-section">
            <div className="qusetionset1-item container">
                {qusetionset2.map((item, key) => (
                <div key={key} className="witr_section_title_inner" dangerouslySetInnerHTML={{__html: item}} />
                ))}
            </div>
        </section>)}
        </>
    );
}
