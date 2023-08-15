import RootLayout from "@/components/layout/RootLayout";
import AgentTableMap from "@/components/ui/AgentOutlet/AgentOutletMap";
import AgentOutletTable from "@/components/ui/AgentOutlet/AgentOutletTable";

const AgentOutletPage = () => {
  return (
    <>
      <section className="flex justify-center flex-col md:flex-row w-full">
        <div className="w-full md:w-3/5">
          <AgentOutletTable />
        </div>

        <div className="w-full md:w-2/5 flex-shrink-0">
          <div className="sticky top-4">
            <AgentTableMap />
          </div>
        </div>
      </section>
    </>
  );
};

AgentOutletPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default AgentOutletPage;

