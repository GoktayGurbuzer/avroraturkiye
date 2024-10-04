import MainLayout from '../../layouts/MainLayout';
import { products } from '../../utils/data';
import ProductCard from '../../components/ProductCard';

export default function ProductsPage() {
    return (
        <MainLayout>
            <div>
                <h1>Tüm Ürünler</h1>
                <div className="product-list">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </MainLayout>
    );
}
