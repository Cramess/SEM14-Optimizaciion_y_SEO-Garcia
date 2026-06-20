import Image from 'next/image';
import Link from 'next/link';
import { projects, personalInfo } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
    const featuredProjects = projects.filter((p) => p.featured);

    return (
        <div className="page-wrapper">
            {/* Hero Section */}
            <section className="container hero-section animate-fadeInUp">
                {/* Avatar with spinning gradient border */}
                <div className="avatar-wrapper">
                    <Image
                        src={personalInfo.avatar}
                        alt={personalInfo.name}
                        fill
                        className="avatar-img"
                        priority
                        sizes="140px"
                    />
                </div>

                <p className="hero-subtitle">✦ Bienvenido a mi portafolio ✦</p>

                <h1 className="hero-title">
                    Hola, soy{' '}
                    <span className="text-gradient">{personalInfo.name}</span>
                </h1>

                <p
                    className="hero-description"
                    style={{ color: 'var(--purple-400)', fontWeight: 600, marginBottom: '0.5rem' }}
                >
                    {personalInfo.title}
                </p>

                <p className="hero-description">{personalInfo.description}</p>

                <div className="btn-group">
                    <Link href="/projects" className="btn-primary">
                        Ver Proyectos →
                    </Link>
                    <Link href="/about" className="btn-secondary">
                        Sobre Mí
                    </Link>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="container" style={{ paddingBottom: '4rem' }}>
                <h2 className="section-title">
                    Proyectos <span>Destacados</span>
                </h2>
                <div className="projects-grid stagger">
                    {featuredProjects.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>
            </section>
        </div>
    );
}