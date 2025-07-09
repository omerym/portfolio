import Head from "next/head";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";
import { withBasePath } from "@/utils/withBasePath";


export default function Projects() {
    return (
        <>
            <Head>
                <title>Projects | Omer Yassir</title>
            </Head>
            <main className="pt-10 px-2 sm:pt-16 sm:px-4 max-w-5xl mx-auto min-h-screen">
                <div className="grid gap-8 sm:grid-cols-2">
                    <ProjectCard
                        title="Countries Viewer"
                        icon={<Image src={withBasePath('/countries_viewer/Screenshot 2024-10-11 203328.png')} alt="" width={48} height={48} className="rounded" />}
                        description="A React + TypeScript app to view, search, and quiz yourself on countries and their details."
                        projectSlug="countries-viewer"
                    />
                    <ProjectCard
                        title="Aljarray"
                        icon={<Image src={withBasePath('/aljarray/Icon.png')} alt="" width={48} height={48} className="rounded" />}
                        description="A unity infinite runner mobile game."
                        projectSlug="aljarray"
                    />
                </div>
            </main>
        </>
    );
}
