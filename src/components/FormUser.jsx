import React from "react";
import { useForm } from "react-hook-form";
import { wilder } from "../api/requests";

export default function FormUser() {  
  const { register, handleSubmit, errors } = useForm({ mode: "onSubmit" });
  
  const createWilder = async (data) => {
    const res = await wilder.create(data);
    console.log(res)
    return res.data
  };

  const onSubmit = (data) => {
    const wilder = {
     name: data.name, 
     city: data.city
    };
    createWilder(wilder);
    console.log({wilder});
  };

  return (
    <div className="bg-green">
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <label className="" htmlFor="name">
          name
        </label>
        <input
          className=""
          type="text"
          {...register("name", { required: true })}
        />
        <label className="" htmlFor="city">
          City
        </label>
        <input
          className=""
          type="city"
          {...register("city", { required: true })}
        />
        <input className="" type="submit" />
      </form>
    </div>
  );
}
