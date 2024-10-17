export interface Brand {
    id: string;
    name: string;
    description: string;
    logo: string;
}

export interface Product {
    id: string;
    name: string;
    description: string;
    image: string;
    category: string;
    brand: string;
    price: number;
}

export interface Category {
    id: string;
    name: string;
    description: string;
}

export interface Shop {
    id: string;
    name: string;
    city: string;
    district: string;
    address: string;
    phone: string;
    mapLink: string;
}

export interface StaticPage {
    name: string;
    description: string;
    url: string;
}

export const brands: Brand[] = [
    {
        id: 'lovecosmedical',
        name: 'Love Cosmedical',
        description: 'Love Cosmedical estetik çözümler sunar.',
        logo: '/path/to/love-cosmedical-logo.png',
    },
    {
        id: 'endospheres',
        name: 'Endospheres',
        description: 'Endospheres, yenilikçi vücut şekillendirme cihazları üretir.',
        logo: '/path/to/endospheres-logo.png',
    },
    {
        id: 'dermalux',
        name: 'Dermalux LED',
        description: 'Dermalux, LED teknolojisi ile güzellik cihazları üretir.',
        logo: '/path/to/dermalux-logo.png',
    },
];

export const categories: Category[] = [
    {
        id: 'cihazlar',
        name: 'Cihazlar',
        description: 'Estetik ve tıbbi cihazlar.',
    },
    {
        id: 'tibbi-cihazlar',
        name: 'Tıbbi Cihazlar',
        description: 'Sağlık ve medikal alanında kullanılan cihazlar.',
    },
    {
        id: 'kozmetik',
        name: 'Kozmetik Ürünler',
        description: 'Cilt bakımına yönelik kozmetik ürünler.',
    },
];

export const products: Product[] = [
    {
        id: 'neofound-exo',
        name: 'Neofound Exo',
        description: 'Cildin gençleşmesi ve yenilenmesi için anti-aging serum.',
        image: '/path/to/neofound-exo-image.png',
        category: 'kozmetik',
        brand: 'lovecosmedical',
        price: 100,
    },
    {
        id: 'akbody',
        name: 'AKBODY',
        description: 'Endospheres markasının vücut şekillendirme cihazı.',
        image: '/path/to/akbody-image.png',
        category: 'cihazlar',
        brand: 'endospheres',
        price: 5000,
    },
    {
        id: 'flex-md',
        name: 'Flex MD',
        description: 'Dermalux LED tarafından üretilen güzellik cihazı.',
        image: '/path/to/flex-md-image.png',
        category: 'cihazlar',
        brand: 'dermalux',
        price: 3000,
    },
    {
        id: 'triwave-md',
        name: 'Triwave MD',
        description: 'Tıbbi kullanım için LED teknolojisine sahip güzellik cihazı.',
        image: '/path/to/triwave-md-image.png',
        category: 'tibbi-cihazlar',
        brand: 'dermalux',
        price: 7500,
    },
];

export const shops: Shop[] = [
    {
        id: 'shop-1',
        name: 'Avrora Spa İstanbul',
        city: 'İstanbul',
        district: 'Kadıköy',
        address: 'İstanbul, Kadıköy, Moda Caddesi No:12',
        phone: '0212 123 4567',
        mapLink: 'https://maps.google.com/?q=40.987689,29.026789',
    },
    {
        id: 'shop-2',
        name: 'Avrora Spa Ankara',
        city: 'Ankara',
        district: 'Çankaya',
        address: 'Ankara, Çankaya, Atatürk Bulvarı No:45',
        phone: '0312 765 4321',
        mapLink: 'https://maps.google.com/?q=39.925533,32.866287',
    },
];

export const staticPages: StaticPage[] = [
    {
        name: 'Hakkımızda',
        description: 'Avrora Spa ve Medikal hakkında daha fazla bilgi edinin.',
        url: '/hakkimizda',
    },
    {
        name: 'İletişim',
        description: 'Bize ulaşmak için iletişim sayfamızı ziyaret edin.',
        url: '/iletisim',
    },
    {
        name: 'Hizmetlerimiz',
        description: 'Teknik servis, randevu alma ve eğitim kursu hizmetlerimizi keşfedin.',
        url: '/hizmetlerimiz',
    },
    {
        name: 'Teknik Servis',
        description: 'Ürünlerimiz için teknik servis hizmetlerimiz hakkında bilgi alın.',
        url: '/hizmetlerimiz/teknik-servis',
    },
    {
        name: 'Randevu Al',
        description: 'Randevu alarak hizmetlerimizden yararlanın.',
        url: '/hizmetlerimiz/randevu-al',
    },
    {
        name: 'Eğitim Kursu',
        description: 'Eğitim kurslarımız hakkında bilgi edinin.',
        url: '/hizmetlerimiz/egitim-kursu',
    },
];
