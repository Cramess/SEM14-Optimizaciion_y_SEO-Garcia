import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/types';

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Link href={`/projects/${project.slug}`} className="project-card">
            <div className="project-card-image">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    loading="lazy"
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <div className="project-card-body">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">{project.description}</p>
                <div className="tech-badges">
                    {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="tech-badge">
                            {tech}
                        </span>
                    ))}
                    {project.technologies.length > 3 && (
                        <span className="tech-badge">
                            +{project.technologies.length - 3}
                        </span>
                    )}
                </div>
            </div>
        </Link>
    );
}