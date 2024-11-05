export default function Banner() {
    return (
        <div className="hero-banner style-3">
            <div className="container">
                <div className="inner-wrapper">
                    <div className="row align-items-center h-100">
                        <div className="col-md-6">
                            <div className="hero-content">
                                <h1 className="title wow fadeInUp" data-wow-delay="0.2s"
                                    data-wow-duration="0.8s">Skincare is Like A Workout For Your Skin</h1>
                                <div className="content-bx style-2 secondary m-b40 wow fadeInUp"
                                     data-wow-delay="0.4s" data-wow-duration="0.8s">
                                    Experienced staff is dedicated to improving our patients’ dental health and
                                    enhancing
                                </div>
                                <div className="d-flex">
                                    <a href="#"
                                       className="btn btn-lg btn-icon btn-primary wow fadeInUp" data-wow-delay="0.6s"
                                       data-wow-duration="0.8s">
                                        Appointment
                                        <span className="right-icon"><i
                                            className="feather icon-arrow-right"></i></span>
                                    </a>
                                    <div className="avatar-group m-l50 wow fadeInUp" data-wow-delay="0.8s"
                                         data-wow-duration="0.8s">
                                        <img className="avatar avatar-lg rounded-circle"
                                             src="/images/avatar/small/avatar1.webp" alt=""/>
                                        <img className="avatar avatar-lg rounded-circle"
                                             src="/images/avatar/small/avatar2.webp" alt=""/>
                                        <img className="avatar avatar-lg rounded-circle"
                                             src="/images/avatar/small/avatar3.webp" alt=""/>
                                        <img className="avatar avatar-lg rounded-circle"
                                             src="/images/avatar/small/avatar4.webp" alt=""/>
                                        <a href="#"
                                           className="avatar btn btn-square btn-lg btn-white btn-shadow btn-rounded">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7 17L17 7" stroke="var(--bs-secondary)" strokeWidth="1.5"
                                                      strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M7 7H17V17" stroke="var(--bs-secondary)" strokeWidth="1.5"
                                                      strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 align-self-end wow fadeInRight" data-wow-delay="0.8s"
                             data-wow-duration="0.8s">
                            <div className="hero-thumbnail" data-bottom-top="transform: translateY(-50px)"
                                 data-top-bottom="transform: translateY(50px)">
                                <img className="thumbnail" src="/images/hero-banner/img1.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="item1">
                        <div className="widget-rating1">
                            <ul className="star-list">
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                            </ul>
                            <span className="rating text-primary m-r5">(4.8)</span>
                            <span className="text">12k+ ratings on google</span>
                        </div>
                    </div>
                    <div className="item2 move-3" data-bottom-top="transform: translateY(-50px)"
                         data-top-bottom="transform: translateY(50px)">
                        <div className="dz-media2">
                            <img src="/images/hero-banner/img2.jpg" alt=""/>
                        </div>
                    </div>
                    <div className="item3 move-3" data-bottom-top="transform: translateY(-50px)"
                         data-top-bottom="transform: translateY(50px)">
                        <img src="/images/hero-banner/img3.jpg" alt=""/>
                    </div>
                    <div className="item4" data-bottom-top="transform: translateY(-50px)"
                         data-top-bottom="transform: translateY(50px)">
                        <img src="/images/hero-banner/img4.jpg" alt=""/>
                    </div>

                    <svg className="shape1" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M30.5 0L34.4251 26.5749L61 30.5L34.4251 34.4251L30.5 61L26.5749 34.4251L0 30.5L26.5749 26.5749L30.5 0Z"
                            fill="var(--bs-primary)"/>
                    </svg>
                    <svg className="shape2" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M30.5 0L34.4251 26.5749L61 30.5L34.4251 34.4251L30.5 61L26.5749 34.4251L0 30.5L26.5749 26.5749L30.5 0Z"
                            fill="var(--bs-primary)"/>
                    </svg>
                </div>
            </div>
            <div className="vertical-info left">
                <ul className="social-list">
                    <li><a href="https://instagram.com">Instagram</a></li>
                    <li><a href="https://facebook.com">Facebook</a></li>
                </ul>
                <a href="/iletisim" className="btn btn-white btn-sm px-2 py-3 btn-shadow rounded">LET’S
                    TALK</a>
            </div>
            <div className="banner-shape4"></div>
            <div className="banner-shape5"></div>
            <div className="banner-shape6"></div>
        </div>
    );
};