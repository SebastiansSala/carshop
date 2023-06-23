'use client'
import { FormEvent, useContext } from "react";
import { SearchbarContext } from "@/providers/searchbar";

const Searchbar = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const { search, setSearch } = useContext(SearchbarContext);

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    const regexedSearch = event.currentTarget.value.replace(/^\s+|\s+(?=\s)/g, "");
    setSearch(regexedSearch);
  }

  return (
    <form
      className="flex flex-1 hover:shadow-md shadow-sm transition"
      onSubmit={(e) => handleSubmit(e)}
    >
      <input
        type="text"
        placeholder="Looking for a model?"
        className="pb-3 rounded-l text-xs md:text-base pt-1 px-2 outline-none w-full bg-white"
        value={search}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="py-2 px-4 bg-blue-500 rounded-r hover:bg-blue-400 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
    </form>
  );
};

export default Searchbar;
