import Head from "next/head";

export default function Projects() {
    return (
        <>
            <Head>
                <title>Omer Yassir - Projects</title>
            </Head>
            <div className="flex flex-col items-center justify-center min-h-screen p-8">
                <h1 className="text-4xl font-bold mb-4">Project</h1>
                <p className="text-lg text-gray-600">This is the project page. Add your project details here.</p>
            </div>
        </>
    );
}
