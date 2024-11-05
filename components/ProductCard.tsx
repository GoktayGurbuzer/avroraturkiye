import Link from 'next/link';
import React from "react";

interface Product {
    slug: string;
    name: string;
    description: string;
    image: string;
    category_slug: string;
    brand_name: string;
    brand_slug: string;
}

export default function ProductCard({ product }: { product: Product }) {
    return (
        <div className="col-xl-3 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.2s"
             data-wow-duration="0.8s">
            <div className="shop-card">
                <div className="dz-media">
                    <img src={product.image} alt={product.name} />
                    <div className="product-tag">
                        <Link href={`/brand/${product.brand_slug}`}>
                                <span className="badge">{product.brand_name}</span>
                        </Link>
                    </div>
                </div>
                <div className="dz-content" style={{ height: "100px" }}>
                    <div className="inner-content">
                        <h3 className="title">
                            <a href={`/${product.brand_slug}/${product.slug}`}>{product.name}</a>
                        </h3>
                    </div>
                    <Link href={`/${product.brand_slug}/${product.slug}`}
                          className="btn btn-square btn-lg btn-white btn-rounded shop-share-btn">
                        <i className="feather icon-arrow-up-right"></i>
                    </Link>
                </div>
            </div>
        </div>
    );
}
