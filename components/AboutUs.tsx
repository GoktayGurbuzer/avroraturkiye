export default function AboutUs() {
    return (
        <section className="content-inner bg-light">
            <div className="container">
                <div className="row content-wrapper style-13">
                    <div className="col-xl-5 col-lg-6 m-b15">
                        <div className="content-media" data-bottom-top="transform: translateY(-30px)"
                             data-top-bottom="transform: translateY(30px)">
                            <div className="dz-media">
                                <img src="/images/about/img1.webp" alt=""/>
                            </div>
                            <div className="item4">
                                <svg viewBox="0 0 217 620" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M2 2H215V618H170C133.427 618 99.5833 606.313 72 586.471V588.927C99.6969 608.5 133.505 620 170 620H215H217V618V2V0H215H2H0V2V450C0 487.378 12.0629 521.938 32.508 550H34.9905C14.2616 522.06 2 487.462 2 450V2Z"
                                          fill="#0A3366"/>
                                    <path
                                        d="M57.8488 560.9L53.5269 569.179L56.9986 577.849L48.7195 573.527L40.0494 576.999L44.3713 568.72L40.8996 560.05L49.1787 564.371L57.8488 560.9Z"
                                        fill="#0A3366"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-6 m-b30 position-relative">
                        <div className="info-content">
                            <div className="section-head style-1 m-b30 wow fadeInUp" data-wow-delay="0.2s"
                                 data-wow-duration="0.8s">
                                <h2 className="title m-b15">Beyond Skin Deep Personalized Care for Your Unique Beauty
                                    Journey description At ClinicMaster</h2>
                                <p>We believe healthy, radiant skin is achievable for everyone. We combine advanced
                                    dermatology with innovative cosmetic solutions to address your unique skin concerns.
                                    Our team of board-certified dermatologists and experienced aestheticians create
                                    personalized treatment plans to achieve your desired results, whether it's treating
                                    acne, restoring sun damage, or enhancing your natural beauty. Explore our website to
                                    learn more about our services and discover the confidence that comes with feeling
                                    your best in your own skin.</p>
                            </div>
                            <div className="d-flex align-items-center m-b15 wow fadeInUp" data-wow-delay="0.4s"
                                 data-wow-duration="0.8s">
                                <div className="info-widget style-12 m-r20 bg-transparent border border-secondary">
                                    <div className="avatar-group">
                                        <img className="avatar rounded-circle avatar-md border border-white border-2"
                                             src="/images/avatar/small/avatar1.webp" alt=""/>
                                        <img className="avatar rounded-circle avatar-md border border-white border-2"
                                             src="/images/avatar/small/avatar2.webp" alt=""/>
                                        <img className="avatar rounded-circle avatar-md border border-white border-2"
                                             src="/images/avatar/small/avatar3.webp" alt=""/>
                                        <img className="avatar rounded-circle avatar-md border border-white border-2"
                                             src="/images/avatar/small/avatar4.webp" alt=""/>
                                    </div>
                                    <div className="clearfix">
                                        <span>Talk to over 215 doctor</span>
                                    </div>
                                </div>
                                <a href="about-us.html" className="btn btn-square btn-xl btn-white btn-rounded">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 17L17 7" stroke="var(--bs-primary)" strokeWidth="1.5"
                                              strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M7 7H17V17" stroke="var(--bs-primary)" strokeWidth="1.5"
                                              strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </a>
                            </div>
                            <div className="widget-rating3 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
                                <ul className="star-list">
                                    <li><i className="fa fa-star text-orange"></i></li>
                                    <li><i className="fa fa-star text-orange"></i></li>
                                    <li><i className="fa fa-star text-orange"></i></li>
                                    <li><i className="fa fa-star text-orange"></i></li>
                                    <li><i className="fa fa-star text-orange"></i></li>
                                </ul>
                                <span className="rating">(4.8)</span>
                                <span className="text">12k+ ratings on google</span>
                            </div>
                            <div className="bottom-media" data-bottom-top="transform: translateY(-30px)"
                                 data-top-bottom="transform: translateY(30px)">
                                <img src="/images/about/img2.webp" className="item1" alt=""/>
                                <img src="/images/about/img3.webp" className="item2" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}