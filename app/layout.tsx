import React from "react";
import {Metadata} from "next";
import '@/public/vendor/tempus-dominus/css/tempus-dominus.min.css'
import '@/public/vendor/swiper/swiper-bundle.min.css'
import '@/public/vendor/twentytwenty/css/twentytwenty.css'
import '@/public/vendor/magnific-popup/magnific-popup.min.css'
import '@/public/css/style.css'
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
    title: 'Avrora Türkiye',
    description: 'Türkiye\'nin Kozmetik Cihazları Tedarikçisi',
    generator: 'Ketçap Ajans',
    applicationName: 'Avrora',
    referrer: 'origin-when-cross-origin',
    keywords: ['avrora'],
    authors: [{ name: 'Göktay Gürbüzer' }],
    creator: 'Ketçap Ajans',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    alternates: {
        canonical: '/',
    },
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="tr-TR">
        <head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link
                href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                rel="stylesheet"/>
        </head>
        <body id="bg" suppressHydrationWarning={true}>
        <div className="page-wraper">
            <div className="dz-preloader-3" id="dzPreloader">
                <div className="preloader-inner"></div>
            </div>
            <Header/>
            {children}
            <Footer/>
            <button className="scroltop" type="button"><i className="fas fa-arrow-up"></i></button>
        </div>
        <script src="/js/global.min.js"></script>
        <script src="/vendor/popper/popper.js"></script>
        <script src="/vendor/tempus-dominus/js/tempus-dominus.min.js"></script>
        <script src="/vendor/swiper/swiper-bundle.min.js"></script>
        <script src="/vendor/imagesloaded/imagesloaded.js"></script>
        <script src="/vendor/masonry/isotope.pkgd.min.js"></script>
        <script src="/vendor/twentytwenty/js/jquery.event.move.js"></script>
        <script src="/vendor/twentytwenty/js/jquery.twentytwenty.js"></script>
        <script src="/vendor/wnumb/wNumb.js"></script>
        <script src="/vendor/countdown/jquery.countdown.js"></script>
        <script src="/js/dz.carousel.js"></script>
        <script src="/js/dz.ajax.js"></script>
        <script src="/js/custom.js"></script>

        </body>
        </html>
    );
}
