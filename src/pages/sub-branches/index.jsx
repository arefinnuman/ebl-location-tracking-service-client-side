import RootLayout from "@/components/layout/RootLayout";
import SubBranchMap from "@/components/ui/Sub Branch/SubBranchMap";
import SubBranchTable from "@/components/ui/Sub Branch/SubBranchTable";

const SubBranchPage = () => {
  return (
    <section className="mx-auto justify-center flex w-full">
      <SubBranchTable className="w-2/3" />
      <SubBranchMap className="w-1/3" />
    </section>
  );
};

export default SubBranchPage;

SubBranchPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

