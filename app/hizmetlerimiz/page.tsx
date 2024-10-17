import Link from 'next/link';

export default function Hizmetlerimiz() {
    return (
        <div>
            <h1>Hizmetlerimiz</h1>
            <ul>
                <li>
                    <Link href="/hizmetlerimiz/teknik-servis">
                        Teknik Servis
                    </Link>
                </li>
                <li>
                    <Link href="/hizmetlerimiz/randevu-al">
                        Randevu Al
                    </Link>
                </li>
                <li>
                    <Link href="/hizmetlerimiz/egitim-kursu">
                        Eğitim Kursu
                    </Link>
                </li>
            </ul>
        </div>
    );
}
