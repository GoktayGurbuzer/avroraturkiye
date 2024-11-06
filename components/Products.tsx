import React from "react";
import { getProductsByCategory4 } from "@/lib/product";

type Product = {
    id: number;
    name: string;
    image: string;
    brand_name: string;
    brand_slug: string;
    slug: string;
};

type ProductsProps = {
    categoryId: number | null;
};

export default async function Products() {
    const cihazlar: Product[] = await getProductsByCategory4(1);
    const tibbiCihazlar: Product[] = await getProductsByCategory4(2);
    const kozmetikUrunler: Product[] = await getProductsByCategory4(3);

    return (
        <section className="content-inner bg-light">
            <div className="container">
                <div className="section-head style-3 m-b30 text-center wow fadeInUp" data-wow-delay="0.2s"
                     data-wow-duration="0.8s">
                    <h2 className="title">Öne Çıkan Ürünlerimiz</h2>
                    <p>Size özel güzellik ve bakım ürünlerimizi keşfedin.</p>
                </div>
                <div className="site-filters clearfix style-1 wow fadeInUp" data-wow-delay="0.4s"
                     data-wow-duration="0.8s">
                    <ul className="filters justify-content-center" data-bs-toggle="buttons">
                        <li className="active" data-filter=".cihazlar">
                            <input type="radio"/>
                            <a className="btn">Cihazlar</a>
                        </li>
                        <li data-filter=".tibbicihazlar">
                            <input type="radio"/>
                            <a className="btn">Tıbbi Cihazlar</a>
                        </li>
                        <li data-filter=".kozmetik">
                            <input type="radio"/>
                            <a className="btn">Kozmetik Ürünleri</a>
                        </li>
                    </ul>
                </div>
                <div className="clearfix">
                    <ul id="masonry" className="row">
                        {cihazlar.map((product) => (
                        <li key={product.id} className="card-container col-xl-3 col-lg-4 col-sm-6 m-b30 cihazlar wow fadeInUp"
                            data-wow-delay="0.4s" data-wow-duration="0.8s">
                            <div className="shop-card">
                                <div className="dz-media">
                                    <img src={product.image} alt={product.name}/>
                                </div>
                                <div className="dz-content">
                                    <div className="inner-content">
                                        <a href={`/products/${product.brand_slug}/${product.id}`}>
                                            {product.name}
                                        </a>
                                    </div>
                                    <a href={`/${product.brand_slug}/${product.slug}`}
                                       className="btn btn-square btn-lg btn-white btn-rounded shop-share-btn">
                                        <i className="feather icon-arrow-up-right"></i>
                                    </a>
                                </div>
                            </div>
                        </li>
                        ))}
                        {tibbiCihazlar.map((product) => (
                            <li key={product.id} className="card-container col-xl-3 col-lg-4 col-sm-6 m-b30 tibbicihazlar wow fadeInUp"
                                data-wow-delay="0.4s" data-wow-duration="0.8s">
                                <div className="shop-card">
                                    <div className="dz-media">
                                        <img src={product.image} alt={product.name}/>
                                    </div>
                                    <div className="dz-content">
                                        <div className="inner-content">
                                            <a href={`/products/${product.brand_slug}/${product.id}`}>
                                                {product.name}
                                            </a>
                                        </div>
                                        <a href={`/${product.brand_slug}/${product.slug}`}
                                           className="btn btn-square btn-lg btn-white btn-rounded shop-share-btn">
                                            <i className="feather icon-arrow-up-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </li>
                        ))}
                        {kozmetikUrunler.map((product) => (
                            <li key={product.id} className="card-container col-xl-3 col-lg-4 col-sm-6 m-b30 kozmetik wow fadeInUp"
                                data-wow-delay="0.4s" data-wow-duration="0.8s">
                                <div className="shop-card">
                                    <div className="dz-media">
                                        <img src={product.image} alt={product.name} style={{ height: "337px"}}/>
                                    </div>
                                    <div className="dz-content">
                                        <div className="inner-content">
                                            <a href={`/products/${product.brand_slug}/${product.id}`}>
                                                {product.name}
                                            </a>
                                        </div>
                                        <a href={`/${product.brand_slug}/${product.slug}`}
                                           className="btn btn-square btn-lg btn-white btn-rounded shop-share-btn">
                                            <i className="feather icon-arrow-up-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}