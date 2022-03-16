import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { wilder } from "../api/requests";
import Skills from "./Skills";

export default function NewCard({ user }) {
  let navigate = useNavigate();



  const [message, setMessage] = useState("");



  const { mutate } = useMutation(() => wilder.delete(user._id), {
    onSuccess: () => {
      setMessage("Utilisateur supprimé");
      navigate("/");
    },
    onError: () => {
      setMessage("Une erreur est survenue");
    },
  });

  useEffect(()=>{
    setMessage("Utilisateur supprimé");
  },[])

  console.log(message);

  // const handleClickDelete = () => {
  //   console.log(user._id);
  //   wilder.delete(user._id);
  //   navigate("/");
  //   console.log("bien supprimé");
  // };

  return (
    <>
      <div className="border-8 border-gray-200  text-center" key={user._id}>
        <img
          src="https://source.unsplash.com/600x400/?people"
          alt=""
          width="600"
          className=""
        />
        <h2>{user.name}</h2>
        <p>{user.city}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum alias
          provident soluta accusamus, veritatis sint libero fugiat, corporis
          asperiores minima reiciendis vel recusandae similique harum pariatur,
          aliquam aliquid porro quos.
        </p>
        <Skills data={user.skills} />
        <Link to={`/wilder/${user._id}`}>Modify</Link>
        <button onClick={() => mutate()}>DELETE</button>
      </div>
    </>
  );
}
