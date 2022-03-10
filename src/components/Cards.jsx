import { useEffect, useState } from "react";
import styledComponents from "styled-components";
// import { wilder } from "../api/requests";
import axios from "axios";
import {wilder} from "../api/requests";
import { useQuery } from "react-query";
import Skills from "./Skills.jsx";



// const API_URL = 'http://localhost:3000/api';

const CardsRender = styledComponents.div`
width: clamp(20rem, calc(20rem + 2vw), 22rem);
overflow: hidden;
margin:5vh 0vh;
box-shadow: 0 .1rem 1rem rgba(0, 0, 0, 0.1);
border-radius: 1em;
background: #ECE9E6;
background: linear-gradient(to right, #FFFFFF, #ECE9E6);
  `;
const CardImg = styledComponents.div`
max-width: 100%;
display: block;
object-fit: cover;
  `;
const CardBody = styledComponents.div`
padding: 1rem;
display: flex;
flex-direction: column;
gap: .5rem;
  `;
const CardBodyTitle = styledComponents.div`
margin: 10px 0px;`;

export default function Cards() {
  // const [wilders, setWilders] = useState();
  // const[isLoading, setIsLoading] = useState();
  // const[isError, setIsError]=useState();

// useEffect(()=>{

// axios.get(`${API_URL}/wilders`)
// .then((response)=>{
//   // handle success
//   setWilders(response.data.result)
//   setIsLoading()
// })
// .catch((error)=>{
//   // handle error
//   console.log(error);
//   setIsError()
// });


// },[])

  const {   isLoading, error,data } = useQuery(
    "wilders", () => wilder.getAll()
  );

  if (isLoading) {
    return <p className="text-white">Is Loading....</p>;
  }

  if (error) {
    return <p className="text-white">An error occurred: {error.message}</p>;
  }

  return (
    <div>
     
      <CardsRender>
        {data.result?.map((user) => {
          return (
            <>
              <div key={user._id}/>
                <CardImg>
                  <img
                    src="https://source.unsplash.com/600x400/?people"
                    alt=""
                    width="600"
                  />
                </CardImg>
                <CardBodyTitle>
                  <h2>{user.name}</h2>
                </CardBodyTitle>
                <CardBody>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum alias provident soluta accusamus, veritatis sint
                    libero fugiat, corporis asperiores minima reiciendis vel
                    recusandae similique harum pariatur, aliquam aliquid porro
                    quos.
                  </p>
                  <Skills data={user.skills}/>
                </CardBody>
            </>
          );
        })}
        </CardsRender>
      
    </div>
  );
}
