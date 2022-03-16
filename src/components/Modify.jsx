import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { wilder } from "../api/requests";

export default function Modify() {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery("wilder", () =>
    wilder.getOne(id)
  );

  if (isLoading) {
    return <p className="text-white">Is Loading....</p>;
  }

  if (error) {
    return <p className="text-white">An error occurred: {error.message}</p>;
  }

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.city}</p>
      {data.skills.map((user) => {
        return (
          <p>
            {user.skills} || {user.votes}
          </p>
        );
      })}
      <button>Modify</button>
    </div>
  );
}
