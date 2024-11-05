export default function NotFount() {
    return (
        <main className="page-content">

            <div className="dz-bnr-inr style-1 overlay-black-middle dz-bnr-inr-md"
                 style={{ backgroundImage: 'url(/images/banner/bnr1.webp)' }}>
                <div className="container">
                    <div className="dz-bnr-inr-entry d-table-cell">
                        <h1 className="wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Aradığınız Sayfa Bulunamadı</h1>
                        <nav aria-label="breadcrumb" className="breadcrumb-row wow fadeInUp" data-wow-delay="0.4s"
                             data-wow-duration="0.8s">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/">Anasayfa</a></li>
                                <li className="breadcrumb-item">404</li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="vertical-info left">
                    <ul className="social-list wow fadeInLeft" data-wow-delay="0.4s" data-wow-duration="0.8s">
                        <li><a href="https://www.instagram.com" target="_blank">Instagram</a></li>
                        <li><a href="https://www.facebook.com" target="_blank">Facebook</a></li>
                        <li><a href="https://twitter.com" target="_blank">twitter</a></li>
                    </ul>
                </div>
                <div className="blur1"></div>
                <div className="blur2"></div>
                <div className="elip"><img src="/images/hero-banner/img2.jpg" alt=""/></div>
                <div className="item1">
                    <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M30.5 0L34.4251 26.5749L61 30.5L34.4251 34.4251L30.5 61L26.5749 34.4251L0 30.5L26.5749 26.5749L30.5 0Z"
                            fill="#F46700"/>
                    </svg>
                </div>
                <div className="item2">
                    <svg width="102" height="102" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_102_123)">
                            <path
                                d="M51 40L52.4156 49.5844L62 51L52.4156 52.4156L51 62L49.5844 52.4156L40 51L49.5844 49.5844L51 40Z"
                                fill="#F46700"/>
                        </g>
                        <defs>
                            <filter id="filter0_d_102_123" x="0" y="0" width="102" height="102"
                                    filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity={0} result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="20"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_102_123"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_102_123"
                                         result="shape"/>
                            </filter>
                        </defs>
                    </svg>
                </div>
                <div className="item3">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15 0L16.9304 13.0696L30 15L16.9304 16.9304L15 30L13.0696 16.9304L0 15L13.0696 13.0696L15 0Z"
                            fill="#F46700"/>
                    </svg>
                </div>
            </div>

            <section className="error-page style-1 content-inner-1 bg-light overflow-hidden">
                <div className="container">
                    <div className="row align-items-center g-5 justify-content-center">
                        <div className="col-lg-6 col-md-9 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                            <div className="dz-error-media">
                                <img src="/images/error.webp" alt=""/>
                                <div className="item1">
                                    <img src="/images/error2.webp" alt=""/>
                                    <svg width="234" height="220" viewBox="0 0 234 220" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M16.8986 163.335C-24.2798 77.0297 10.8709 -27.2904 157.814 7.29291C157.814 7.29291 250.039 33.9858 231.155 133.954C215.053 219.194 100.586 243.163 41.6752 194.874C26.1745 205.432 -13.9549 231.297 30.6519 184.225C25.2719 178.082 20.6185 171.131 16.8986 163.335Z"
                                            fill="var(--bs-primary)"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                            <div className="inner-content text-center">
                                <h2 className="dz-error data-name-primary" data-name="404">404</h2>
                                <p className="text">Üzgünüz. Ancak aradığınız sayfa bulunamıyor.</p>
                                <a href="/" className="btn btn-lg btn-primary btn-hover1">Anasayfaya Dön</a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </main>
    )
}