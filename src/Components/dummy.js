import React from "react";
function SearchBar({onSearch}){
  const [searchTerm, setSearchTerm] = React.useState('');
  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };
  return (
    <div className="relative mt-4">
      <form onSubmit={handleSearch} className="w-full max-w-xl mx-auto">
        <input 
          type="search" 
          placeholder="Search Google" 
          className="bg-gray-200 border border-gray-300 text-sm rounded-full w-full p-2 pl-10 outline-none focus:border-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="absolute left-0 top-0 mt-2 ml-2">
          
        </button>
      </form>
    </div>
  );
}


export default SearchBar;