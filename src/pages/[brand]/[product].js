import { useRouter } from 'next/router';
import MainLayout from '../../layouts/MainLayout';
import { brands, products } from '../../utils/data';

export default function ProductPage() {
    const router = useRouter();
    const { brand, product } = router.query;

    // Seçilen marka ve ürün bilgilerini bulma
    const selectedBrand = brands.find((b) => b.id === brand);
    const selectedProduct = products.find(
        (p) => p.id === product && p.brand.toLowerCase() === selectedBrand.name.toLowerCase()
    );

    // Eğer marka ya da ürün bulunamazsa
    if (!selectedBrand || !selectedProduct) {
        return <p>Ürün veya marka bulunamadı.</p>;
    }

    return (
        <MainLayout>
            <div>
                <h1>{selectedProduct.name}</h1>
                <img src={selectedProduct.image} alt={selectedProduct.name} />
                <p>{selectedProduct.description}</p>
                <p>Fiyat: {selectedProduct.price}</p>
            </div>
        </MainLayout>
    );
}
