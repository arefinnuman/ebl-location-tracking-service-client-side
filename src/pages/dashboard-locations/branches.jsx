import DashboardLayout from "@/components/layout/DashboardLayout";
import DashboardBranchTable from "@/components/ui/Dashboard/DashboardBranchTable";

const DashboardBranches = () => {
  // const [branches, setBranches] = useState([]);

  // const {
  //   data: branchesData,
  //   refetch,
  //   isLoading,
  // } = useGetBranchesQuery({
  //   refetchOnMountOrArgChange: true,
  //   pollingInterval: 30000,
  // });

  // useEffect(() => {
  //   if (branchesData) {
  //     setBranches(branchesData.data);
  //   }
  // }, [branchesData]);

  // const [selectedBranch, setSelectedBranch] = useState(null);

  // if (isLoading) {
  //   return (
  //     <div className="flex justify-center items-center h-screen">
  //       <span className="loading loading-lg"></span>
  //     </div>
  //   );
  // }

  return (
    <div>
      <DashboardBranchTable />
    </div>
  );
};

export default DashboardBranches;

DashboardBranches.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

// <div>
//   <h1 className="text-2xl font-bold text-center my-4">
//     All Branches in the Bangladesh
//   </h1>

//   <div className="max-w-6xl px-6 mx-auto bg-white rounded-lg">
//     <div className="overflow-x-auto">
//       <table className="table w-full border-collapse">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="px-4 py-3 border w-1/8">Sl</th>
//             <th className="px-4 py-3 border md:w-1/4">Name</th>
//             <th className="px-4 py-3 border md:w-1/6">District</th>
//             <th className="px-4 py-3 border md:w-1/4">Address</th>
//             <th className="px-4 py-3 border md:w-1/8">Latitude</th>
//             <th className="px-4 py-3 border md:w-1/8">Longitude</th>
//             <th className="px-4 py-3 border md:w-1/8">Edit</th>
//             <th className="px-4 py-3 border md:w-1/8">Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {branches &&
//             branches?.map((branch, index) => (
//               <tr className="hover:bg-gray-50" key={branch._id}>
//                 <td className="px-4 py-3 text-center border">
//                   {index + 1}
//                 </td>
//                 <td className="px-4 py-3 border">{branch?.branchName}</td>
//                 <td className="px-4 py-3 border">
//                   {branch?.branchDivision}
//                 </td>
//                 <td className="px-4 py-3 border">
//                   {branch?.branchAddress}
//                 </td>
//                 <td className="px-4 py-3 border">
//                   {branch?.branchLocation.lat}
//                 </td>
//                 <td className="px-4 py-3 border ">
//                   {branch?.branchLocation.long}
//                 </td>
//                 <td className="px-4 py-3 border ">
//                   <button
//                     onClick={() => setSelectedBranch(branch)}
//                     className="btn btn-sm btn-warning"
//                   >
//                     Edit
//                   </button>
//                 </td>
//                 <td className="px-4 py-3 border">
//                   <button
//                     onClick={() => handleDeleteBranch(branch._id)}
//                     className="btn btn-sm btn-error"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//         </tbody>
//       </table>

//       {selectedBranch && (
//         <dialog
//           id="my_modal_2"
//           className="modal modal-bottom sm:modal-middle "
//           open
//         >
//           <section
//             method="dialog"
//             className="modal-box border border-secondary"
//           >
//             <UpdateBranchForm selectedBranch={selectedBranch} />
//             <div className="modal-action text-center flex justify-center">
//               <button
//                 className="btn btn-sm btn-outline "
//                 onClick={() => setSelectedBranch(null)}
//               >
//                 Close The Modal
//               </button>
//             </div>
//           </section>
//         </dialog>
//       )}
//     </div>
//   </div>
// </div>

