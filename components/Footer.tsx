'use client'
export default function Footer(){
    return(
        <footer className="site-footer style-2 footer-dark background-blend-luminosity"
                style={{backgroundImage: "url(../images/background/bg1.webp)"}}>
            <div className="footer-head">
                <div className="container">
                    <div className="fh-inner">
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-5 text-center text-md-start wow fadeInUp"
                                 data-wow-delay="0.2s" data-wow-duration="0.8s">
                                <div className="footer-logo logo-white">
                                    <a href="/"><img src="/images/avroraLogoWhite.png" alt=""/></a>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-7 text-center text-md-end wow fadeInUp"
                                 data-wow-delay="0.4s" data-wow-duration="0.8s">
                                <div className="m-b25">
                                    <a href="/" className="btn btn-lg btn-outline-white btn-hover1">
                                        İletişime Geç
                                    </a>
                                    {/*
                                    <a href="/"
                                       className="btn btn-lg btn-white text-primary btn-hover1 m-l20">
                                        Randevu Al
                                    </a>
                                    */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-6 col-sm-12 wow fadeInUp" data-wow-delay="0.6s"
                             data-wow-duration="0.8s">
                            <div className="widget widget_about me-2">
                                <h2 className="footer-title">Avrora Türkiye</h2>
                                <p>Güzellik merkezi yönetim danışmanı olarak Avrora SPA Medical Turizm İthalat İhracat Ticaret LTD. ŞTİ. adıyla güzellik ve SPA sektöründe uzmanız.</p>
                            </div>
                        </div>
                        <div className="col-xl-9 col-sm-12 wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">
                            <div className="row">
                                <div className="col-xl-3 col-md-3 col-6">
                                    <div className="widget widget_services">
                                        <h2 className="footer-title">Markalarımız</h2>
                                        <ul className="list-hover1">
                                            <li><a href="/brand/endospheres/">Endospheres</a></li>
                                            <li><a href="/brand/dermalux-led/">Dermalux Led</a></li>
                                            <li><a href="/brand/supernova-laboratories/">Supernova Laboratories</a></li>
                                            <li><a href="/brand/aenaon/">Aenon</a></li>
                                            <li><a href="/brand/coramed-italia/">Caromed Italia</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-3 col-6">
                                    <div className="widget widget_services">
                                        <h2 className="footer-title">Ürünlerimiz</h2>
                                        <ul className="list-hover1">
                                            <li><a href="/cihazlar">Cihazlar</a></li>
                                            <li><a href="/tibbi-cihazlar">Tıbbi Cihazlar</a></li>
                                            <li><a href="/kozmetik">Kozmetik Ürünler</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-3 col-6">
                                    <div className="widget widget_services">
                                        <h2 className="footer-title">Hizmetlerimiz</h2>
                                        <ul className="list-hover1">
                                            <li><a href="/">Teknik Servis</a></li>
                                            <li><a href="/">Eğitim</a></li>
                                            {/* <li><a href="/hizmet-noktalari">Hizmet Noktaları</a></li> */}
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-3 col-6">
                                    <div className="widget widget_services">
                                        <h2 className="footer-title">Hızlı Linkler</h2>
                                        <ul className="list-hover1">
                                            <li><a href="/"><span>Anasayfa</span></a></li>
                                            <li><a href="/hakkimizda"><span>Hakkımızda</span></a></li>
                                            <li><a href="/etkinlik"><span>Etkinlikler</span></a></li>
                                            <li><a href="/iletisim"><span>İletişim</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-middle">
                <div className="container">
                    <div className="fm-inner">
                        <div className="row g-3 align-items-center">
                            <div className="col-xl-3 col-md-12 col-sm-6 wow fadeInUp" data-wow-delay="0.2s"
                                 data-wow-duration="0.8s">
                                <h3 className="title">Bizimle İletişime Geçin</h3>
                                <p className="text"></p>
                            </div>
                            <div className="col-xl-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.4s"
                                 data-wow-duration="0.8s">
                                <div className="icon-bx-wraper style-1">
                                    <div className="icon-bx bg-primary">
									<span className="icon-cell">
										<i className="feather icon-phone"></i>
									</span>
                                    </div>
                                    <div className="icon-content">
                                        <h5 className="dz-title">Telefon</h5>
                                        <p><a href="tel:+902122803553" className="text-body">+90 212 280 35 53</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.6s"
                                 data-wow-duration="0.8s">
                                <div className="icon-bx-wraper style-1">
                                    <div className="icon-bx bg-primary">
									<span className="icon-cell">
										<i className="feather icon-mail"></i>
									</span>
                                    </div>
                                    <div className="icon-content">
                                        <h5 className="dz-title">E-Posta</h5>
                                        <p><a href="mailto:info@avroraturkey.com" className="text-body">info@avroraturkey.com</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.8s"
                                 data-wow-duration="0.8s">
                                <div className="icon-bx-wraper style-1">
                                    <div className="icon-bx bg-primary">
									<span className="icon-cell">
										<i className="feather icon-clock"></i>
									</span>
                                    </div>
                                    <div className="icon-content">
                                        <h5 className="dz-title">Çalışma Saatleri</h5>
                                        <p>Haftaiçi: 09:00 - 17:00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <div className="fb-inner">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 text-start">
                                <p className="copyright-text">© <span className="current-year">2024</span> <a
                                    href="https://ketcap.com" target="_blank">Ketçap Creative</a>.
                                    Tüm Hakları Saklıdır.</p>
                            </div>
                            <div className="col-lg-6 col-md-12 text-end">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}