import React from "react";
import Head from "next/head";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { withBasePath } from "@/utils/withBasePath";

export default function AminiSoilPrediction() {
    return (
        <>
            <Head>
                <title>Amini Soil Prediction Challenge | Omer Yassir</title>
            </Head>
            <main className="pt-10 px-2 sm:pt-10 sm:px-4 max-w-3xl sm:max-w-[80vw] mx-auto">
                <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6 border border-gray-200 dark:border-slate-700 flex flex-col gap-6 mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-500">Amini Soil Prediction Challenge</h1>
                    <h2 className="text-1xl sm:text-2xl font-bold">Challenge:</h2>
                    <p className="text-gray-700 dark:text-slate-200">
                        This challenge focuses on developing a machine learning model that can predict the Gap between available and required amount of 11 key soil nutrients, based on:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 dark:text-slate-300">
                        <li>Available nutrient amount</li>
                        <li>Soil test results from 2019</li>
                        <li>Environmental and geospatial features (e.g., rainfall, temperature, soil texture)</li>
                    </ul>
                    <p className="text-gray-700 dark:text-slate-200 mt-2">
                        The data represents farms across diverse regions in Africa, offering varying conditions in climate, soil fertility, and geography. The model&apos;s goal is to help identify nutrient deficiencies that, if addressed, could significantly improve maize productivity and support more sustainable agricultural practices.
                    </p>
                    <h2 className="text-xl sm:text-2xl font-bold mt-6 border-b border-blue-200 dark:border-blue-900 pb-1">Solution Overview</h2>
                    <ol className="list-decimal pl-6 text-gray-700 dark:text-slate-300 mt-2 space-y-4">
                        <li>
                            <span className="font-semibold">Gap Prediction:</span> Predict the required amount of each nutrient, then subtract the available amount to get the gap.
                        </li>
                        <li>
                            <span className="font-semibold">Incorporate Earth Observation Data:</span> Add features from Sentinel-1, Sentinel-2, and MODIS. For each farm, use a <code>KNeighbors</code> model to estimate the mean of nearby sites, enriching both train and test sets.
                        </li>
                        <li>
                            <span className="font-semibold">Utilize Relations Between Target Variables:</span> The nutrient with the highest value is always Ca or Na. A <code>HistGradientBoostingClassifier</code> predicts which is dominant, and this is added as a binary feature.
                            <Image
                                src={withBasePath("/amini-soil-predictions/nutrient_distibution.png")}
                                alt="Distribution of nutrients by maximum nutrient (Ca or Na) in the Amini Soil Prediction Challenge dataset"
                                width={0}
                                height={600}
                                style={{ maxWidth: "90%", width: 'auto', maxHeight: "600px" }}
                                className="rounded border border-gray-200 dark:border-slate-700 my-4 mx-auto"
                                loading="lazy"
                            />
                        </li>

                        <li>
                            <span className="font-semibold">Cluster Target Variables:</span> Use <code>K-Means</code> to group targets, then a <code>HistGradientBoostingRegressor</code> to predict cluster membership, adding it as a feature.
                        </li>
                        <li>
                            <span className="font-semibold">Feature Selection:</span>
                            After adding these feature the dataset had high dimensionality,with many correlated and redundent features. This added too much noise and made the model very unstable.<br />
                            Perform leave-one-out cross-validation (LOOCV) to drop features with negative or negligible impact, reducing redundancy and instability.
                        </li>
                        <li>
                            <span className="font-semibold">Final Model:</span> After model comparison, <code>HistGradientBoostingRegressor</code> was chosen for its superior cross-validation score.
                        </li>

                    </ol>
                    <div>Note: each of these steps was cross validated to ensure that it actually improved the model.</div>
                    <h2 className="text-xl sm:text-2xl font-bold">Ranking and Score:</h2>
                    <p className="text-gray-700 dark:text-slate-200">
                        My solution achieved a <strong>RMSE</strong> of <strong>1100.665305</strong>, ranking <strong>44</strong> out of <strong>308</strong> participants.
                    </p>
                    <div className="flex flex-wrap gap-6 mt-2 justify-center">
                        <a
                            href="https://github.com/omerym/Amini-Soil-Prediction-Challenge"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded bg-blue-600 text-white dark:bg-blue-500 dark:text-white font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors flex items-center whitespace-nowrap text-center"
                        >
                            <FaGithub size={20} className="inline w-5 h-5 mr-2 align-middle text-white dark:text-white" />
                            Solution Code
                        </a>
                        <a
                            href="https://zindi.africa/competitions/amini-soil-prediction-challenge"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded bg-amber-500 text-white font-semibold hover:bg-amber-600 transition-colors whitespace-nowrap text-center"
                        >
                            Competition Page
                        </a>
                    </div>

                    <div className="mt-4 text-gray-500 dark:text-slate-400 text-sm">
                        Python, Scikit-learn, KNeighbors, HistGradientBoosting, KMeans, Satellite Data (Sentinel-1/2, MODIS)
                    </div>
                </div>
            </main >
        </>
    );
}
