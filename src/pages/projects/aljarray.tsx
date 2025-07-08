import React from "react";
import Head from "next/head";
import Image from "next/image";
import ImageCarousel from "@/components/ImageCarousel";
import { withBasePath } from "@/utils/withBasePath";

const images = [
    "EiV62h.png",
    "hGYReS.png",
    "nB1tTq.png",
    "P+JiSx.png",
    "ssTxda.png",
    "sTnCmm.png",
    "uw6DIi.png",
];

export default function Aljarray() {
    return (
        <>
            <Head>
                <title>Aljarray | Omer Yassir</title>
            </Head>
            <main className="pt-10 px-2 sm:pt-10 sm:px-4 max-w-3xl mx-auto min-h-screen">
                <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6 border border-gray-200 dark:border-slate-700 flex flex-col gap-6  mb-8">
                    <div className="flex items-center gap-4">
                        <Image src={withBasePath("/aljarray/Icon.png")} alt="Aljarray" width={48} height={48} className="rounded" priority={true} />
                        <h1 className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-500">Aljarray</h1>
                    </div>
                    <ImageCarousel folder="aljarray" images={images} altPrefix="Screenshot" />
                    <p className="text-lg text-gray-700 dark:text-slate-200">
                        Aljarray is a Unity-based infinite runner mobile game. Dodge obstacles and collect coins!
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 dark:text-slate-300">
                        <li>Procedurally generated levels</li>
                        <li>Supports both English and Arabic languages</li>
                    </ul>
                    <div className="mt-4 text-gray-500 dark:text-slate-400 text-sm">
                        <strong>Stack:</strong> Unity, C#
                    </div>

                    <div className="flex gap-4 mt-2">
                        <a href="https://omerym10.itch.io/alljaray" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded bg-amber-500 text-white font-semibold hover:bg-amber-600 transition-colors">Live Demo</a>
                    </div>
                </div>
            </main>
        </>
    );
}
