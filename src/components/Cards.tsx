import { wilder } from "../api/requests";
import { useQuery } from "react-query";
import NewCard from "./NewCard";
import { Wilder } from "../types";
import { AxiosError } from "axios";

export default function Cards(): JSX.Element {

  const { isLoading, error, data } = useQuery<Wilder[], AxiosError>(
    "wilders",
    () => wilder.getAll(),
  
  );
  console.log(data);
  

  if (isLoading) {
    return <p className="text-white">Is Loading....</p>;
  }

  if (error) {
    return <p className="text-white">An error occurred: {error.message}</p>;
  }

  return (
    <div className="w-1/2 mx-96 grid grid-cols-3 gap-2">
      {data?.map((user) => {
          return <NewCard user={user} key={user._id} />;
        })}
    </div>
  );
}
