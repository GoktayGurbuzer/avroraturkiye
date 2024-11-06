import React from "react";

export default function WhyUs() {
    return (
        <section className="content-inner">
            <div className="container">
                <div className="row content-wrapper style-14 align-items-center">
                    <div className="col-xl-6 col-lg-5 m-b30">
                        <div className="content-info">
                            <div className="section-head style-1 m-b30 wow fadeInUp" data-wow-delay="0.2s"
                                 data-wow-duration="0.8s">
                                <h2 className="title">Neden Avrora Medikal?</h2>
                                <p>Türkiye'nin önde gelen medikal ve estetik cihaz tedarikçisi olarak, Avrora Medikal size en kaliteli ürünleri ve güvenilir hizmeti sunuyor.</p>
                            </div>
                            <ul className="list-check-circle-small text-secondary grid-2 m-b35 wow fadeInUp"
                                data-wow-delay="0.4s" data-wow-duration="0.8s">
                                <li>Geniş Ürün Yelpazesi</li>
                                <li>Yüksek Kalite Standartları</li>
                                <li>Uzman Teknik Destek</li>
                                <li>Yenilikçi Çözümler</li>
                                <li>Müşteri Odaklı Hizmet Anlayışı</li>
                                <li>Güvenilir Distribütörlük Ağı</li>
                                <li>Profesyonel Eğitim Programları</li>
                                <li>Hızlı ve Etkili Servis Desteği</li>
                            </ul>
                            <div className="d-flex flex-wrap align-items-center wow fadeInUp" data-wow-delay="0.6s"
                                 data-wow-duration="0.8s">
                                <a href="/hizmet-noktalari"
                                   className="btn btn-lg btn-icon btn-secondary btn-shadow m-r40 mb-3 mb-xl-0">
                                    Hizmet Noktalarımız
                                    <span className="right-icon"><i className="feather icon-arrow-right"></i></span>
                                </a>
                                <div className="info-widget style-5">
                                    <div className="widget-media text-primary">
                                        <i className="feather icon-phone-call"></i>
                                    </div>
                                    <div className="widget-content">
                                        <h6 className="title">Bizi Arayın</h6>
                                        <a href="tel:+902122803553" className="text-secondary">+90 212 280 35 53</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7 m-b30">
                        <div className="content-media">
                            <div className="row justify-content-center">
                                <div className="col-sm-6" data-bottom-top="transform: translateY(-50px)"
                                     data-top-bottom="transform: translateY(50px)">
                                    <div className="img1">
                                        <img src="/images/about/neden-avrora-medikal-1.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="col-sm-6" data-bottom-top="transform: translateY(50px)"
                                     data-top-bottom="transform: translateY(-50px)">
                                    <div className="widget-rating2">
                                        <div className="clearfix">
                                            <div className="d-flex">
                                                <ul className="star-list">
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="img2">
                                        <img src="/images/about/neden-avrora-medikal-2.jpg" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}