import RootLayout from "@/components/layout/RootLayout";
import HomeCardSection from "@/components/ui/HomeCardSection";
import OfferSection from "@/components/ui/OfferSection";
import WelcomeSection from "@/components/ui/WelcomeSection";

export default function HomePage() {
  return (
    <>
      <WelcomeSection />
      <HomeCardSection />
      <OfferSection />
    </>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

