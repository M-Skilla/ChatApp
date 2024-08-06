import React from "react";
import { Search } from "lucide-react";

const SearchInput = () => {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full"
      />
      <button type="submit" className="btn btn-circle bg-teal-500 text-white">
        <Search className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;

// const SearchInput = () => {
//   return (
//     <form>
//       <input
//         type="text"
//         placeholder="Search..."
//         className="input input-bordered rounded-full"
//       />
//       <button type="submit" className="btn btn-circle bg-teal-500 text-white">
//         <Search className="w-6 h-6 outline-none" />
//       </button>
//     </form>
//   );
// };
