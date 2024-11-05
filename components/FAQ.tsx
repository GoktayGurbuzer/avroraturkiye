import React from "react";

export default function FAQ() {
    return (
        <section className="content-inner">
            <div className="container">
                <div className="row content-wrapper style-5 align-items-center">
                    <div className="col-xxl-7 col-lg-6 m-b30 align-self-center">
                        <div className="content-info">
                            <div className="section-head style-1 m-b30 wow fadeInUp" data-wow-delay="0.2s"
                                 data-wow-duration="0.8s">
                                <h2 className="title">Frequently Asked Questions</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable
                                    content of a page when looking at its layout.</p>
                            </div>
                            <div className="accordion dz-accordion style-3 m-b35 wow fadeInUp" data-wow-delay="0.4s"
                                 data-wow-duration="0.8s" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne" aria-expanded="true"
                                                aria-controls="collapseOne">
                                            How much do you charge for pedicure ?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show"
                                         data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>It is a long established fact that a reader will be distracted by the
                                                readable content of a page when looking at its. The point of using
                                                Lorem Ipsum is that it has a more-or-less normal distribution</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                aria-expanded="false" aria-controls="collapseTwo">
                                            What types of treatments do you offer?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse"
                                         data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>It is a long established fact that a reader will be distracted by the
                                                readable content of a page when looking at its. The point of using
                                                Lorem Ipsum is that it has a more-or-less normal distribution</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                aria-expanded="false" aria-controls="collapseThree">
                                            How do i book my appointment ?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse"
                                         data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>It is a long established fact that a reader will be distracted by the
                                                readable content of a page when looking at its. The point of using
                                                Lorem Ipsum is that it has a more-or-less normal distribution</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                                aria-expanded="false" aria-controls="collapseFour">
                                            Can i cancel my appointment
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse"
                                         data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>It is a long established fact that a reader will be distracted by the
                                                readable content of a page when looking at its. The point of using
                                                Lorem Ipsum is that it has a more-or-less normal distribution</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center m-b15 wow fadeInUp" data-wow-delay="0.6s"
                                 data-wow-duration="0.8s">
                                <div className="info-widget style-12 m-r40 shadow-sm">
                                    <div className="avatar-group">
                                        <img className="avatar rounded-circle avatar-md border-white border-2"
                                             src="/images/avatar/small/avatar1.webp" alt=""/>
                                        <img className="avatar rounded-circle avatar-md border-white border-2"
                                             src="/images/avatar/small/avatar2.webp" alt=""/>
                                        <img className="avatar rounded-circle avatar-md border-white border-2"
                                             src="/images/avatar/small/avatar3.webp" alt=""/>
                                        <img className="avatar rounded-circle avatar-md border-white border-2"
                                             src="/images/avatar/small/avatar4.webp" alt=""/>
                                    </div>
                                    <div className="clearfix">
                                        <span>Talk to over 215 doctor</span>
                                    </div>
                                </div>
                                <a href="#"
                                   className="btn btn-square btn-xl btn-white shadow-sm btn-rounded">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 17L17 7" stroke="var(--bs-primary)" stroke-width="1.5"
                                              stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M7 7H17V17" stroke="var(--bs-primary)" stroke-width="1.5"
                                              stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </a>
                            </div>
                            <div className="widget-rating3 wow fadeInUp" data-wow-delay="0.8s"
                                 data-wow-duration="0.8s">
                                <ul className="star-list">
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                </ul>
                                <span className="rating me-2">(4.8)</span>
                                <span className="text">12k+ ratings on google</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-5 col-lg-6 m-b30">
                        <div className="content-media wow fadeInUp" data-wow-delay="1.0s" data-wow-duration="0.8s">
                            <div className="dz-media">
                                <img src="/images/about/img4.webp" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}