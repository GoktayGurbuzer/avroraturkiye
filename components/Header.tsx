import Link from 'next/link';

export default function Header() {
    return (
        <header>
            <nav className="navbar">
                <div className="logo">
                    <Link href="/">
                        Avrora Spa ve Medikal
                    </Link>
                </div>
                <ul className="nav-links">
                    <li>
                        <Link href="/">
                            Ana Sayfa
                        </Link>
                    </li>
                    <li>
                        <Link href="/cihazlar">
                            Cihazlar
                        </Link>
                    </li>
                    <li>
                        <Link href="/tibbi-cihazlar">
                            Tıbbi Cihazlar
                        </Link>
                    </li>
                    <li>
                        <Link href="/kozmetik">
                            Kozmetik Ürünler
                        </Link>
                    </li>
                    <li>
                        <Link href="/hizmet-noktalari">
                            Hizmet Noktaları
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
