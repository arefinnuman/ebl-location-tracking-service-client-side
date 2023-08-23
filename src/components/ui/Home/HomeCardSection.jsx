import {
  useGet365BoothsQuery,
  useGetAgentOutletsQuery,
  useGetBranchesQuery,
  useGetSubBranchesQuery,
} from "@/redux/api/api";
import HomeCardDetails from "./HomeCardDetails";

const HomeCardSection = () => {
  const { data: branchesData } = useGetBranchesQuery();
  const { data: subBranchesData } = useGetSubBranchesQuery();
  const { data: agentOutletsData } = useGetAgentOutletsQuery();
  const { data: ebl365Data } = useGet365BoothsQuery();

  const numberOfBranches = branchesData?.data?.length;
  const numberOfSubBranches = subBranchesData?.data?.length;
  const numberOfAgentOutlets = agentOutletsData?.data?.length;
  const numberOfEbl365Booths = ebl365Data?.data?.length;

  const cardData = [
    {
      id: 1,
      title: `<span class="text-primary text-2xl font-bold">Branch</span>`,
      description: `Having <span class="text-blue-500 text-xl font-bold">${numberOfBranches}</span> Branches across the country.`,
      image: "https://i.ibb.co/c1VZf8v/IMG-2728.jpg",
      link: "/branches",
    },
    {
      id: 2,
      title: `<span class="text-primary text-2xl font-bold">Sub Branch</span>`,
      description: `Having <span class="text-blue-500 text-xl font-bold">${numberOfSubBranches}</span> Sub Branches across the Country`,
      image: "https://i.ibb.co/wL33r5X/IMG-2734.jpg",
      link: "/sub-branches",
    },
    {
      id: 3,
      title: `<span class="text-primary text-2xl font-bold">Agent Outlet</span>`,
      description: `Having <span class="text-blue-500 text-xl font-bold">${numberOfAgentOutlets}</span> Agent Banking Outlets across the Country`,
      image: "https://i.ibb.co/Gs9Lgnv/IMG-2729.jpg",
      link: "/agent-banking-outlets",
    },
    {
      id: 4,
      title: `<span class="text-primary text-2xl font-bold">EBL 365 Booth</span>`,
      description: `Having <span class="text-blue-500 text-xl font-bold">${numberOfEbl365Booths}</span> Ebl 365 Booths across the country with a fleet size 278`,
      image: "https://i.ibb.co/tJYMXTL/IMG-2732.jpg",
      link: "/ebl-365-booths",
    },
  ];

  return (
    <>
      <div className="mt-16 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {cardData?.map((card) => (
          <HomeCardDetails key={card.id} card={card} />
        ))}
      </div>
    </>
  );
};

export default HomeCardSection;

