import { Metadata } from 'next';
import { personalInfo } from '@/lib/data';

export const metadata: Metadata = {
    title: 'Contacto',
    description: `Ponte en contacto con ${personalInfo.name}`,
};

const contactLinks = [
    {
        label: 'Email',
        href: `mailto:${personalInfo.email}`,
        icon: '✉️',
        display: personalInfo.email,
    },
    {
        label: 'GitHub',
        href: personalInfo.github,
        icon: '🐙',
        display: 'github.com/Cramess78',
    },
    {
        label: 'LinkedIn',
        href: personalInfo.linkedin,
        icon: '💼',
        display: 'Perfil de LinkedIn',
    },
];

export default function ContactPage() {
    return (
        <div className="page-wrapper">
            <div className="container" style={{ maxWidth: '720px' }}>

                {/* Header */}
                <div className="animate-fadeInUp" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h1 className="section-title" style={{ marginBottom: '1rem' }}>
                        Ponte en <span>Contacto</span>
                    </h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8 }}>
                        ¿Tienes un proyecto en mente o simplemente quieres decir hola?
                        <br />
                        ¡Me encantaría saber de ti!
                    </p>
                </div>

                {/* Contact cards */}
                <div className="contact-cards stagger">
                    {contactLinks.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            target={item.href.startsWith('mailto') ? undefined : '_blank'}
                            rel="noopener noreferrer"
                            className="hover-card-link"
                        >
                            <span className="contact-card-icon">{item.icon}</span>
                            <span className="contact-card-label">{item.label}</span>
                            <span className="contact-card-value">{item.display}</span>
                        </a>
                    ))}
                </div>

                {/* Form */}
                <div className="form-card animate-fadeInUp">
                    <h2>Envíame un mensaje</h2>
                    <form className="form-fields">
                        <div className="form-group">
                            <label htmlFor="contact-name" className="form-label">Nombre</label>
                            <input
                                type="text"
                                id="contact-name"
                                placeholder="Tu nombre"
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="contact-email" className="form-label">Email</label>
                            <input
                                type="email"
                                id="contact-email"
                                placeholder="tu@email.com"
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="contact-message" className="form-label">Mensaje</label>
                            <textarea
                                id="contact-message"
                                placeholder="¿En qué puedo ayudarte?"
                                className="form-textarea"
                            />
                        </div>

                        <button type="button" className="btn-primary" style={{ justifyContent: 'center', marginTop: '0.5rem' }}>
                            Enviar Mensaje ✉️
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
}
