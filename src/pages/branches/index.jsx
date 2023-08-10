import RootLayout from "@/components/layout/RootLayout";
import BranchMapComponent from "@/components/ui/Branch/BrachMap";
import BranchesUiComponent from "@/components/ui/Branch/BranchTable";

const BranchesPage = () => {
  return (
    <section className="mx-auto justify-center flex w-full">
      <BranchesUiComponent className="w-1/3" />
      <BranchMapComponent className="w-2/3" />
    </section>
  );
};

BranchesPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default BranchesPage;

