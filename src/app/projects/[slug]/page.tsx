import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/data';

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    if (!project) return { title: 'Proyecto no encontrado' };
    return {
        title: project.title,
        description: project.description,
        openGraph: { title: project.title, description: project.description, images: [project.image], type: 'article' },
        twitter: { card: 'summary_large_image', title: project.title, description: project.description, images: [project.image] },
    };
}

export default async function ProjectDetailPage({ params }: Props) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    if (!project) notFound();

    return (
        <div className="page-wrapper">
            <div className="container" style={{ maxWidth: '900px' }}>

                {/* Back link */}
                <Link
                    href="/projects"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        color: 'var(--purple-400)',
                        textDecoration: 'none',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        marginBottom: '2rem',
                        transition: 'var(--transition)',
                    }}
                >
                    ← Volver a Proyectos
                </Link>

                {/* Hero image */}
                <div
                    style={{
                        position: 'relative',
                        width: '100%',
                        height: '400px',
                        borderRadius: '1.5rem',
                        overflow: 'hidden',
                        marginBottom: '2.5rem',
                        border: '1px solid var(--border-subtle)',
                    }}
                >
                    <Image
                        src={project!.image}
                        alt={project!.title}
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 768px) 100vw, 900px"
                    />
                    {/* Gradient overlay */}
                    <div
                        style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to top, rgba(2,13,2,0.85) 0%, transparent 60%)',
                        }}
                    />
                    {/* Title on image */}
                    <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', right: '2rem' }}>
                        <p style={{ color: 'var(--purple-400)', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                            Proyecto Destacado
                        </p>
                        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-primary)', marginBottom: '0.3rem' }}>
                            {project!.title}
                        </h1>
                        {project!.tagline && (
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
                                {project!.tagline}
                            </p>
                        )}
                    </div>
                </div>

                {/* Pitch */}
                <div className="bio-card animate-fadeInUp" style={{ marginBottom: '2rem' }}>
                    <div style={{ gridColumn: '1 / -1' }}>
                        <h2 className="bio-title" style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>Sobre el Proyecto</h2>
                        <p className="bio-text" style={{ fontSize: '1.05rem', lineHeight: 1.9 }}>
                            {project!.longDescription ?? project!.description}
                        </p>
                        {project!.role && (
                            <div
                                style={{
                                    marginTop: '1.25rem',
                                    padding: '0.85rem 1.1rem',
                                    background: 'rgba(74,222,128,0.07)',
                                    border: '1px solid var(--border-subtle)',
                                    borderRadius: '0.75rem',
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '0.6rem',
                                }}
                            >
                                <span style={{ fontSize: '1rem' }}>🎖️</span>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7 }}>
                                    <strong style={{ color: 'var(--purple-400)' }}>Rol: </strong>
                                    {project!.role}
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Features */}
                {project!.features && project!.features.length > 0 && (
                    <section style={{ marginBottom: '2.5rem' }}>
                        <h2 className="section-title" style={{ textAlign: 'left', fontSize: '1.4rem', marginBottom: '1.25rem' }}>
                            ✨ Características <span>Principales</span>
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
                            {project!.features.map((f) => (
                                <div key={f.title} className="skill-card" style={{ textAlign: 'left', padding: '1.35rem' }}>
                                    <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--purple-400)', marginBottom: '0.4rem', fontSize: '0.95rem' }}>
                                        {f.title}
                                    </p>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.7 }}>
                                        {f.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Stack */}
                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 className="section-title" style={{ textAlign: 'left', fontSize: '1.4rem', marginBottom: '1.25rem' }}>
                        🛠️ Stack <span>Tecnológico</span>
                    </h2>
                    <div className="tech-badges" style={{ gap: '0.6rem' }}>
                        {project!.technologies.map((tech) => (
                            <span key={tech} className="tech-badge" style={{ fontSize: '0.82rem', padding: '0.35rem 0.85rem' }}>
                                {tech}
                            </span>
                        ))}
                    </div>
                </section>

                {/* Challenges */}
                {project!.challenges && project!.challenges.length > 0 && (
                    <section style={{ marginBottom: '3rem' }}>
                        <h2 className="section-title" style={{ textAlign: 'left', fontSize: '1.4rem', marginBottom: '1.25rem' }}>
                            🔥 Retos Técnicos y <span>Soluciones</span>
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {project!.challenges.map((c, i) => (
                                <div
                                    key={i}
                                    style={{
                                        background: 'var(--bg-card)',
                                        border: '1px solid var(--border-subtle)',
                                        borderRadius: '1rem',
                                        padding: '1.35rem',
                                        backdropFilter: 'blur(10px)',
                                        display: 'grid',
                                        gridTemplateColumns: '1fr 1fr',
                                        gap: '1rem',
                                    }}
                                >
                                    <div>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                                            ⚡ Reto
                                        </p>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                                            {c.problem}
                                        </p>
                                    </div>
                                    <div style={{ borderLeft: '1px solid var(--border-subtle)', paddingLeft: '1rem' }}>
                                        <p style={{ color: 'var(--purple-400)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                                            ✅ Solución
                                        </p>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                                            {c.solution}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* CTA buttons */}
                <div className="btn-group" style={{ justifyContent: 'flex-start' }}>
                    {project!.demoUrl && (
                        <a href={project!.demoUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                            Ver Demo →
                        </a>
                    )}
                    {project!.githubUrl && (
                        <a href={project!.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                            Ver Código en GitHub
                        </a>
                    )}
                </div>

            </div>
        </div>
    );
}
