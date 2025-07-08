import React from "react";
import Head from "next/head";
import Image from "next/image";
import ImageCarousel from "@/components/ImageCarousel";
import { withBasePath } from "@/utils/withBasePath";

const images = [
    "Screenshot 2024-10-11 203328.png",
    "Screenshot 2024-10-11 203337.png",
    "Screenshot 2024-10-11 203351.png",
    "Screenshot 2024-10-11 203400.png",
    "Screenshot 2024-10-11 203407.png",
    "Screenshot 2024-10-11 203414.png",
];

export default function CountriesViewer() {
    return (
        <>
            <Head>
                <title>Countries Viewer | Omer Yassir</title>
            </Head>
            <main className="pt-10 px-2 sm:pt-10 sm:px-4 max-w-3xl mx-auto">
                <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6 border border-gray-200 dark:border-slate-700 flex flex-col gap-6 mb-8">
                    <div className="flex items-center gap-4">
                        <Image src={withBasePath("/countries_viewer/Screenshot 2024-10-11 203328.png")} alt="Countries Viewer" width={64} height={64} className="rounded" priority={true} />
                        <h1 className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-500">Countries Viewer</h1>
                    </div>
                    <ImageCarousel folder="countries_viewer" images={images} altPrefix="Screenshot" />
                    <p className="text-lg text-gray-700 dark:text-slate-200">
                        Countries Viewer is a React + TypeScript app that lets you:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 dark:text-slate-300">
                        <li>View all countries with their flags and details.</li>
                        <li>Search for countries and view detailed information.</li>
                        <li>Take a quiz to test your knowledge about countries.</li>
                    </ul>
                    <div className="mt-4 text-gray-500 dark:text-slate-400 text-sm">
                        <strong>Stack:</strong> React, TypeScript
                    </div>
                    <div className="flex gap-4 mt-2">
                        <a
                            href="https://github.com/omerym/CountriesViewer"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded bg-blue-600 text-white dark:bg-blue-500 dark:text-white font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
                        >
                            Source Code
                        </a>
                        <a
                            href="https://omerym.github.io/CountriesViewer/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded bg-amber-500 text-white font-semibold hover:bg-amber-600 transition-colors"
                        >
                            Live Demo
                        </a>
                    </div>
                </div>
            </main>
        </>
    );
}
