import Footer from "@/components/Footer";
import InitoSmartSection from "@/components/InitoSmart";
import LowerSection from "@/components/LowerSection";
import UpperSection from "@/components/UpperSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white text-darkgreen">
      <UpperSection />
      <InitoSmartSection />
      <LowerSection />
      <Footer />
    </main>
  );
}
