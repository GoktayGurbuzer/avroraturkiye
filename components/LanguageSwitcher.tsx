'use client';
import { useState } from 'react';

export default function LanguageSwitcher({ onLanguageChange }: { onLanguageChange: (locale: string) => void }) {
    const [selectedLanguage, setSelectedLanguage] = useState('tr');

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newLocale = e.target.value;
        setSelectedLanguage(newLocale);
        onLanguageChange(newLocale);  // Üst bileşene yeni dili bildir
    };

    return (
        <div>
            <label htmlFor="language-select">Dil: </label>
            <select id="language-select" value={selectedLanguage} onChange={handleLanguageChange}>
                <option value="tr">Türkçe</option>
                <option value="en">English</option>
            </select>
        </div>
    );
}
