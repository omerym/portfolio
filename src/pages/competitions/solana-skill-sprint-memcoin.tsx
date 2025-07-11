import React from "react";
import Head from "next/head";
import { FaKaggle } from "react-icons/fa";

export default function SolanaSkillSprintMemcoin() {
    return (
        <>
            <Head>
                <title>Solana Skill Sprint - Memcoin Graduation | Omer Yassir</title>
            </Head>
            <main className="pt-10 px-2 sm:pt-10 sm:px-4 max-w-3xl sm:max-w-[80vw] mx-auto">
                <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6 border border-gray-200 dark:border-slate-700 flex flex-col gap-6 mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-500">
                        Solana Skill Sprint – Memcoin Graduation
                    </h1>

                    <h2 className="text-xl sm:text-2xl font-bold">Challenge:</h2>
                    <p className="text-gray-700 dark:text-slate-200">
                        This competition tasked participants with building a machine learning model to predict whether a newly launched Pump.fun token on Solana would
                        <strong> “graduate”</strong>—i.e., reach at least 85 SOL in liquidity—based on data from the first 100 blocks after minting. While most memecoins are rugged early, subtle on-chain behavior patterns can help identify potential success stories. The challenge encouraged participants to analyze wallet behavior, detect early trading signals, and model time-sensitive activity using curated datasets containing token creation, swaps, and liquidity events.
                    </p>

                    <h2 className="text-xl sm:text-2xl font-bold">My Solution:</h2>

                    <h3 className="font-bold">Extracting Features from Transactions:</h3>
                    <p className="text-gray-700 dark:text-slate-200 mt-2">
                        The dataset consisted of raw transaction data from the first 100 blocks post-mint. Since the data was split across multiple large files, I optimized the loading pipeline by <strong>reading files concurrently</strong>. This parallelized approach improved data loading performance by approximately <strong>20%</strong>.
                    </p>

                    <p className="text-gray-700 dark:text-slate-200 mt-2">
                        I then performed <strong>feature engineering</strong> by aggregating transactions <strong>per coin</strong>, generating features such as: <strong>number of transactions</strong>, <strong>number of blocks involved</strong>, <strong>total traded volume</strong>, and more.
                    </p>

                    <p className="text-gray-700 dark:text-slate-200 mt-2">
                        To extract more complex patterns, I engineered behavioral metrics such as the <strong>quote-to-balance ratio</strong>. I also computed a similar set of features restricted to transactions within the <strong>first 15 seconds</strong> after minting, in order to capture early momentum and trading activity.
                    </p>

                    <h3 className="font-bold">Building the Model:</h3>
                    <p className="text-gray-700 dark:text-slate-200">
                        I experimented with several models and evaluated them using stratified cross-validation. The final model was an <strong>XGBoost classifier</strong>, which yielded the highest performance on cross-validation.
                    </p>

                    <h3 className="font-bold">Feature Selection:</h3>
                    <p className="text-gray-700 dark:text-slate-200">
                        Due to the extensive feature engineering process, the dataset became high-dimensional with many redundant or weak features. To address this, I applied <strong>leave-one-out cross-validation (LOOCV)</strong> to eliminate features that negatively impacted performance. This pruning improved both generalization and model stability.
                    </p>

                    <h2 className="text-xl sm:text-2xl font-bold">Ranking and Score:</h2>
                    <p className="text-gray-700 dark:text-slate-200">
                        My solution achieved a <strong>log loss</strong> of <strong>0.036424</strong>, ranking <strong>250</strong> out of <strong>364</strong> participants.
                    </p>

                    <div className="flex flex-wrap gap-6 mt-2 justify-center">
                        <div className="flex-1 min-w-[260px] max-w-xs flex justify-center">
                            <a
                                href="https://www.kaggle.com/code/omerabdelmoneim/extracting-features-from-chunks"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full px-4 py-2 rounded bg-blue-600 text-white dark:bg-blue-500 font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors flex items-center whitespace-nowrap text-center justify-center"
                            >
                                <FaKaggle size={20} className="inline w-5 h-5 mr-2 align-middle text-white dark:text-white" />
                                Feature Engineering Notebook
                            </a>
                        </div>
                        <div className="flex-1 min-w-[260px] max-w-xs flex justify-center">
                            <a
                                href="https://www.kaggle.com/code/omerabdelmoneim/memcoin-graduation"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full px-4 py-2 rounded bg-blue-600 text-white dark:bg-blue-500 font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors flex items-center whitespace-nowrap text-center justify-center"
                            >
                                <FaKaggle size={20} className="inline w-5 h-5 mr-2 align-middle text-white dark:text-white" />
                                Model Notebook
                            </a>
                        </div>
                        <div className="flex-1 min-w-[260px] max-w-xs flex justify-center">
                            <a
                                href="https://www.kaggle.com/competitions/solana-skill-sprint-memcoin-graduation"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full px-4 py-2 rounded bg-amber-500 text-white font-semibold hover:bg-amber-600 transition-colors whitespace-nowrap text-center justify-center"
                            >
                                Competition Page
                            </a>
                        </div>
                    </div>

                    <div className="mt-4 text-gray-500 dark:text-slate-400 text-sm">
                        Python, XGBoost, Pandas, Feature Engineering, Classification
                    </div>
                </div>
            </main>
        </>
    );
}
