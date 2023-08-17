import RootLayout from "@/components/layout/RootLayout";
import HomeCardSection from "@/components/ui/Home/HomeCardSection";
import HomeHeroPage from "@/components/ui/Home/HomeHero";
import WelcomeSection from "@/components/ui/Home/WelcomeSection";

export default function HomePage() {
  return (
    <>
      <HomeHeroPage />
      <WelcomeSection />
      <HomeCardSection />
    </>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

