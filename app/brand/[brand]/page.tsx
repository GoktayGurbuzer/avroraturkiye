import { brands, products } from '@/utils/data';

// @ts-ignore
export default function BrandPage({ params }) {
    const { brand } = params;

    const selectedBrand = brands.find((b) => b.id === brand);
    const brandProducts = products.filter((p) => p.brand.toLowerCase() === brand);

    if (!selectedBrand) {
        return <p>Marka bulunamadı.</p>;
    }

    return (
        <div>
            <h1>{selectedBrand.name} Ürünleri</h1>
            {brandProducts.map((product) => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                </div>
            ))}
        </div>
    );
}
