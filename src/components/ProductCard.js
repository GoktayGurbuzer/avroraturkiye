import Link from 'next/link';

export default function ProductCard({ product }) {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <Link href={`/${product.brand.toLowerCase()}/${product.id}`}>
                Detaylar
            </Link>
        </div>
    );
}
