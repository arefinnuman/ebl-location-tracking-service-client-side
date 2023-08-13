import RootLayout from "@/components/layout/RootLayout";
import AgentTableMap from "@/components/ui/AgentOutlet/AgentOutletMap";
import AgentOutletTable from "@/components/ui/AgentOutlet/AgentOutletTable";

const AgentOutletPage = () => {
  return (
    <section className="mx-auto justify-center flex w-full">
      <AgentOutletTable className="w-2/3" />
      <AgentTableMap className="w-1/3" />
    </section>
  );
};

AgentOutletPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default AgentOutletPage;

