import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="h-14 bg-gradient-to-r from-purple-500 to-pink-500 text-center flex flex-col">
        Wilders Book
        <Link to={"/"} >
        <button>Back to Wilders Cards</button>
        </Link>
        </div>
    </>
  );
}
