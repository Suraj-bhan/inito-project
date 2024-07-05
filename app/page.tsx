import MeasureProgesterone from "@/components/MeasureProgesterone";
import OnlyKit from "@/components/OnlyKit";
import PredictAndConfirm from "@/components/PredictAndConfirm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white text-darkgreen">
      <OnlyKit />
      <PredictAndConfirm />
      <MeasureProgesterone />
    </main>
  );
}
