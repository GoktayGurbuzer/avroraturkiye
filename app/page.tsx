'use client';
import { useState } from 'react';
import SearchBar from '@/components/SearchBar';
import Link from 'next/link';
import en from '@/locales/en.json';
import tr from '@/locales/tr.json';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Home() {
    const [locale, setLocale] = useState('tr');  // Varsayılan dil Türkçe
    const t = locale === 'en' ? en : tr;  // Seçilen dile göre çevirileri seç

    return (
        <div>
            <LanguageSwitcher onLanguageChange={setLocale} />  {/* Dil seçici */}
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
