import RootLayout from "@/components/layout/RootLayout";
import FootPrintMap from "@/components/ui/FootPrints/FootPrintMap";

const ExploreFootPrintsPage = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row">
      <div
        style={{ height: "90vh" }}
        className="bg-primary text-white p-8 md:w-1/3 flex flex-col justify-center max-w-95vh"
      >
        <h2 className="text-3xl font-semibold mb-4">Explore FootPrints</h2>
        <p className="text-base mb-6">
          Discover the distribution of branches, sub-branches, agent outlets,
          and EBL365 booths across Bangladesh.
        </p>
        <p className="text-sm">
          Click on a marker to view detailed information about the selected
          location.
        </p>
      </div>

      <div className="w-full h-full md:w-4/5 md:h-4/5 bg-white rounded-lg shadow-md overflow-hidden">
        <FootPrintMap />
      </div>
    </section>
  );
};

ExploreFootPrintsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default ExploreFootPrintsPage;

