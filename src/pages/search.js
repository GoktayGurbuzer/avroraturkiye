import { useRouter } from 'next/router';
import MainLayout from '../layouts/MainLayout';
import { brands, products } from '../utils/data';
import ProductCard from '../components/ProductCard';
import Link from 'next/link';

export default function SearchResults() {
    const router = useRouter();
    const { query } = router.query;

    // Arama terimi ile markaları ve ürünleri filtrele
    const filteredBrands = brands.filter((brand) =>
        brand.name.toLowerCase().includes(query.toLowerCase())
    );

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <MainLayout>
            <div>
                <h1>'{query}' için arama sonuçları</h1>

                <h2>Markalar</h2>
                {filteredBrands.length > 0 ? (
                    <div className="brand-list">
                        {filteredBrands.map((brand) => (
                            <div key={brand.id} className="brand-item">
                                <img src={brand.logo} alt={brand.name} className="brand-logo" />
                                <h3>{brand.name}</h3>
                                <Link href={`/brands/${brand.id}`}>
                                    Markayı Görüntüle
                                </Link>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Marka bulunamadı.</p>
                )}

                <h2>Ürünler</h2>
                {filteredProducts.length > 0 ? (
                    <div className="product-list">
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <p>Ürün bulunamadı.</p>
                )}
            </div>
        </MainLayout>
    );
}
