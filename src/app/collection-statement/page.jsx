import '@/style/tempPage.scss';
import Breadcrumbs from '@/components/Breadcrumbs/breadcrumbs';

export const metadata = {
    title: "13Cabs Sydneycollection statement | Reliable Taxi Service in Sydney",
    description: "Contact 13Cabs Sydneyfor dependable transportation services in Sydney. Reach us via phone or our online form for taxi bookings, questions, or support."
};
export default function Contact() {
    return (
        <main className="main">
            <div className="container">
                <h1 className="title">13Cabs Sydneycollection statement</h1>
                <Breadcrumbs visible={0} />
                <h2>About this privacy policy</h2>
                <p>To provide our services and conduct our business activities, we have to collect your personal information.</p>
                <p>According to our privacy policy, you agree to share your information. We can use this to provide you with services and can share the data with our related entities.</p>
                <p>Your personal information may be used and disclosed for company marketing and business purposes.</p>
                <p>It may be disclosed to our related entities, Which helps us to provide you with the best services in Sydney. These third parties may be located overseas.</p>
                <p>Apex Maxi&apos; privacy policy contains all information about how you can access your information and how you can change it accordingly.</p>
                                
                <h4>Thank you for choosing Apex Maxi, We are looking for better service for you.</h4>
            </div>
        </main>
    );
}