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

  const branches = branchesData?.data || [];
  const subBranches = subBranchesData?.data || [];
  const agentOutlets = agentOutletsData?.data || [];
  const ebl365Booths = ebl365Data?.data || [];

  const numberOfBranches = branches?.length;
  const numberOfSubBranches = subBranches?.length;
  const numberOfAgentOutlets = agentOutlets?.length;
  const numberOfEbl365Booths = ebl365Booths?.length;

  const cardData = [
    {
      id: 1,
      title: "Branches",
      description: `${numberOfBranches} Branches available all over the Country`,
      image:
        "https://images.unsplash.com/photo-1601041084273-6114cad589d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      link: "/branches",
    },
    {
      id: 2,
      title: "Sub Branches",
      description: `${numberOfSubBranches} Sub Branches available all over the Country`,
      image:
        "https://images.unsplash.com/photo-1642060731115-ee52a3c78b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      link: "/sub-branches",
    },
    {
      id: 3,
      title: "Agent Banking Outlets",
      description: `${numberOfAgentOutlets} Agent Banking Outlets available all over the Country`,
      image:
        "https://images.unsplash.com/photo-1642060731141-3899c9ad2308?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      link: "/agent-banking-outlets",
    },
    {
      id: 4,
      title: "Ebl 365 Booths",
      description: `${numberOfEbl365Booths} Ebl 365 Booths available all over the Country`,
      image:
        "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
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

