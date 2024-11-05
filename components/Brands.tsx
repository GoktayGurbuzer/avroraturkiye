'use client'
import React, { useEffect, useState } from "react";

export default function Brands() {
    const [isClient, setIsClient] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    const handleSlideClick = (index:any) => {
        setActiveIndex(index);
    };

    const slides = [
        {
            title: "Cosmetic Dermatology",
            imageUrl: "images/services/middle/img1.webp",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            list: ["Excellent Laboratory", "World Class Infrastructure", "Health Checkups"],
            expert: { name: "Nashid Martines", field: "Cardiac Surgery", avatar: "images/avatar/middle/avatar1.webp" }
        },
        {
            title: "Dermatologic Surgery",
            imageUrl: "images/services/middle/img2.webp",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            list: ["Excellent Laboratory", "World Class Infrastructure", "Health Checkups"],
            expert: { name: "Nashid Martines", field: "Cardiac Surgery", avatar: "images/avatar/middle/avatar1.webp" }
        },
        {
            title: "Earlobe Repair",
            imageUrl: "images/services/middle/img3.webp",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            list: ["Excellent Laboratory", "World Class Infrastructure", "Health Checkups"],
            expert: { name: "Nashid Martines", field: "Cardiac Surgery", avatar: "images/avatar/middle/avatar1.webp" }
        },
        {
            title: "Earlobe Repair",
            imageUrl: "images/services/middle/img3.webp",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            list: ["Excellent Laboratory", "World Class Infrastructure", "Health Checkups"],
            expert: { name: "Nashid Martines", field: "Cardiac Surgery", avatar: "images/avatar/middle/avatar1.webp" }
        },
        {
            title: "Earlobe Repair",
            imageUrl: "images/services/middle/img3.webp",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            list: ["Excellent Laboratory", "World Class Infrastructure", "Health Checkups"],
            expert: { name: "Nashid Martines", field: "Cardiac Surgery", avatar: "images/avatar/middle/avatar1.webp" }
        },

    ];

    return (
        <section className="content-inner-2 bg-light">
            <div className="container">
                <div className="section-head style-3 m-b30 text-center">
                    <h2 className="title">Transform Your Skin with Our <br /> Advanced Dermatology Treatments</h2>
                    <p className="mw-100">Experience a transformative journey that sculpts your physique and unlocks your full potential.</p>
                </div>
                <div className="dz-flex-wrapper m-b30 swiper dz-flex-swiper">
                    <div className="swiper-wrapper">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`dz-flex-item swiper-slide ${activeIndex === index ? "active" : ""}`}
                                onClick={() => handleSlideClick(index)}
                            >
                                <div className="dz-flex-head" style={{ backgroundImage: `url(${slide.imageUrl})` }}>
                                    <a href="service-detail.html"
                                       className="btn btn-square btn-lg btn-white btn-shadow btn-rounded">
                                        <i className="feather icon-arrow-up-right"></i>
                                    </a>
                                    <h3 className="title">{slide.title}</h3>
                                </div>
                                {activeIndex === index && (
                                    <div className="dz-flex-info">
                                        <div className="dz-flex-inner">
                                            <div className="dz-media">
                                                <img src={slide.imageUrl} alt="/" />
                                                <a href="appointment.html" className="btn btn-white">
                                                    <i className="feather icon-calendar m-r5 text-primary"></i>
                                                    Book An appointment
                                                </a>
                                            </div>
                                            <div className="dz-info">
                                                <div className="dz-info-top">
                                                    <h3 className="dz-title">{slide.title}</h3>
                                                    <p className="text">{slide.description}</p>
                                                    <ul className="list-check-try fw-medium m-b30">
                                                        {slide.list.map((item, i) => (
                                                            <li key={i}>{item}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="item1">
                                                    <div className="info-widget style-14">
                                                        <div className="info-widget-profile">
                                                            <div className="widget-media">
                                                                <img src={slide.expert.avatar} alt="" />
                                                            </div>
                                                            <div className="widget-content">
                                                                <h6 className="title mb-0">{slide.expert.name}</h6>
                                                                <p className="text mb-0">{slide.expert.field}</p>
                                                            </div>
                                                        </div>
                                                        <a href="service-detail.html"
                                                           className="btn btn-lg btn-square btn-primary rounded-circle">
                                                            <i className="feather icon-arrow-up-right"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="dz-separator style-3">
                    <a href="services.html" className="btn separator-badge fw-medium">View All Services</a>
                </div>
            </div>
        </section>
    );
}
