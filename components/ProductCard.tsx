import Link from 'next/link';

interface Product {
    id: string;
    name: string;
    description: string;
    image: string;
    category: string;
}

export default function ProductCard({ product }: { product: Product }) {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <Link href={`/${product.category.toLowerCase()}/${product.id}`}>
                Detaylar
            </Link>
        </div>
    );
}
