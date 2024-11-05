import { getBrandBySlug } from '@/lib/brand';
import { getProductsByBrand } from '@/lib/product';
import ProductCard from '@/components/ProductCard';
import type {Metadata, ResolvingMetadata} from 'next';
import {getCategoryBySlug} from "@/lib/category";
import {redirect} from "next/navigation";

type Props = {
    params: { brand: string };
    searchParams: { [key: string]: string | string[] | undefined };
}

// Dinamik metadata oluşturma fonksiyonu
export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const brandSlug = params.brand;

    // Kategori verilerini veritabanından çek
    const brand = await getBrandBySlug(brandSlug);

    // Eğer kategori bulunamazsa, varsayılan metadata döner
    if (!brand) {
        redirect('/not-found');
    }

    // Metadata oluştur
    const previousImages = (await parent).openGraph?.images || [];

    return {
        title: brand.title,
        description: brand.description,
        openGraph: {
            title: brand.title,
            description: brand.description,
            images: previousImages, // Kategoriye özel görsel varsa onu da ekleyebilirsin
        },
    };
}

export default async function BrandPage({ params }: { params: { brand: string } }) {
    const brandSlug = params.brand;

    // Markanın bilgilerini slug ile getir
    const brand = await getBrandBySlug(brandSlug);

    // Eğer marka bulunamazsa
    if (!brand) {
        return <p>Marka bulunamadı.</p>;
    }

    // Markaya göre ürünleri getir
    const brandProducts = await getProductsByBrand(brand.id);

    return (
        <main className="page-content">
            <div className="dz-bnr-inr style-1 overlay-black-middle dz-bnr-inr-md"
                 style={{backgroundImage: `url(${brand.image})`}}>
                    <div className="container">
                        <div className="dz-bnr-inr-entry d-table-cell">
                            <h1 className="wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                {brand.name}
                            </h1>
                            <nav aria-label="breadcrumb" className="breadcrumb-row wow fadeInUp" data-wow-delay="0.4s"
                                 data-wow-duration="0.8s">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="/">Anasayfa</a></li>
                                    <li className="breadcrumb-item">{brand.name}</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="vertical-info left">
                        <ul className="social-list wow fadeInLeft" data-wow-delay="0.4s" data-wow-duration="0.8s">
                            <li><a href="https://www.instagram.com" target="_blank">Instagram</a></li>
                            <li><a href="https://www.facebook.com" target="_blank">Facebook</a></li>
                            <li><a href="https://twitter.com" target="_blank">Twitter</a></li>
                        </ul>
                    </div>
                    <div className="blur1"></div>
                    <div className="blur2"></div>
                    <div className="elip"><img src={brand.logo} alt=""/></div>
                    <div className="item1">
                        <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M30.5 0L34.4251 26.5749L61 30.5L34.4251 34.4251L30.5 61L26.5749 34.4251L0 30.5L26.5749 26.5749L30.5 0Z"
                                fill="#F46700"/>
                        </svg>
                    </div>
                    <div className="item2">
                        <svg width="102" height="102" viewBox="0 0 102 102" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_102_123)">
                                <path
                                    d="M51 40L52.4156 49.5844L62 51L52.4156 52.4156L51 62L49.5844 52.4156L40 51L49.5844 49.5844L51 40Z"
                                    fill="#F46700"/>
                            </g>
                            <defs>
                                <filter id="filter0_d_102_123" x="0" y="0" width="102" height="102"
                                        filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                                   values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                   result="hardAlpha"/>
                                    <feOffset/>
                                    <feGaussianBlur stdDeviation="20"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix"
                                             result="effect1_dropShadow_102_123"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_102_123"
                                             result="shape"/>
                                </filter>
                            </defs>
                        </svg>
                    </div>
                    <div className="item3">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15 0L16.9304 13.0696L30 15L16.9304 16.9304L15 30L13.0696 16.9304L0 15L13.0696 13.0696L15 0Z"
                                fill="#F46700"/>
                        </svg>
                    </div>
            </div>
            <section className="content-inner bg-light">
                <div className="container">
                    <div className="row m-b30 m-md-b0">
                        {brandProducts.length === 0 ? (
                            <p>Bu markaya ait ürün bulunamadı.</p>
                        ) : (
                            brandProducts.map((product) => (
                                <ProductCard key={product.id} product={product}/>
                            ))
                        )}
                    </div>
                </div>
            </section>
        </main>
)
;
}
