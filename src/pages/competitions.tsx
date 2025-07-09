import Head from "next/head";
import CompetitionCard from "@/components/CompetitionCard";

export default function Competitions() {
    return (
        <>
            <Head>
                <title>Competitions | Omer Yassir</title>
            </Head>
            <main className="pt-10 sm:pt-16 px-4 sm:px-16">
                <div className="max-w-7xl mx-auto">

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 w-full ">
                        <CompetitionCard
                            title="Amini Soil Prediction Challenge"
                            source="Zindi"
                            description="Predict soil properties from satellite and field data. A machine learning challenge for African agriculture."
                            solutionUrl="/competitions/amini-soil-prediction"
                            solutionTarget="_self"
                            showIcon={false}
                            competitionUrl="https://zindi.africa/competitions/amini-soil-prediction-challenge"
                        />
                    </div>
                </div>
            </main>
        </>
    );
}
