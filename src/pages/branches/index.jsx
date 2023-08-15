import RootLayout from "@/components/layout/RootLayout";
import BranchMapComponent from "@/components/ui/Branch/BrachMap";
import BranchTable from "@/components/ui/Branch/BranchTable";

const BranchesPage = () => {
  return (
    <>
      <section className="flex justify-center flex-col md:flex-row w-full">
        <div className="w-full md:w-3/4">
          <BranchTable />
        </div>
        <div className="w-full md:w-2/5 m-2 flex-shrink-0">
          <div className="sticky top-4">
            <BranchMapComponent />
          </div>
        </div>
      </section>
    </>
  );
};

BranchesPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default BranchesPage;

