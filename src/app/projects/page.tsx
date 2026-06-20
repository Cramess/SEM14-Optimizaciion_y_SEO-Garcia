import { Metadata } from 'next';
import { projects } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';

export const metadata: Metadata = {
    title: 'Proyectos',
    description: 'Explora los proyectos de desarrollo de Cristian Rufino',
    openGraph: {
        title: 'Proyectos - Portafolio',
        description: 'Explora los proyectos de desarrollo de Cristian Rufino',
        images: ['/og-projects.jpg'],
    },
};

export default function ProjectsPage() {
    return (
        <div className="page-wrapper">
            <div className="container">
                <div className="animate-fadeInUp" style={{ marginBottom: '3rem', textAlign: 'center' }}>
                    <h1 className="section-title" style={{ marginBottom: '0.75rem' }}>
                        Mis <span>Proyectos</span>
                    </h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
                        Una colección de proyectos en los que he trabajado
                    </p>
                </div>

                <div className="projects-grid stagger">
                    {projects.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
}