import '@/style/tempPage.scss';
import Breadcrumbs from '@/components/Breadcrumbs/breadcrumbs';

export const metadata = {
    title: "13Cabs SydneyTERMS AND CONDITIONS | Reliable Taxi Service in Sydney",
    description: "Contact 13Cabs Sydneyfor dependable transportation services in Sydney. Reach us via phone or our online form for taxi bookings, questions, or support."
};
export default function Contact() {
    return (
        <main className="main">
            <div className="container">
                <h1 className="title">TERMS AND CONDITIONS</h1>
                <Breadcrumbs visible={0} />
                <p>Welcome to Apex Maxi! Thank you for using our Services. These are some conditions that are applied to you when you visit our website.  And when you use our taxi services. You need to agree to our terms and conditions. Please read them carefully.</p>
                <h2>Services</h2>
                <p>13Cabs Sydneyprovides services regarding standard taxis, luxurious taxis, airport taxis, maxi cab, and wheel-chair taxis in Sydney, Australia.</p>
                <h2>Booking and reservation </h2>
                <p><b>How can you book a ride:</b> You may book it from our website or through calling our customer service. </p>
                <p><b>Confirmation message:</b> If you receive a message or any email from us, it means your booking is confirmed. If you don&apos;t receive any confirmation, please reach out to our customer services. </p>
                <p><b>Cancellation policy:</b> Customers can cancel their booking through our website or through calling our customer service. Cancellation fees may be applicable. 13Cabs Sydneyhas all rights to change fees for delayed cancellations.</p>
                <h2>Payment </h2>
                <p>All the fares will be calculated according to the distance you&apos;ve traveled and time taken by your ride. For extra stoppage and waiting times, there may be some additional charges.</p>
                <p><b>Mode of payment:</b> 13Cabs Sydneyaccepts various methods of payment.</p>
                <ul>
                    <li>Cash</li>
                    <li>Credit/Debit cards </li>
                    <li>Google pay </li>
                    <li>Apple pay </li>
                </ul>
                <p>Customers are required to provide the details of payment at the time of booking..</p>
                <h2>Liability limitation</h2>
                <p><b>Service disruption:</b>we are providing reliable service, we are not responsible for any delays, disruption, or damages occurring from factors that are beyond our control, including traffic conditions, accidents, or weather.</p>
                <p><b>Indirect Damages:</b> 13Cabs Sydneyis not responsible for any indirect, consequential, or incidental damages arising from the use of our services.</p>
                <h2>Privacy and Data Protection</h2>
                <p><b>Collection of Data:</b> 13Cabs Sydneycollects some personal information that is necessary for providing our services to customers, including contact details and payment information.</p>
                <p><b>Data use:</b> Customer data is used accordingly with our privacy policy. We can share your information with third parties (Which are helping hands of 13Cabs Sydneyin providing the best services for customers). We can share your information as required for service delivery or as mandated by law.</p>
                <h2>Terms Modifications</h2>
                <p>13Cabs Sydneyhas all the rights to update these terms from time to time. Any update will be posted on our website and will be applicable immediately upon posting. Continuous use of our services after applying some updates signifies your acceptance of the revised terms.</p>
                <h2>Applicable Law</h2>
                <p>This agreement is governed by the laws of New South Wales, Australia, and you hereby consent to the exclusive jurisdiction and venue of courts in New South Wales, Australia, in all disputes arising out of or relating to the use of the Services</p>
                <h4>Thank you for choosing Apex Maxi, We are looking for better service for you.</h4>
            </div>
        </main>
    );
}