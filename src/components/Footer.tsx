import { personalInfo } from '@/lib/data';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-inner">
                    <p className="footer-copy">
                        &copy; {new Date().getFullYear()}{' '}
                        <span style={{ color: 'var(--purple-400)', fontWeight: 600 }}>
                            {personalInfo.name}
                        </span>
                        . Todos los derechos reservados.
                    </p>
                    <div className="footer-links">
                        <a
                            href={personalInfo.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            GitHub
                        </a>
                        <a
                            href={personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            LinkedIn
                        </a>
                        <a
                            href={`mailto:${personalInfo.email}`}
                            aria-label="Email"
                        >
                            Email
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}