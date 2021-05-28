import Link from 'next/link';

export default function Header() {
    return (
        <header>
            <Link href='/'>
                <a>
                    🌐 lingvo
                </a>
            </Link>
        </header>
    )
}