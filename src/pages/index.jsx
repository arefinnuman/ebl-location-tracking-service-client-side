import RootLayout from "@/components/layout/RootLayout";
import HomeCardSection from "@/components/ui/HomeCardSection";
import WelcomeSection from "@/components/ui/WelcomeSection";

export default function HomePage() {
  return (
    <>
      <WelcomeSection />
      <HomeCardSection />
    </>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
