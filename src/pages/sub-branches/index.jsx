import RootLayout from "@/components/layout/RootLayout";
import SubBranchMap from "@/components/ui/Sub Branch/SubBranchMap";
import SubBranchTable from "@/components/ui/Sub Branch/SubBranchTable";

const SubBranchPage = () => {
  return (
    <section className="flex justify-center flex-col md:flex-row w-full">
      <div className="w-full md:w-3/5">
        <SubBranchTable />
      </div>
      <div className="w-full md:w-2/5 flex-shrink-0">
        <div className="sticky top-4">
          <SubBranchMap />
        </div>
      </div>
    </section>
  );
};

SubBranchPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default SubBranchPage;

