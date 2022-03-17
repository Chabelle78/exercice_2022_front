import { Link } from "react-router-dom";

export default function CreateUserButton() {
  return (
    <>
      <Link to={"/create-wilder"}>
        <button
     
          className="mx-96 mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
        >
          Create WILDER
        </button>
      </Link>
    </>
  );
}
