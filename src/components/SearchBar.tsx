import { useState } from "react";

export default function SearchBar(): JSX.Element {
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
    
  };

  return (
    <div>
      <input
        type="text"
        value={search}
        placeholder="Search a wilder"
        onChange={onChange}
        className="mx-96 mb-4 border-solid hover:border-dotted"
      />
    </div>
  );
}
