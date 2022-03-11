import CreateUserButton from "./CreateUserButton";
import Cards from "./Cards";
import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    <>
      <SearchBar />
      <CreateUserButton />
      <Cards />
    </>
  );
}

