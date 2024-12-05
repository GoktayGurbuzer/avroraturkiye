'use client'
export default function Header() {
    return(
        <header className="site-header header style-2 header-toggle">

            <div className="sticky-header main-bar-wraper">
                <div className="main-bar clearfix">
                    <div className="container-fluid clearfix inner-bar">

                        <div className="extra-nav-left">
                            <button type="button" className="toggler1" data-bs-toggle="offcanvas"
                                    data-bs-target="#headerSidebar" aria-controls="offcanvasLeft">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>

                        <div className="logo-header logo-dark">
                            <a href="/"><img src="/images/avroraLogoHorizon.png" alt="logo"/></a>
                        </div>

                        <button className="w3menu-toggler navicon" type="button" data-target="#W3Menu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>

                        <div className="menu-close fade-overlay"></div>
                        <div className="header-nav w3menu w3menu-start mo-left" id="W3Menu">
                            <div className="logo-header logo-dark">
                                <a href="/"><img src="/images/avroraLogoHorizon.png" alt=""/></a>
                            </div>

                            <ul className="nav navbar-nav">
                                <li className="sub-menu-down">
                                    <a href="/"><span>Anasayfa</span></a>
                                </li>
                                <li><a href="/hakkimizda">Hakkımızda</a></li>
                                <li className="sub-menu-down">
                                    <a onClick={(e) => e.preventDefault()}><span>Ürünlerimiz</span> <i
                                        className="fas fa-chevron-down tabindex"></i></a>
                                    <ul className="sub-menu">
                                        <li><a href="/cihazlar">Cihazlar</a></li>
                                        <li><a href="/tibbi-cihazlar">Tıbbi Cihazlar</a></li>
                                        <li><a href="/kozmetik">Kozmetik Ürünler</a></li>
                                    </ul>
                                </li>
                                <li className="sub-menu-down">
                                    <a onClick={(e) => e.preventDefault()}><span>Markalarımız</span> <i
                                        className="fas fa-chevron-down tabindex"></i></a>
                                    <ul className="sub-menu">
                                        <li><a href="/brand/endospheres/">Endospheres</a></li>
                                        <li><a href="/brand/dermalux-led/">Dermalux Led</a></li>
                                        <li><a href="/brand/supernova-laboratories/">Supernova Laboratories</a></li>
                                        <li><a href="/brand/aenaon/">Aenon</a></li>
                                        <li><a href="/brand/coramed-italia/">Caromed Italia</a></li>
                                    </ul>
                                </li>
                                <li className="sub-menu-down">
                                    <a onClick={(e) => e.preventDefault()}><span>Hizmetlerimiz</span> <i
                                        className="fas fa-chevron-down tabindex"></i></a>
                                    <ul className="sub-menu">
                                        <li><a href="/l">Teknik Servis</a></li>
                                        <li><a href="/">Eğitim</a></li>
                                        <li><a href="/">Hizmet Noktaları</a></li>
                                    </ul>
                                </li>
                                <li><a href="/">Etkinlik</a></li>

                                <li><a href="/">İletişim</a></li>
                            </ul>

                            <div className="dz-social-icon">
                                <ul>
                                    <li>
                                        <a href="https://www.linkedin.com" target="_blank">
                                            <i className="fa-brands fa-linkedin"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com" target="_blank">
                                            <i className="fa-brands fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com" target="_blank">
                                            <i className="fa-brands fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com" target="_blank">
                                            <i className="fa-brands fa-x-twitter"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="extra-nav">
                            <div className="extra-cell">
                                <ul className="header-right">
                                    <li className="nav-item item-call">
                                        <div className="info-widget style-5">
                                            <div className="widget-media">
                                                <i className="feather icon-phone-call"></i>
                                            </div>
                                            <div className="widget-content">
                                                <h6 className="title text-primary">İletişime Geç</h6>
                                                <a href="tel:+902122803553" className="text-secondary">+90 212 280 35 53</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item item-btn">
                                        <a href="/hizmet-noktalari" className="btn btn-primary btn-hover1">
                                            Merkez Bul
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="offcanvas dz-offcanvas offcanvas offcanvas-end" tabIndex={-1} id="headerSidebar">
                <button type="button" className="btn-close m-t10 m-l10" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                <div className="offcanvas-body">
                    <div className="widget">
                        <div className="sidebar-header m-b20">
                            <a href="/"><img src="/images/avroraLogo.png" alt="/"/></a>
                        </div>
                        <p>Güzellik merkezi yönetim danışmanı olarak Avrora SPA Medical Turizm İthalat İhracat Ticaret LTD. ŞTİ. adıyla güzellik ve SPA sektöründe uzmanız.</p>
                    </div>

                    <div className="widget">
                        <div className="widget-title">
                            <h4 className="title">Bize Ulaşın</h4>
                        </div>
                        <ul className="list-check">
                            <li>Akatlar Mah. Cumhuriyet Cad. No: 4 Beşiktaş/İstanbul</li>
                            <li><a href="mailto:info@avroraturkey.com" className="text-body">info@avroraturkey.com</a></li>
                            <li><a href="tel:+902122803553" className="text-body">+90 212 280 35 53</a></li>
                        </ul>
                    </div>

                    <div className="widget">
                        <div className="widget-title">
                            <h4 className="title">Bizi Takip Edin</h4>
                        </div>
                        <div className="dz-social-icon style-1">
                            <ul>
                                <li>
                                    <a href="https://www.linkedin.com" target="_blank">
                                        <i className="fa-brands fa-linkedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com" target="_blank">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com" target="_blank">
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com" target="_blank">
                                        <i className="fa-brands fa-x-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com" target="_blank">
                                        <i className="fa-brands fa-youtube"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}