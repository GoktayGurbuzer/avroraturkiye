'use client';
import { useRouter } from 'next/navigation'; // next/navigation'dan import
import { usePathname } from 'next/navigation'; // mevcut sayfa yolunu almak için
import SearchBar from '@/components/SearchBar';
import Link from 'next/link';
import en from '@/locales/en.json';
import tr from '@/locales/tr.json';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Home() {
    const pathname = usePathname(); // Mevcut sayfa yolu
    const locale = pathname.startsWith('/en') ? 'en' : 'tr'; // URL'ye göre dil belirlemesi

    const t = locale === 'en' ? en : tr;  // Çevirileri URL'ye göre yükle

    return (
        <div>
            <LanguageSwitcher /> {/* Dil seçici */}
            <h1>{t.title}</h1>
            <SearchBar />
            <h2>{t.categories}</h2>
            <ul>
                <li>
                    <Link href="/category/cihazlar">{t.devices}</Link>
                </li>
                <li>
                    <Link href="/category/tıbbi-cihazlar">{t.medicalDevices}</Link>
                </li>
                <li>
                    <Link href="/category/kozmetik">{t.cosmetics}</Link>
                </li>
            </ul>
        </div>
    );
}
