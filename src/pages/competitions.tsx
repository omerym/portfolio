import Head from "next/head";
export default function Competitions() {
    return (
        <>
            <Head>
                <title>Omer Yassir - Competitions</title>
            </Head>
            <div className="flex flex-col items-center justify-center min-h-screen p-8">
                <h1 className="text-4xl font-bold mb-4">Competitions</h1>
                <p className="text-lg text-gray-600">This is the competitions page. Add your competitions here.</p>
            </div>
        </>
    );
}
