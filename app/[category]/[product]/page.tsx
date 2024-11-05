import { getProductBySlug } from '@/lib/product';
import type { Metadata, ResolvingMetadata } from 'next';
import { redirect } from "next/navigation";

type Props = {
    params: { category: string; product: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

// Dinamik metadata oluşturma fonksiyonu
export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { product } = params;

    // Ürünü veritabanından çek
    const selectedProduct = await getProductBySlug(product);

    // Eğer ürün bulunamazsa
    if (!selectedProduct) {
        return {
            title: 'Ürün bulunamadı',
            description: 'Aradığınız ürün mevcut değil.',
        };
    }

    // Ürün bulunursa metadata oluştur
    const previousImages = (await parent).openGraph?.images || [];

    return {
        title: `${selectedProduct.name} - ${selectedProduct.category_name}`,
        description: selectedProduct.description,
        openGraph: {
            title: selectedProduct.name,
            description: selectedProduct.description,
            images: [selectedProduct.image, ...previousImages],
        },
    };
}

export default async function ProductPage({ params }: { params: { product: string } }) {
    const { product } = params;

    // Ürünü slug'a göre veritabanından çek
    const selectedProduct = await getProductBySlug(product);

    // Eğer ürün bulunamazsa
    if (!selectedProduct) {
        redirect('/not-found');
    }

    return (
        <main className="page-content">
            <section className="content-inner bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-5 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                            <div className="dz-product-detail sticky-top">
                                <div className="dz-media">
                                    <img src={selectedProduct.image} alt={selectedProduct.name} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-7 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                            <div className="dz-product-detail style-1 p-t15">
                                <div className="dz-content">
                                    <div className="dz-content-footer">
                                        <div className="dz-content-start">
                                            <h1 className="title">{selectedProduct.name}</h1>
                                        </div>
                                    </div>
                                    <p>{selectedProduct.description}</p>

                                    <div className="dz-info">
                                        <ul className="social-icon">
                                            <li><strong>Paylaş:</strong></li>
                                            <li>
                                                <a href="https://www.facebook.com" target="_blank">
                                                    <i className="fa-brands fa-facebook-f"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.linkedin.com" target="_blank">
                                                    <i className="fa-brands fa-linkedin-in"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.instagram.com" target="_blank">
                                                    <i className="fa-brands fa-instagram"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://twitter.com" target="_blank">
                                                    <i className="fa-brands fa-twitter"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="clearfix bg-light">
                <div className="container">
                    <div className="product-description">
                        <div className="tab-content wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s"
                             id="myTabContent">
                            <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel"
                                 aria-labelledby="home-tab" tabIndex={0}>
                                <div className="detail-bx">
                                    <div
                                        dangerouslySetInnerHTML={{__html: selectedProduct.content}}
                                    />
                                </div>
                                <div className="row g-lg-4 g-3">
                                    <div className="col-xl-4 col-md-4 col-sm-4 col-6">
                                        <div className="related-img dz-media">
                                            <img src="/images/shop/middle/img1.webp" alt="/"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-4 col-sm-4 col-6">
                                        <div className="related-img dz-media">
                                            <img src="/images/shop/middle/img2.webp" alt="/"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-4 col-sm-4">
                                        <div className="related-img dz-media">
                                            <img src="/images/shop/middle/img3.webp" alt="/"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-inner bg-light overflow-hidden">

            </section>
        </main>
    );
}
