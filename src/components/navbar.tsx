import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const links = [
    { href: "./", label: "Home" },
    { href: "./competitions", label: "Competitions" },
    { href: "./projects", label: "Projects" },
];

const Navbar: React.FC = () => {
    const router = useRouter();
    return (
        <nav className="w-full px-4 py-3 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700">
            <ul
                className="flex sm:justify-start justify-center gap-8 list-none m-0 p-0 items-center w-full"
            >
                {links.map(link => (
                    <li key={link.href}>
                        <Link
                            href={link.href}
                            className={`text-gray-800 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-500 font-semibold transition-colors ${router.asPath === link.href.replace('./', '/') ? 'border-b-2 border-blue-600 dark:border-blue-500 pb-1' : ''}`}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
