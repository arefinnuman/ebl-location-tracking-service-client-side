import HomeCardDetails from "./HomeCardDetails";

const HomeCardSection = () => {
  const cardData = [
    {
      id: 1,
      title: "Branches",
      description: "We have as of now 100+ branches all over Bangladesh",
      image:
        "https://images.unsplash.com/photo-1601041084273-6114cad589d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      link: "/branches",
    },
    {
      id: 2,
      title: "Sub Branches",
      description: "We have as of now 100+ sub branches all over Bangladesh",
      image:
        "https://images.unsplash.com/photo-1642060731115-ee52a3c78b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      link: "/sub-branches",
    },
    {
      id: 3,
      title: "Agent Banking Outlets",
      description:
        "We have as of now 100+ agent banking outlets all over Bangladesh",
      image:
        "https://images.unsplash.com/photo-1642060731141-3899c9ad2308?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      link: "/agent-banking-outlets",
    },
    {
      id: 4,
      title: "Ebl 365 Booths",
      description: "We have as of now 100+ Ebl 365 Booths all over Bangladesh",
      image:
        "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      link: "/ebl-365-booths",
    },
  ];

  return (
    <>
      <div className="mt-16 grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
        {cardData?.map((card) => (
          <HomeCardDetails key={card.id} card={card} />
        ))}
      </div>
    </>
  );
};

export default HomeCardSection;

