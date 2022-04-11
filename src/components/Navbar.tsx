import { Link } from "react-router-dom";

export default function Navbar() : JSX.Element{
  return (
    <>
      <Link to={"/"}>
        <div className="h-14 bg-gradient-to-r from-purple-500 to-pink-500 text-center">
          Wilders Book
        </div>
      </Link>
    </>
  );
}
