import React from "react";
import { FaGithub, FaKaggle } from "react-icons/fa";
import Link from "next/link";

interface CompetitionCardProps {
    title: string;
    source: string;
    description: string;
    solutionUrl: string;
    competitionUrl: string;
    showIcon?: boolean;
    solutionTarget?: string;
    competitionTarget?: string;
}

const getSolutionIcon = (url: string) => {
    if (url.includes("github.com")) {
        return <FaGithub size={20} className="inline w-5 h-5 mr-2 align-middle text-gray-700 dark:text-slate-400" />;
    } else if (url.includes("kaggle.com")) {
        return <FaKaggle size={20} className="inline w-5 h-5 mr-2 align-middle text-gray-700 dark:text-slate-400" />;
    } else {
        return <span className="inline w-5 h-5 mr-2 align-middle" aria-label="External" title="External">🔗</span>;
    }
};

const CompetitionCard: React.FC<CompetitionCardProps> = ({
    title,
    source,
    description,
    solutionUrl,
    competitionUrl,
    showIcon = true,
    solutionTarget = "_blank",
    competitionTarget = "_blank",
}) => {
    const isInternal = solutionUrl.startsWith("/");
    return (
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6 border border-gray-200 dark:border-slate-700 flex flex-col gap-4">
            <div className="flex items-center gap-3">
                <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-500">{title}</h2>
                <span className="ml-auto px-3 py-1 rounded bg-amber-100 dark:bg-amber-600 text-amber-700 dark:text-amber-100 text-xs font-semibold">{source}</span>
            </div>
            <p className="text-gray-700 dark:text-slate-200 flex-1">{description}</p>
            <div className="flex gap-3 mt-2">
                {isInternal ? (
                    <Link href={solutionUrl} target={solutionTarget} rel="noopener noreferrer" className="px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors flex items-center">
                        {showIcon && getSolutionIcon(solutionUrl)}
                        Solution
                    </Link>
                ) : (
                    <a href={solutionUrl} target={solutionTarget} rel="noopener noreferrer" className="px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors flex items-center">
                        {showIcon && getSolutionIcon(solutionUrl)}
                        Solution
                    </a>
                )}
                <a href={competitionUrl} target={competitionTarget} rel="noopener noreferrer" className="px-4 py-2 rounded bg-amber-500 text-white font-semibold hover:bg-amber-600 transition-colors">Competition</a>
            </div>
        </div>
    );
};

export default CompetitionCard;
