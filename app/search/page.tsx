"use client"; // Client-side işlemleri yapmak için

import SearchResults from '@/components/SearchResults';
import { useSearchParams } from 'next/navigation';

export default function SearchPage() {
    const searchParams = useSearchParams();
    const query = searchParams.get('query')?.toLowerCase() || '';

    // Eğer arama yapılmamışsa, bir mesaj göster veya sayfa boş kalsın
    if (!query) {
        return <p>Lütfen arama yapın.</p>;
    }

    return (
        <div>
            <SearchResults query={query} />
        </div>
    );
}
