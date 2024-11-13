import '@/style/tempPage.scss';
import Breadcrumbs from '@/components/Breadcrumbs/breadcrumbs';

export const metadata = {
    title: "Apex Maxi Cancellation policy | Reliable Taxi Service in Sydney",
    description: "Contact Apex Maxi for dependable transportation services in Sydney. Reach us via phone or our online form for taxi bookings, questions, or support."
};
export default function Contact() {
    return (
        <main className="main">
            <div className="container">
                <h1 className="title">Cancellation policy</h1>
                <Breadcrumbs visible={0} />
                <p>About our cancellation policy: Apex Maxi always strives to provide reliable and timely taxi services. But we can understand that plans may change, and any time a passenger may need to cancel the ride. This cancellation policy gives the terms under which cancellation is handled.</p>
                <p>If any passenger cancels the ride: there are some categories when a customer may cancel the ride: a.  Early cancellation: when a customer cancels the ride, he/she may do this without paying any additional charges. Standard cancellation can be made up to at least 5 minutes before the scheduled pick-up time. B. Late cancellation: If any customer cancels the ride after 5 minutes of the scheduled time of pick-up. A late cancellation fee will be charged to you.</p>
                <p>If the driver cancels the ride: there may be some unwanted circumstances when our driver may cancel your ride.</p>
                <ol>
                    <li>Unavailability: if the driver is unavailable to fulfill your demand. In this we inform you within the mean time, and no cancellation fee will be applied.</li>
                    <li>For safety purposes, Apex Maxi may cancel your ride at any time if the driver faces any violation of our terms and conditions. In such cases cancellation fees may apply</li>
                </ol>
                <p><b>Refund policy:</b> In any case, you are charged an inappropriate cancellation fee. Then please contact our customer service as soon as possible to get a refund of your amount.</p>
                <p>How can you cancel the booking: you may cancel the ride through A.our website: you can cancel our ride directly from our website by selecting the active booking and clicking “cancel the ride”. B. via call: you may cancel your ride by calling customer service and by providing your booking details.</p>
                <p>Apex Maxi has all the rights to make the changes in cancellation policy at any time. All the changes will be provided to you through our website. Continuation using our services after the changes become applied signifies your acceptance of the new policy.</p>
                <p> Having any query regarding this policy: for any questionnaire, you may contact us through:</p>
                <ul>
                    <li><b>Contact:</b> 2 8188 3546</li>
                    <li><b>Address:</b> 7/46-48 Restwell St, Bankstown NSW 2200, Australia</li>
                </ul>

                <h4>Thank you for choosing Apex Maxi, We are looking for better service for you.</h4>
            </div>
        </main>
    );
}