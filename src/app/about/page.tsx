import { Metadata } from 'next';
import Image from 'next/image';
import { personalInfo } from '@/lib/data';

export const metadata: Metadata = {
    title: 'Sobre Mí',
    description: `Conoce más sobre ${personalInfo.name}, ${personalInfo.title}`,
};

export default function AboutPage() {
    const skills = [
        { name: 'React & Next.js',      icon: '⚛️' },
        { name: 'Node.js & Express',    icon: '🟢' },
        { name: 'PostgreSQL & MongoDB', icon: '🗄️' },
        { name: 'Kotlin',               icon: '🎯' },
        { name: 'Git & GitHub',         icon: '🔀' },
        { name: 'Docker',               icon: '🐳' },
        { name: 'AWS',                  icon: '☁️' },
    ];

    return (
        <div className="page-wrapper">
            <div className="container">

                {/* Header */}
                <h1 className="section-title animate-fadeInUp" style={{ textAlign: 'left', marginBottom: '2.5rem' }}>
                    Sobre <span>Mí</span>
                </h1>

                {/* Bio card */}
                <div className="bio-card animate-fadeInUp">
                    <div className="bio-avatar">
                        <Image
                            src={personalInfo.avatar}
                            alt={personalInfo.name}
                            fill
                            className="object-cover"
                            loading="lazy"
                            sizes="200px"
                        />
                    </div>

                    <div>
                        <h2 className="bio-title">
                            ¡Hola! Soy {personalInfo.name}
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                            <p className="bio-text">
                                Soy un desarrollador full stack apasionado por crear experiencias
                                web excepcionales. Con experiencia construyendo aplicaciones
                                modernas y escalables.
                            </p>
                            <p className="bio-text">
                                Mi enfoque está en escribir código limpio, mantenible y eficiente,
                                siempre buscando las mejores prácticas y las últimas tecnologías
                                para entregar productos de alta calidad.
                            </p>
                            <p className="bio-text">
                                Cuando no estoy programando, me gusta contribuir a proyectos de
                                código abierto, escribir artículos técnicos y aprender nuevas
                                tecnologías.
                            </p>
                        </div>
                        <div className="bio-actions">
                            <a
                                href={personalInfo.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary"
                                style={{ padding: '0.45rem 1.1rem', fontSize: '0.85rem' }}
                            >
                                GitHub →
                            </a>
                            <a
                                href={personalInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary"
                                style={{ padding: '0.45rem 1.1rem', fontSize: '0.85rem' }}
                            >
                                LinkedIn →
                            </a>
                        </div>
                    </div>
                </div>

                {/* Skills */}
                <section style={{ marginBottom: '4rem' }}>
                    <h2 className="section-title">
                        Habilidades <span>Técnicas</span>
                    </h2>
                    <div
                        className="stagger"
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                            gap: '1rem',
                        }}
                    >
                        {skills.map((skill) => (
                            <div key={skill.name} className="skill-card">
                                <div className="skill-card-icon">{skill.icon}</div>
                                <p className="skill-card-name">{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
}
