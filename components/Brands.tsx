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
            title: "Endospheres",
            imageUrl: "images/services/middle/endospheres.jpg",
            description: "Endospheres, cilt sağlığını ve vücut bakımını birleştiren yenilikçi teknolojiler sunar. Profesyonel güzellik ve sağlık merkezlerinde tercih edilen çözümlerimiz, etkili sonuçları garanti eder.",
            list: ["Mükemmel Laboratuvar", "Dünya Sınıfı Altyapı", "Sağlık Kontrolleri"],
            expert: { name: "Endospheres", link: "/brand/endospheres/" }
        },
        {
            title: "Dermalux Led",
            imageUrl: "images/services/middle/dermalux-led.jpg",
            description: "Klinik olarak kanıtlanmış tedavilerle cilt sağlığını ve canlılığını artıran gelişmiş LED ışık terapileri sunuyoruz.",
            list: ["Klinik Testlerden Geçmiş", "Yüksek Etkinlik Oranı", "Non-İnvaziv Tedaviler"],
            expert: { name: "Dermalux Led", link: "/brand/dermalux-led" }
        },
        {
            title: "Supernova Laboratuvarları",
            imageUrl: "images/services/middle/supernova-laboratories.jpg",
            description: "Supernova Laboratuvarları, cilt bakım ihtiyaçlarınıza yönelik en ileri tıbbi ve estetik teknolojileri sunmaya kendini adamıştır.",
            list: ["İleri Araştırmalar", "Kalite Güvencesi", "Hasta Odaklı Bakım"],
            expert: { name: "Supernova Laboratuvarları", link: "/brand/supernova-laboratories" }
        },
        {
            title: "AENAON",
            imageUrl: "images/services/middle/coramed-italia.jpg",
            description: "AENAON, etkili ve hassas bakım için geliştirilmiş en üst düzey kozmetik ve cilt bakım ürünleri sunar.",
            list: ["İleri Formülasyonlar", "Dermatolog Onaylı", "Sürdürülebilir İçerikler"],
            expert: { name: "AENAON", link: "/brand/aenaon" }
        },
        {
            title: "Caromed Italia",
            imageUrl: "images/services/middle/aenaon.jpg",
            description: "CoraMed Italia, İtalyan mükemmeliyetini cilt bakımına taşır, gelenek ve inovasyonu en iyi cilt sağlığı için birleştirir.",
            list: ["İtalyan El İşçiliği", "Yüksek Kaliteli İçerikler", "Yenilikçi Formüller"],
            expert: { name: "CoraMed Italia", link: "/brand/coramed-italia" }
        },

    ];

    return (
        <section className="content-inner-2 bg-light">
            <div className="container">
                <div className="section-head style-3 m-b30 text-center">
                    <h2 className="title">Distribütörü Olduğumuz Markalar</h2>
                    <p className="mw-100">Avrora Medikal olarak, dünyaca ünlü ve kalite odaklı markaların Türkiye distribütörü olmaktan gurur duyuyoruz. Müşterilerimize en ileri teknolojiyi ve güvenilir sağlık çözümlerini sunarak güzellik ve sağlık alanındaki beklentilerini karşılıyoruz. Yenilikçi ve etkili çözümler sunan bu seçkin markalarımızla tanışın.</p>
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
                                    <a href={slide.expert.link}
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
                                                            <div className="widget-content">
                                                                <h6 className="title mb-0">{slide.expert.name}</h6>
                                                            </div>
                                                        </div>
                                                        <a href={slide.expert.link}
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

                </div>
            </div>
        </section>
    );
}
