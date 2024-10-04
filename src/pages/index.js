import Head from 'next/head';
import MainLayout from '../layouts/MainLayout';
import SearchBar from '@/components/SearchBar';
import { brands } from '../utils/data'; // Markalarımızı buradan çekiyoruz
import Link from 'next/link'; // Link kullanacağız

export default function Home() {
    return (
        <MainLayout>
            <Head>
                <title>Avrora Spa ve Medikal - Ana Sayfa</title>
                <meta
                    name="description"
                    content="Avrora Spa ve Medikal, estetik ve medikal cihazlar konusunda lider markaların distribütörüdür."
                />
                <meta property="og:title" content="Avrora Spa ve Medikal - Ana Sayfa" />
                <meta
                    property="og:description"
                    content="Avrora Spa ve Medikal, estetik ve medikal cihazlar konusunda lider markaların distribütörüdür."
                />
                <meta property="og:image" content="/images/seo-image.png" />
                <meta property="og:url" content="https://www.avrora-spa-medikal.com/" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <SearchBar />

            <div>
                <h1>Avrora Spa ve Medikal</h1>
                <h2>Kategoriler</h2>
                <div className="categories">
                    <ul>
                        <li>
                            <a href="category/cihazlar">Cihazlar</a>
                        </li>
                        <li>
                            <a href="category/tıbbi-cihazlar">Tıbbi Cihazlar</a>
                        </li>
                        <li>
                            <a href="category/kozmetik">Kozmetik Ürünler</a>
                        </li>
                    </ul>
                </div>

                <h2>Markalar</h2>
                <div className="brand-list">
                    {brands.map((brand) => (
                        <div key={brand.id} className="brand-item">
                            <img src={brand.logo} alt={brand.name} className="brand-logo" />
                            <h3>{brand.name}</h3>
                            <p>{brand.description}</p>
                            <Link href={`/${brand.id}`}>
                                Markayı Görüntüle
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </MainLayout>
    );
}
