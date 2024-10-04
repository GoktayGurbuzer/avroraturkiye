import { useState } from 'react';
import { useRouter } from 'next/router';

export default function SearchBar() {
    const [query, setQuery] = useState('');
    const router = useRouter();

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim()) {
            router.push(`/search?query=${query}`);
        }
    };

    return (
        <form onSubmit={handleSearch} className="search-bar">
            <input
                type="text"
                placeholder="Arama yapın..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit">Ara</button>
        </form>
    );
}
