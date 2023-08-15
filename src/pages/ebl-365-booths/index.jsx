import RootLayout from "@/components/layout/RootLayout";
import Ebl365Map from "@/components/ui/Ebl365/Ebl365Map";
import Ebl365Table from "@/components/ui/Ebl365/Ebl365Table";

const Ebl365Page = () => {
  return (
    <section className="flex justify-center flex-col md:flex-row w-full">
      <div className="w-full md:w-3/4">
        <Ebl365Table />
      </div>
      <div className="w-full md:w-2/5 flex-shrink-0">
        <div className="sticky top-4">
          <Ebl365Map />
        </div>
      </div>
    </section>
  );
};

Ebl365Page.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default Ebl365Page;

