import Link from 'next/link';
import { personalInfo } from '@/lib/data';

export default function Header() {
    return (
        <header className="site-header">
            <nav className="container">
                <Link href="/" className="nav-logo">
                    {personalInfo.name}
                </Link>
                <ul className="nav-links">
                    <li>
                        <Link href="/">Inicio</Link>
                    </li>
                    <li>
                        <Link href="/projects">Proyectos</Link>
                    </li>
                    <li>
                        <Link href="/about">Sobre Mí</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contacto</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}