import Head from "next/head";
import { FaGithub, FaLinkedin, FaKaggle } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Head>
        <title>Omer Yassir</title>
      </Head>
      <main className="pt-10 px-2 sm:pt-16 sm:px-4 max-w-3xl mx-auto bg-gray-50 dark:bg-slate-900 min-h-screen">
        <div className="text-start bg-white dark:bg-slate-800 rounded-lg shadow p-4 sm:p-8 border border-gray-200 dark:border-slate-700">
          <h1 className="text-3xl sm:text-5xl font-bold mb-2 text-blue-600 dark:text-blue-500">Omer Yassir</h1>
          <h2 className="text-xl sm:text-2xl text-gray-800 dark:text-slate-100 mb-1">Software & ML Engineer</h2>
          <h3 className="text-lg sm:text-xl text-amber-500 dark:text-amber-500">Kaggle & Zindi Competitor</h3>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8">
            <a
              href="https://github.com/omerym"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-800 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-500 transition-colors text-base sm:text-lg font-semibold"
            >
              <FaGithub size={22} className="text-gray-700 dark:text-slate-400" /> Github
            </a>
            <a
              href="https://www.linkedin.com/in/omer-yassir-9530842b5"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-800 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-500 transition-colors text-base sm:text-lg font-semibold"
            >
              <FaLinkedin size={22} className="text-gray-700 dark:text-slate-400" /> LinkedIn
            </a>
            <a
              href="https://www.kaggle.com/omerabdelmoneim"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-800 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-500 transition-colors text-base sm:text-lg font-semibold"
            >
              <FaKaggle size={22} className="text-gray-700 dark:text-slate-400" /> Kaggle
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
