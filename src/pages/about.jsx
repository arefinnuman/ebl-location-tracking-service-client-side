import RootLayout from "@/components/layout/RootLayout";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <h1 className="font-bold text-2xl">This is about page</h1>
    </div>
  );
};

export default AboutPage;

AboutPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

