import { wilder } from "../api/requests";
import { useQuery } from "react-query";
import Skills from "./Skills.jsx";

export default function Cards() {
  const { isLoading, error, data } = useQuery("wilders", () => wilder.getAll());

  if (isLoading) {
    return <p className="text-white">Is Loading....</p>;
  }

  if (error) {
    return <p className="text-white">An error occurred: {error.message}</p>;
  }

  return (
    <div className="grid grid-cols-3 gap-2">
      {data?.result.map((user) => {
        return (
          <div className="border-8 border-gray-200  text-center">
          <>
         

            <img key={user._id}
              src="https://source.unsplash.com/600x400/?people"
              alt=""
              width="600"
              className=""
            />

            <h2>{user.name}</h2>
            <p>{user.city}</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              alias provident soluta accusamus, veritatis sint libero fugiat,
              corporis asperiores minima reiciendis vel recusandae similique
              harum pariatur, aliquam aliquid porro quos.
            </p>
            <Skills data={user.skills} />
          </>
    </div>
        );
      })}
    </div>
  );
}
