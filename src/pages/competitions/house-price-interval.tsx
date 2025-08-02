import React from "react";
import Head from "next/head";
import Image from "next/image";
import { withBasePath } from "@/utils/withBasePath";
import { FaKaggle } from "react-icons/fa";

export default function HousePriceInterval() {
    return (
        <>
            <Head>
                <title>House Price Prediction Interval | Omer Yassir</title>
            </Head>
            <main className="pt-10 px-2 sm:pt-10 sm:px-4 max-w-3xl sm:max-w-[80vw] mx-auto">
                <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6 border border-gray-200 dark:border-slate-700 flex flex-col gap-6 mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-500">Prediction interval competition II: House price</h1>
                    <h2 className="text-1xl sm:text-2xl font-bold">Challenge:</h2>
                    <p className="text-gray-700 dark:text-slate-200">
                        The Prediction Interval Competition II: House Price focuses on developing <strong>regression models</strong> that generate accurate and narrow <strong>prediction intervals</strong> for house sale prices, rather than traditional point predictions. This shift emphasizes the importance of <strong>quantifying uncertainty</strong> in predictions, which is often more useful in real-world applications. Participants are evaluated based on how tight and reliable their prediction intervals are, with the goal of building models that balance <strong>coverage</strong> and <strong>efficiency</strong>.
                    </p>
                    <h2 className="text-xl sm:text-2xl font-bold mt-6 border-b border-blue-200 dark:border-blue-900 pb-1">Model Validation</h2>
                    <p className="text-gray-700 dark:text-slate-200">
                        In the Prediction Interval Competition II, careful model validation is crucial due to time-dependent trends in house prices from 1999 to 2025. Traditional K-Fold and time series validation methods have limitations. A balanced approach—using a temporal cutoff and combining time-respecting K-Fold CV with a small holdout set—offers a better estimate of real-world performance. This strategy helps avoid overconfidence and ensures robustness on newer data.
                        <a
                            href="https://www.kaggle.com/competitions/prediction-interval-competition-ii-house-price/discussion/588017"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 font-semibold underline underline-offset-2 transition-colors"
                        >
                            Read more
                        </a>
                    </p>
                    <h2 className="text-xl sm:text-2xl font-bold mt-6 border-b border-blue-200 dark:border-blue-900 pb-1">Solution Overview</h2>
                    <p>
                        I created a flexible wrapper called <code>QuantilePredictor</code> to generate prediction intervals for any regression model. It fits a base estimator, computes residuals, and uses the <code>t</code>-distribution to calculate symmetric intervals around the predictions. I support both <strong>absolute</strong> and <strong>relative</strong> residual modes, and I optionally <strong>clip</strong> the intervals to stay within the observed training target range.
                    </p>

                    <p>
                        To improve prediction accuracy, I first fit a separate model to capture the <strong>trend</strong> in the target variable. Then, I trained <strong>CatBoost</strong> on the <em>detrended</em> target (i.e., the residuals after removing the trend). This two-step approach allows the interval model to focus on modeling the noise component more effectively, leading to more realistic and calibrated prediction intervals.
                    </p>

                    <div>Note: each of these steps was validated to ensure that it actually improved the model.</div>
                    <h2 className="text-xl sm:text-2xl font-bold">Ranking and Score:</h2>
                    <p className="text-gray-700 dark:text-slate-200">
                        My solution achieved a <strong>Winkler Interval score</strong> of <strong>
                            388384.09</strong>, ranking <strong>361</strong> out of <strong>691</strong> participants.
                    </p>
                    <div className="flex flex-wrap gap-6 mt-2 justify-center">
                        <a
                            href="https://www.kaggle.com/code/omerabdelmoneim/house-price-prediction"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded bg-blue-600 text-white dark:bg-blue-500 dark:text-white font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors flex items-center whitespace-nowrap text-center"
                        >
                            <FaKaggle size={20} className="inline w-5 h-5 mr-2 align-middle text-white dark:text-white" />
                            Solution Code
                        </a>
                        <a
                            href="https://www.kaggle.com/competitions/prediction-interval-competition-ii-house-price"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded bg-amber-500 text-white font-semibold hover:bg-amber-600 transition-colors whitespace-nowrap text-center"
                        >
                            Competition Page
                        </a>
                    </div>

                    <div className="mt-4 text-gray-500 dark:text-slate-400 text-sm">
                        Python, Scikit-learn, Catboost
                    </div>
                </div>
            </main >
        </>
    );
}
