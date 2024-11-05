import React from "react";

export default function ContactUs() {
    return (
        <section className="content-wrapper style-18 bg-light">
            <div className="map-wrapper">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28891.193971348785!2d75.8546432!3d25.1559936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1719221707984!5m2!1sen!2sin"
                    width="600" height="450" style={{border: 0}} allowFullScreen loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>

                <div className="container">
                    <div
                        className="content-bx style-5 alert alert-dismissible fade show m-b60 position-absolute bottom-0"
                        role="alert">
                        <div className="content-logo">
                            <img src="/images/logo.svg" alt=""/>
                        </div>
                        <div className="content-text m-b20">
                            <h6 className="m-b5">Office Address: </h6>
                            <p className="m-b0">234 Oak Drive, Villagetown, USA</p>
                        </div>
                        <div className="content-text">
                            <h6 className="m-b5">Working Hours: </h6>
                            <p className="m-b0">Mon-Thu: 8:00am-5:00pm <br/> Fri: 8:00am-1:00pm</p>
                        </div>
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.5 7.5L7.5 22.5" stroke="#AFAAA4" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7.5 7.5L22.5 22.5" stroke="#AFAAA4" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round"/>
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
                                        <h2 className="form-title m-b20">Book Your Appointment</h2>
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
                                                           placeholder="Your Name"/>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 m-b30">
                                                <div
                                                    className="floating-underline underline-1 input-light input-icon-left">
                                                       <span className="input-group-text text-primary"><i
                                                           className="feather icon-mail"></i></span>
                                                    <input name="dzEmail" type="email" className="form-control"
                                                           placeholder="Your Email"/>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 m-b30">
                                                <div
                                                    className="floating-underline underline-1 input-light input-icon-left">
                                                       <span className="input-group-text text-primary"><i
                                                           className="feather icon-phone"></i></span>
                                                    <input name="dzPhoneNumber" type="text" className="form-control"
                                                           placeholder="Phone Number"/>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 m-b30">
                                                <div
                                                    className="floating-underline underline-1 input-light input-icon-left">
                                                       <span className="input-group-text text-primary"><i
                                                           className="feather icon-calendar"></i></span>
                                                    <input name="dzOther[dzDate]" required type="text"
                                                           className="form-control" id="datePickerOnly"
                                                           placeholder="Date"/>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 m-b30">
                                                <div
                                                    className="floating-underline underline-1 input-light input-icon-left">
                                                       <span className="input-group-text text-primary"><i
                                                           className="feather icon-clock"></i></span>
                                                    <input name="dzOther[dzTime]" required type="text"
                                                           className="form-control" id="timePickerOnly"
                                                           placeholder="Time"/>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-check2 m-b5">
                                                    <input className="form-check-input" type="checkbox" value=""
                                                           id="checkBox1"/>
                                                    <label className="form-check-label" htmlFor="checkBox1">Skin
                                                        Allergy Testing</label>
                                                </div>
                                                <div className="form-check2 m-b5">
                                                    <input className="form-check-input" type="checkbox" value=""
                                                           id="checkBox2"/>
                                                    <label className="form-check-label" htmlFor="checkBox2">Laser
                                                        Treatments</label>
                                                </div>
                                                <div className="form-check2 m-b5">
                                                    <input className="form-check-input" type="checkbox" value=""
                                                           id="checkBox3"/>
                                                    <label className="form-check-label" htmlFor="checkBox3">Hair Fall
                                                        Treatments</label>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 m-b30">
                                                <div className="form-check2 m-b5">
                                                    <input className="form-check-input" type="checkbox" value=""
                                                           id="checkBox4"/>
                                                    <label className="form-check-label" htmlFor="checkBox4">Plastic
                                                        Surgery</label>
                                                </div>
                                                <div className="form-check2 m-b5">
                                                    <input className="form-check-input" type="checkbox" value=""
                                                           id="checkBox5"/>
                                                    <label className="form-check-label" htmlFor="checkBox5">Acne Scar
                                                        Treatment</label>
                                                </div>
                                                <div className="form-check2 m-b5">
                                                    <input className="form-check-input" type="checkbox" value=""
                                                           id="checkBox6"/>
                                                    <label className="form-check-label"
                                                           htmlFor="checkBox6">Pedicure</label>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 m-t10">
                                                <button type="submit" name="submit" value="submit"
                                                        className="btn btn-lg btn-white w-100">
                                                    <i className="feather icon-calendar m-r5"></i> Book An
                                                    appointment
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