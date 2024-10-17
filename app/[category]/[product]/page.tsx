import { products } from '@/utils/data';

export default function ProductPage({ params }: { params: { category: string; product: string } }) {
    const { category, product } = params;

    // Ürünü bul
    const selectedProduct = products.find(
        (p) => p.id === product && p.category.toLowerCase() === category
    );

    // Eğer ürün bulunamazsa
    if (!selectedProduct) {
        return <p>Ürün bulunamadı.</p>;
    }

    return (
        <div>
            <h1>{selectedProduct.name}</h1>
            <img src={selectedProduct.image} alt={selectedProduct.name} />
            <p>{selectedProduct.description}</p>
            <p>Fiyat: {selectedProduct.price}</p>
        </div>
    );
}
