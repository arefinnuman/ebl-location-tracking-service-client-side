import RootLayout from "@/components/layout/RootLayout";
import FootPrintMap from "@/components/ui/FootPrints/FootPrintMap";

const ExploreFootPrintsPage = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row p-4">
      <div
        style={{ height: "90vh" }}
        className="bg-primary text-white p-8 md:w-1/3 flex flex-col justify-center max-w-95vh "
      >
        <h2 className="text-4xl font-semibold mb-6">Explore FootPrints</h2>
        <p className="text-lg mb-8">
          Discover the distribution of branches, sub-branches, agent outlets,
          and EBL365 booths across Bangladesh.
        </p>
        <p className="text-sm mb-4">
          Click on a marker to view detailed information about the selected
          location.
        </p>
      </div>

      <div className="w-full h-full md:w-2/3 bg-white rounded-lg shadow-lg overflow-hidden">
        <FootPrintMap />
      </div>
    </section>
  );
};

ExploreFootPrintsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default ExploreFootPrintsPage;

