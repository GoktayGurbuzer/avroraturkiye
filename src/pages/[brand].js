import { useRouter } from 'next/router';
import MainLayout from '../layouts/MainLayout';
import { brands, products } from '../utils/data';
import ProductCard from '../components/ProductCard';

export default function BrandPage() {
    const router = useRouter();
    const { brand } = router.query;

    // Seçilen markayı bul
    const selectedBrand = brands.find((b) => b.id === brand);

    // Eğer marka bulunamazsa
    if (!selectedBrand) return <p>Marka bulunamadı.</p>;

    // Bu markaya ait ürünleri filtrele
    const brandProducts = products.filter((product) =>
        product.brand.toLowerCase() === selectedBrand.name.toLowerCase()
    );

    return (
        <MainLayout>
            <div>
                <h1>{selectedBrand.name} Ürünleri</h1>
                <p>{selectedBrand.description}</p>
                <div className="product-list">
                    {brandProducts.length > 0 ? (
                        brandProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    ) : (
                        <p>Bu markaya ait ürün bulunamadı.</p>
                    )}
                </div>
            </div>
        </MainLayout>
    );
}
