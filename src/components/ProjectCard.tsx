import React from "react";
import Link from "next/link";
import { IconType } from "react-icons";

interface ProjectCardProps {
    title: string;
    icon: React.ReactElement<IconType>;
    description: string;
    projectSlug: string;
    liveDemoUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, icon, description, projectSlug, liveDemoUrl }) => {
    return (
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6 border border-gray-200 dark:border-slate-700 flex flex-col gap-4">
            <div className="flex items-center gap-3">
                <span className="text-3xl text-blue-600 dark:text-blue-500">{icon}</span>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-slate-100">{title}</h2>
            </div>
            <p className="text-gray-600 dark:text-slate-400">{description}</p>
            <div className="flex gap-3 mt-2">
                <Link
                    href={`/projects/${projectSlug}`}
                    className="self-start px-4 py-2 rounded bg-blue-600 text-white dark:bg-blue-500 dark:text-white font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
                >
                    View Details
                </Link>
                {liveDemoUrl && (
                    <a
                        href={liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="self-start px-4 py-2 rounded bg-amber-500 text-white font-semibold hover:bg-amber-600 transition-colors"
                    >
                        Live Demo
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
