import { useRouter } from 'next/router';
import { products } from '@/utils/data';
import ProductCard from '@/components/ProductCard';

export default function CategoryPage({ params }: { params: { category: string } }) {
    const { category } = params;

    // Kategoriye göre ürünleri bul
    const categoryProducts = products.filter(
        (product) => product.category.toLowerCase() === category
    );

    // Eğer kategoriye ait ürün bulunamazsa
    if (categoryProducts.length === 0) {
        return <p>Bu kategoriye ait ürün bulunamadı.</p>;
    }

    return (
        <div>
            <h1>{category.charAt(0).toUpperCase() + category.slice(1)} Ürünleri</h1>
            <div className="product-list">
                {categoryProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
