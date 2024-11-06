import React from "react";

export default function ContactUs() {
    return (
        <section className="content-wrapper style-18">
            <div className="map-wrapper">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.161425086397!2d29.024121299999997!3d41.0873195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7deb6d27801%3A0xb34692c60e00fbd7!2zQVZST1JBIFNQQSBWRSBNRUTEsEtBTCBUVVLEsFpNIMSwVEhBTEFUIMSwSFJBQ0FUIFTEsENBUkVUIExURC4gxZ5UxLAu!5e0!3m2!1str!2str!4v1730877725087!5m2!1str!2str"
                    width="600" height="450" style={{border: 0}} allowFullScreen loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>

                <div className="container">
                    <div
                        className="content-bx style-5 alert alert-dismissible fade show m-b60 position-absolute bottom-0"
                        role="alert">
                        <div className="content-logo">
                            <img src="/images/avroraLogo.png" alt=""/>
                        </div>
                        <div className="content-text m-b20">
                            <h6 className="m-b5">Adres: </h6>
                            <p className="m-b0">Akatlar Mah. Cumhuriyet Cad. No: 4 Beşiktaş/İstanbul</p>
                        </div>
                        <div className="content-text m-b20">
                            <h6 className="m-b5">Çalışma Saatleri </h6>
                            <p className="m-b0">Haftaiçi: 09:00 - 18:00</p>
                        </div>
                        <div className="content-text">
                            <h6 className="m-b5">Telefon </h6>
                            <a href="tel:+902122803553" className="text-body">+90 212 280 35 53</a>
                        </div>
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.5 7.5L7.5 22.5" stroke="#AFAAA4" strokeWidth="1.5"
                                      strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M7.5 7.5L22.5 22.5" stroke="#AFAAA4" strokeWidth="1.5"
                                      strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-xxl-5 col-xl-6 col-lg-7 col-md-12 wow fadeInUp" data-wow-delay="0.2s"
                         data-wow-duration="0.8s">
                        <div className="item1">
                            <div className="form-wrapper style-2 bg-secondary">
                                <div className="form-body">
                                    <div className="title-head">
                                        <h2 className="form-title m-b20">Nasıl Yardımcı Olabiliriz?</h2>
                                    </div>
                                    <form action="" className="dzForm"
                                          method="POST">
                                        <input type="hidden" className="form-control" name="dzToDo"
                                               value="Appointment"/>
                                        <input type="hidden" className="form-control" name="reCaptchaEnable"
                                               value="0"/>
                                        <div className="dzFormMsg"></div>
                                        <div className="row">
                                            <div className="col-sm-12 m-b30">
                                                <div
                                                    className="floating-underline underline-1 input-light input-icon-left">
                                                       <span className="input-group-text text-primary"><i
                                                           className="feather icon-user"></i></span>
                                                    <input name="dzName" type="text" className="form-control"
                                                           placeholder="Adınız, Soyadınız"/>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 m-b30">
                                                <div
                                                    className="floating-underline underline-1 input-light input-icon-left">
                                                       <span className="input-group-text text-primary"><i
                                                           className="feather icon-mail"></i></span>
                                                    <input name="dzEmail" type="email" className="form-control"
                                                           placeholder="E-Posta Adresiniz"/>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 m-b30">
                                                <div
                                                    className="floating-underline underline-1 input-light input-icon-left">
                                                       <span className="input-group-text text-primary"><i
                                                           className="feather icon-phone"></i></span>
                                                    <input name="dzPhoneNumber" type="text" className="form-control"
                                                           placeholder="Telefon Numaranız"/>
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="form-check2 m-b5">
                                                    <input className="form-check-input" type="checkbox" value=""
                                                           id="checkBox1"/>
                                                    <label className="form-check-label" htmlFor="checkBox1">Ürünler Hakkında Bilgi İstiyorum</label>
                                                </div>
                                                <div className="form-check2 m-b5">
                                                    <input className="form-check-input" type="checkbox" value=""
                                                           id="checkBox2"/>
                                                    <label className="form-check-label" htmlFor="checkBox2">Hizmetler Hakkında Bilgi İstiyorum</label>
                                                </div>
                                                <div className="form-check2 m-b5">
                                                    <input className="form-check-input" type="checkbox" value=""
                                                           id="checkBox3"/>
                                                    <label className="form-check-label" htmlFor="checkBox3">Ürünlerimizi Satmak İstiyorum</label>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 m-b30">
                                                <div className="form-check2 m-b5">
                                                    <input className="form-check-input" type="checkbox" value=""
                                                           id="checkBox4"/>
                                                    <label className="form-check-label" htmlFor="checkBox4">Hizmetleriniz Satmak İstiyorum</label>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 m-t10">
                                                <button type="submit" name="submit" value="submit"
                                                        className="btn btn-lg btn-white w-100">
                                                    <i className="feather icon-calendar m-r5"></i>Gönder
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}