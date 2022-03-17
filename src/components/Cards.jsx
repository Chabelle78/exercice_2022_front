import { wilder } from "../api/requests";
import { useQuery } from "react-query";
import NewCard from "./NewCard";

export default function Cards() {
  const { isLoading, error, data } = useQuery("wilders", () => wilder.getAll());

  if (isLoading) {
    return <p className="text-white">Is Loading....</p>;
  }

  if (error) {
    return <p className="text-white">An error occurred: {error.message}</p>;
  }

  return (
    <div className="w-1/2 mx-96 grid grid-cols-3 gap-2">
      {data?.result.map((user) => {
        return <NewCard user={user} key={user._id} />;
      })}
    </div>
  );
}
