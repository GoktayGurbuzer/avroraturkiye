"use client";

import { products, shops, staticPages } from '@/utils/data';

export default function SearchResults({ query }: { query: string }) {
    const normalizedQuery = query.toLowerCase(); // Arama terimini küçük harfe çeviriyoruz

    // Ürünlerde ve markalarda kısmî arama yapıyoruz
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(normalizedQuery) ||
        product.category.toLowerCase().includes(normalizedQuery) ||
        product.brand?.toLowerCase().includes(normalizedQuery) // Eğer ürünlerin markaları varsa
    );

    // Dükkanlarda arama yapıyoruz
    const filteredShops = shops.filter((shop) =>
        shop.name.toLowerCase().includes(normalizedQuery) ||
        shop.city.toLowerCase().includes(normalizedQuery) ||
        shop.district.toLowerCase().includes(normalizedQuery)
    );

    // Sabit sayfalar üzerinde kısmî arama yapıyoruz
    const filteredPages = staticPages.filter((page) =>
        page.name.toLowerCase().includes(normalizedQuery) ||
        page.description.toLowerCase().includes(normalizedQuery)
    );

    if (filteredProducts.length === 0 && filteredShops.length === 0 && filteredPages.length === 0) {
        return <p>Sonuç bulunamadı.</p>;
    }

    return (
        <div>
            <h1>Arama Sonuçları</h1>

            {filteredProducts.length > 0 && (
                <div>
                    <h2>Ürünler</h2>
                    {filteredProducts.map((product) => (
                        <div key={product.id}>
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p>Fiyat: {product.price}</p>
                        </div>
                    ))}
                </div>
            )}

            {filteredShops.length > 0 && (
                <div>
                    <h2>Dükkanlar</h2>
                    {filteredShops.map((shop) => (
                        <div key={shop.id}>
                            <h3>{shop.name}</h3>
                            <p>{shop.address}</p>
                            <p>Telefon: {shop.phone}</p>
                            <a href={shop.mapLink} target="_blank" rel="noopener noreferrer">
                                Navigasyon
                            </a>
                        </div>
                    ))}
                </div>
            )}

            {filteredPages.length > 0 && (
                <div>
                    <h2>Sayfalar</h2>
                    {filteredPages.map((page) => (
                        <div key={page.url}>
                            <h3>{page.name}</h3>
                            <p>{page.description}</p>
                            <a href={page.url}>Sayfaya Git</a>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
