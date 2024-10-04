import { useRouter } from 'next/router';
import Head from 'next/head';
import MainLayout from '../../layouts/MainLayout';
import { products } from '../../utils/data';

export default function ProductPage() {
    const router = useRouter();
    const { productId } = router.query;

    const product = products.find((p) => p.id === productId);
    if (!product) return <p>Ürün bulunamadı.</p>;

    return (
        <MainLayout>
            <Head>
                <title>{product.name} - Avrora Spa ve Medikal</title>
                <meta name="description" content={`${product.name} hakkında detaylı bilgi ve satın alma seçenekleri.`} />
                <meta property="og:title" content={`${product.name} - Avrora Spa ve Medikal`} />
                <meta property="og:description" content={`${product.name} hakkında detaylı bilgi ve satın alma seçenekleri.`} />
                <meta property="og:image" content={product.image} />
                <meta property="og:url" content={`https://www.avrora-spa-medikal.com/products/${product.id}`} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <div>
                <h1>{product.name}</h1>
                <img src={product.image} alt={product.name} />
                <p>{product.description}</p>
                <p>Fiyat: {product.price}</p>
            </div>
        </MainLayout>
    );
}
