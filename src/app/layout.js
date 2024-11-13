import "@/style/responsive.css";
import '@/style/style.css';
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";

import { Inter, Poppins } from 'next/font/google';
import Script from "next/script";

const barlowCondensed = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  styles: ['normal', 'italic'],
});

const cardImage = process.env.CAR_IMAGE;
const public_url = process.env.NEXT_PUBLIC_UR;

export async function generateMetadata({ params }) {
    const currentUrl = `${public_url}${params?.path ? `/${params.path}` : ''}`;
    return {
        title: "Affordable Sydney Taxi Service | Apex Maxi - Book Your Ride Now",
        description: "Need a cab in Sydney? Apex Maxi offers 24/7 affordable taxi services with easy online booking. Wherever you are, book your ride quickly and hassle-free.",
        keywords: "Sydney taxi service, Affordable cabs Sydney, Book a taxi Sydney, 24/7 taxi service Sydney, Sydney airport transfers, Fast taxi booking",
        robots: {
          index: true,
          follow: true,
        },
        openGraph: {
            title: "Apex Maxi",
            description: "Apex Maxi",
            url: currentUrl,
            image: cardImage,
        },
        twitter: {
            card: 'summary_large_image',
            title: "Apex Maxi",
            description: "Apex Maxi",
            image: cardImage,
        },
        canonical: currentUrl,
        author: 'Apex Maxi',
        viewport: 'width=device-width, initial-scale=1',
        charset: 'UTF-8',
    };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={barlowCondensed.className}>
        <Header />
        {children}
        <Footer />
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N32SP42M" height={0} width={0} style={{ display: "none", visibility: "hidden" }}></iframe>
        </noscript>
      </body>
    </html>
  );
}
