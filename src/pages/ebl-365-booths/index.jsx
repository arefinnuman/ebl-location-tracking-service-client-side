import RootLayout from "@/components/layout/RootLayout";
import Ebl365Map from "@/components/ui/Ebl365/ebl365Map";
import Ebl365Table from "@/components/ui/Ebl365/ebl365Table";

const Ebl365Page = () => {
  return (
    <section className="mx-auto justify-center flex w-full">
      <Ebl365Table className="w-2/3" />
      <Ebl365Map className="w-1/4" />
    </section>
  );
};

Ebl365Page.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default Ebl365Page;

