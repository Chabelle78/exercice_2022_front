import { Link } from "react-router-dom";
import { wilder } from "../api/requests";
import Skills from "./Skills";

export default function NewCard({ user }) {
  const handleClickDelete = () => {
    console.log("jai clique sur delete");
    wilder.delete(user._id);
    window.location.reload();
  };

  return (
    <>
      <div className="border-8 border-gray-200 text-center" key={user._id}>
        <img
          src="https://source.unsplash.com/600x400/?people"
          alt=""
          width="600"
          className=""
        />
        <h2>{user.name}</h2>
        <p>{user.city}</p>
        <p>{user.description}</p>
        <Skills data={user.skills} />
        <div className="flex justify-around">
          <Link to={`/wilder/${user._id}`}>
            <button className="h-6 px-5 m-2 text-red-100 transition-colors duration-150 bg-blue-700 rounded-lg focus:shadow-outline hover:bg-blue-800">Modify</button>
          </Link>
          <button onClick={handleClickDelete} className="h-6 px-5 m-2 text-red-100 transition-colors duration-150 bg-red-700 rounded-lg focus:shadow-outline hover:bg-red-800">Delete</button>
        </div>
      </div>
    </>
  );
}
