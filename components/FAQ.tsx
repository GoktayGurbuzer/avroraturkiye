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
                                <h2 className="title">Sıkça Sorulan Sorular</h2>
                                <p>Size en iyi hizmeti sunmak için, müşterilerimizin en çok merak ettiği konuları burada yanıtlıyoruz. Aşağıda ihtiyaç duyabileceğiniz bilgilere ulaşabilirsiniz.</p>
                            </div>
                            <div className="accordion dz-accordion style-3 m-b35 wow fadeInUp" data-wow-delay="0.4s"
                                 data-wow-duration="0.8s" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne" aria-expanded="true"
                                                aria-controls="collapseOne">
                                            Hangi cihaz ve ürünleri satıyorsunuz?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show"
                                         data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Avrora Medikal olarak estetik, medikal ve kozmetik alanlarında yüksek kaliteli ve yenilikçi ürünlerin satışını yapıyoruz. Ürünlerimiz arasında cilt bakımı cihazları, lazer tedavi cihazları ve medikal estetik ekipmanları bulunuyor.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                aria-expanded="false" aria-controls="collapseTwo">
                                            Cihaz ve ürünlerin garanti süresi ne kadar?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse"
                                         data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Tüm cihazlarımız ve ürünlerimiz en az 2 yıl garanti kapsamındadır. Detaylı bilgi için ürün satın alım sırasında sizlere sunduğumuz garanti belgelerine göz atabilirsiniz.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                aria-expanded="false" aria-controls="collapseThree">
                                            Teknik servis hizmeti sunuyor musunuz?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse"
                                         data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Evet, tüm cihazlarımız için teknik servis hizmeti sunmaktayız. Eğitimli teknik ekibimizle her türlü bakım, onarım ve yedek parça desteğini sağlamaktayız. Teknik servis hizmetimiz hakkında detaylı bilgi almak için bizimle iletişime geçebilirsiniz.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                                aria-expanded="false" aria-controls="collapseFour">
                                            Eğitim kursları sağlıyor musunuz?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse"
                                         data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Evet, müşterilerimize özel cihaz kullanım eğitimleri ve estetik alanında kurslar düzenliyoruz. Eğitim kurslarımız hakkında bilgi almak veya kayıt yaptırmak için bize ulaşabilirsiniz.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-5 col-lg-6 m-b30">
                        <div className="content-media wow fadeInUp" data-wow-delay="1.0s" data-wow-duration="0.8s">
                            <div className="dz-media">
                                <img src="/images/about/neden-avrora-medikal-3.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}