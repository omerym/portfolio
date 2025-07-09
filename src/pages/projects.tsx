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
            <main className="pt-10 sm:pt-16 px-4 sm:px-16">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 w-full ">
                        <ProjectCard
                            title="Countries Viewer"
                            icon={<Image src={withBasePath('/countries_viewer/Screenshot 2024-10-11 203328.png')} alt="" width={48} height={48} className="rounded" />}
                            description="A React + TypeScript app to view, search, and quiz yourself on countries and their details."
                            projectSlug="countries-viewer"
                            liveDemoUrl="https://omerym.github.io/CountriesViewer/"
                        />
                        <ProjectCard
                            title="Aljarray"
                            icon={<Image src={withBasePath('/aljarray/Icon.png')} alt="" width={48} height={48} className="rounded" />}
                            description="A unity infinite runner mobile game."
                            projectSlug="aljarray"
                        />
                    </div>
                </div>
            </main>
        </>
    );
}
