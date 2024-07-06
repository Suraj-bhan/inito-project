import Footer from "@/components/Footer";
import InitoSmartSection from "@/components/InitoSmart";
import UpperSection from "@/components/UpperSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white text-darkgreen">
      <UpperSection />
      <InitoSmartSection />
      <Footer />
    </main>
  );
}
