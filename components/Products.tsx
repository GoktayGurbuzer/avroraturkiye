import React from "react";

export default function Products() {
    return (
        <section className="content-inner bg-light">
            <div className="container">
                <div className="section-head style-3 m-b30 text-center wow fadeInUp" data-wow-delay="0.2s"
                     data-wow-duration="0.8s">
                    <h2 className="title">Our Featured <br/> Beauty Treatments</h2>
                    <p>Experience a transformation! We offer the perfect blend of pampering treatments and powerful
                        derma products to address your specific needs and unlock your most radiant skin.</p>
                </div>
                <div className="site-filters clearfix style-1 wow fadeInUp" data-wow-delay="0.4s"
                     data-wow-duration="0.8s">
                    <ul className="filters justify-content-center" data-bs-toggle="buttons">
                        <li className="active">
                            <input type="radio"/>
                            <a className="btn" href="javascript:void(0);">Skin & Face</a>
                        </li>
                        <li data-filter=".data-oils">
                            <input type="radio"/>
                            <a className="btn" href="javascript:void(0);">Massage Oils</a>
                        </li>
                        <li data-filter=".data-cosmetics">
                            <input type="radio"/>
                            <a className="btn" href="javascript:void(0);">Cosmetics</a>
                        </li>
                        <li data-filter=".data-offers">
                            <input type="radio"/>
                            <a className="btn" href="javascript:void(0);">Daily Offers</a>
                        </li>
                    </ul>
                </div>
                <div className="clearfix">
                    <ul id="masonry" className="row">
                        <li className="card-container col-xl-3 col-lg-4 col-sm-6 m-b30 data-oils data-offers wow fadeInUp"
                            data-wow-delay="0.2s" data-wow-duration="0.8s">
                            <div className="shop-card">
                                <div className="dz-media">
                                    <img src="/images/shop/img1.webp" alt="image"/>
                                    <div className="shop-meta">
                                        <a href="javascript:void(0);" className="btn quick-view"
                                           data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i className="fa-solid fa-eye d-md-none d-block"></i>
                                            <span className="d-md-block d-none">Quick View</span>
                                        </a>
                                        <div className="btn meta-icon dz-wishicon">
                                            <i className="icon feather icon-heart dz-heart"></i>
                                            <i className="icon feather icon-heart-on dz-heart-fill"></i>
                                        </div>
                                        <div className="btn meta-icon dz-carticon">
                                            <i className="feather icon-shopping-cart"></i>
                                        </div>
                                    </div>
                                    <div className="product-tag">
                                        <span className="badge ">Get 20% Off</span>
                                    </div>
                                </div>
                                <div className="dz-content">
                                    <div className="inner-content">
                                        <h3 className="title"><a href="#">Night beauty</a></h3>
                                        <span className="price">$89.00 <del>$119.00</del></span>
                                    </div>
                                    <a href="#"
                                       className="btn btn-square btn-lg btn-white btn-rounded shop-share-btn">
                                        <i className="feather icon-arrow-up-right"></i>
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li className="card-container col-xl-3 col-lg-4 col-sm-6 m-b30 data-oils data-offers wow fadeInUp"
                            data-wow-delay="0.4s" data-wow-duration="0.8s">
                            <div className="shop-card">
                                <div className="dz-media">
                                    <img src="/images/shop/img2.webp" alt="image"/>
                                    <div className="shop-meta">
                                        <a href="javascript:void(0);" className="btn quick-view"
                                           data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i className="fa-solid fa-eye d-md-none d-block"></i>
                                            <span className="d-md-block d-none">Quick View</span>
                                        </a>
                                        <div className="btn meta-icon dz-wishicon">
                                            <i className="icon feather icon-heart dz-heart"></i>
                                            <i className="icon feather icon-heart-on dz-heart-fill"></i>
                                        </div>
                                        <div className="btn meta-icon dz-carticon">
                                            <i className="feather icon-shopping-cart"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="dz-content">
                                    <div className="inner-content">
                                        <h3 className="title"><a href="#">Herbal beauty</a></h3>
                                        <span className="price">$89.00 <del>$119.00</del></span>
                                    </div>
                                    <a href="#"
                                       className="btn btn-square btn-lg btn-white btn-rounded shop-share-btn">
                                        <i className="feather icon-arrow-up-right"></i>
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li className="card-container col-xl-3 col-lg-4 col-sm-6 m-b30 data-cosmetics wow fadeInUp"
                            data-wow-delay="0.6s" data-wow-duration="0.8s">
                            <div className="shop-card">
                                <div className="dz-media">
                                    <img src="/images/shop/img3.webp" alt="image"/>
                                    <div className="shop-meta">
                                        <a href="javascript:void(0);" className="btn quick-view"
                                           data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i className="fa-solid fa-eye d-md-none d-block"></i>
                                            <span className="d-md-block d-none">Quick View</span>
                                        </a>
                                        <div className="btn meta-icon dz-wishicon">
                                            <i className="icon feather icon-heart dz-heart"></i>
                                            <i className="icon feather icon-heart-on dz-heart-fill"></i>
                                        </div>
                                        <div className="btn meta-icon dz-carticon">
                                            <i className="feather icon-shopping-cart"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="dz-content">
                                    <div className="inner-content">
                                        <h3 className="title"><a href="#">Sun beauty</a></h3>
                                        <span className="price">$89.00 <del>$119.00</del></span>
                                    </div>
                                    <a href="#"
                                       className="btn btn-square btn-lg btn-white btn-rounded shop-share-btn">
                                        <i className="feather icon-arrow-up-right"></i>
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li className="card-container col-xl-3 col-lg-4 col-sm-6 m-b30 data-cosmetics wow fadeInUp"
                            data-wow-delay="0.8s" data-wow-duration="0.8s">
                            <div className="shop-card">
                                <div className="dz-media">
                                    <img src="/images/shop/img4.webp" alt="image"/>
                                    <div className="shop-meta">
                                        <a href="javascript:void(0);" className="btn quick-view"
                                           data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i className="fa-solid fa-eye d-md-none d-block"></i>
                                            <span className="d-md-block d-none">Quick View</span>
                                        </a>
                                        <div className="btn meta-icon dz-wishicon">
                                            <i className="icon feather icon-heart dz-heart"></i>
                                            <i className="icon feather icon-heart-on dz-heart-fill"></i>
                                        </div>
                                        <div className="btn meta-icon dz-carticon">
                                            <i className="feather icon-shopping-cart"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="dz-content">
                                    <div className="inner-content">
                                        <h3 className="title"><a href="#">Green beauty</a></h3>
                                        <span className="price">$89.00 <del>$119.00</del></span>
                                    </div>
                                    <a href="#"
                                       className="btn btn-square btn-lg btn-white btn-rounded shop-share-btn">
                                        <i className="feather icon-arrow-up-right"></i>
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}