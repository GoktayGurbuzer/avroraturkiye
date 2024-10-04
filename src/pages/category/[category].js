import { useRouter } from 'next/router';
import MainLayout from '../../layouts/MainLayout';
import { products } from '../../utils/data';
import ProductCard from '../../components/ProductCard';

export default function CategoryPage() {
    const router = useRouter();
    const { category } = router.query;

    // Kategoriye göre ürünleri bul
    const categoryProducts = products.filter(
        (product) => product.category.toLowerCase() === category
    );

    // Eğer kategoriye ait ürün bulunamazsa
    if (categoryProducts.length === 0) {
        return <p>Bu kategoriye ait ürün bulunamadı.</p>;
    }

    return (
        <MainLayout>
            <div>
                <h1>{category.charAt(0).toUpperCase() + category.slice(1)} Ürünleri</h1>
                <div className="product-list">
                    {categoryProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </MainLayout>
    );
}
