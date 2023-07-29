import RootLayout from "@/components/layout/RootLayout";
import OfferSection from "@/components/ui/OfferSection";
import WelcomeSection from "@/components/ui/WelcomeSection";

export default function HomePage() {
  return (
    <div>
      <WelcomeSection />
      <OfferSection />
    </div>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

