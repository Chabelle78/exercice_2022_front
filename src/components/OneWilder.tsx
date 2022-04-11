import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { wilder } from "../api/requests";
import {Wilder} from "../types/index"

export default function OneWilder(): JSX.Element {
  const { id } = useParams();
  const [oneWilder, setOneWilder] = useState<Wilder>();
  const [isLoading, setIsLoading] = useState("");
  const [isError, setIsError] = useState("");

  useEffect(() => {
    const getOneWilder = async () => {
      const res = await wilder
        .getOne(id)
        .then((res) => {
          return res;
        })
        .catch((err) => setIsError(err));
        setOneWilder(res.result[0]);
      };
    getOneWilder();
  }, []);

  if (isLoading) return <>Is loading...</>;
  if (isError) return <>Error</>;

  return (
    <div>
      <h1>{oneWilder.name}</h1>
      <p>{oneWilder.city}</p>
      {oneWilder.skills?.map((skill, index) => {
        return (
          <>
            <div key={index}>
              {skill.title} || {skill.votes}
            </div>
          </>
        );
      })}
      <button>Modify</button>
    </div>
  );
}
