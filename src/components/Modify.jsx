import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { wilder } from "../api/requests";

export default function Modify() {
  const { id } = useParams();
  const [oneWilder, setOneWilder] = useState({});
  const [isLoading, setIsLoading] = useState("");
  const [isError, setIsError] = useState("");

  useEffect(() => {
    const getOneWilder = async () => {
      const res = await wilder
        .getOne(id)
        .then((res) => {
          setIsLoading();
          return res;
        })
        .catch((err) => setIsError(err));
      setOneWilder(res.result[0]);
    };
    getOneWilder();
  }, []);

  if (isLoading) return <>Is loading...</>;
  if (isError) return <>Error</>;
  console.log(oneWilder);

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
