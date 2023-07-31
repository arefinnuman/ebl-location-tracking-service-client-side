import Link from "next/link";

const AllLocationTable = ({ network }) => {
  const type = network?.type;
  let name, division, address, mapLink;

  if (type === "eblBranch") {
    name = network?.eblBranch?.branchName;
    division = network?.eblBranch?.branchDivision;
    address = network?.eblBranch?.branchAddress;
    mapLink = network?.eblBranch?.branchMapLink;
  } else if (type === "eblSubBranch") {
    name = network?.eblSubBranch?.subBranchName;
    division = network?.eblSubBranch?.subBranchDivision;
    address = network?.eblSubBranch?.subBranchAddress;
    mapLink = network?.eblSubBranch?.subBranchMapLink;
  } else if (type === "eblAgent") {
    name = network?.eblAgent?.agentName;
    division = network?.eblAgent?.agentDivision;
    address = network?.eblAgent?.agentAddress;
    mapLink = network?.eblAgent?.agentMapLink;
  } else if (type === "ebl365booths") {
    name = network?.ebl365booths?.boothName;
    division = network?.ebl365booths?.boothDivision;
    address = network?.ebl365booths?.boothAddress;
    mapLink = network?.ebl365booths?.boothMapLink;
  } else {
    name = "";
    division = "";
    address = "";
    mapLink = "";
  }

  return (
    <>
      <tbody>
        <tr className="hover" key={network._id}>
          <td>{network.serialNo}</td>
          <td>{name}</td>
          <td>{division}</td>
          <td>{address}</td>
          <td>
            <Link
              className="link link-primary link-hover"
              href={mapLink}
              target="_blank"
            >
              See on google maps
            </Link>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default AllLocationTable;

