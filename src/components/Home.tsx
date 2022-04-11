import CreateUserButton from "./CreateUserButton";
import Cards from "./Cards";
import SearchBar from "./SearchBar";

export default function Home(): JSX.Element {
  return (
    <>
      <SearchBar />
      <CreateUserButton />
      <Cards />
    </>
  );
}

