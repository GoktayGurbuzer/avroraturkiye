"use client";

import { useState } from 'react';
import { shops } from '@/utils/data';

export default function ShopsPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');

    // Şehirlere göre filtreleme
    const cities = [...new Set(shops.map((shop) => shop.city))];

    // İl seçimine göre ilçeleri getirme
    const districts = selectedCity
        ? [...new Set(shops.filter((shop) => shop.city === selectedCity).map((shop) => shop.district))]
        : [];

    // Arama ve filtreleme
    const filteredShops = shops.filter((shop) => {
        return (
            (selectedCity === '' || shop.city === selectedCity) &&
            (selectedDistrict === '' || shop.district === selectedDistrict) &&
            (shop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                shop.district.toLowerCase().includes(searchQuery.toLowerCase()))
        );
    });

    return (
        <div>
            <h1>Servis Noktaları</h1>

            {/* İl ve İlçe Seçimi */}
            <div>
                <label>İl: </label>
                <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
                    <option value="">Tüm İller</option>
                    {cities.map((city) => (
                        <option key={city} value={city}>
                            {city}
                        </option>
                    ))}
                </select>

                <label>İlçe: </label>
                <select
                    value={selectedDistrict}
                    onChange={(e) => setSelectedDistrict(e.target.value)}
                    disabled={!selectedCity}
                >
                    <option value="">Tüm İlçeler</option>
                    {districts.map((district) => (
                        <option key={district} value={district}>
                            {district}
                        </option>
                    ))}
                </select>
            </div>

            {/* Arama Kutusu */}
            <div>
                <input
                    type="text"
                    placeholder="İlçe veya Dükkan adı arayın"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            {/* Dükkan Listesi */}
            <div>
                {filteredShops.length > 0 ? (
                    filteredShops.map((shop) => (
                        <div key={shop.id}>
                            <h2>{shop.name}</h2>
                            <p>{shop.address}</p>
                            <p>{shop.phone}</p>
                            <a href={shop.mapLink} target="_blank" rel="noopener noreferrer">
                                Navigasyon
                            </a>
                        </div>
                    ))
                ) : (
                    <p>Sonuç bulunamadı.</p>
                )}
            </div>
        </div>
    );
}
