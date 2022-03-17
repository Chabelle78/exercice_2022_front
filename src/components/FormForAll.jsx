import { ErrorMessage } from "@hookform/error-message";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { wilder } from "../api/requests";

export default function FormUser() {
  let navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, } = useForm({ mode: "onSubmit" });

  const createWilder = async (data) => {
    const res = await wilder.create(data);
    console.log(res);
    return res.data;
  };

  const onSubmit = (data) => {
    const wilder = {
      name: data.name,
      city: data.city,
      description:data.description,
    };
    console.log(wilder);
    createWilder(wilder);
    navigate("/");
  };

  return (
    <div className="">
      <form className="max-w-xl m-auto py-10 mt-10 px-12 border" onSubmit={handleSubmit(onSubmit)}>
        <label className="text-gray-600 font-medium" htmlFor="name">
          Name
        </label>
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          type="text"
          {...register("name", { required: true, minLength: 2 })}
        />   
        <label className="text-gray-600 font-medium block mt-4" htmlFor="city">
          City
        </label>
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          type="city"
          {...register("city", { required: true, minLength: 2 })}
        />
        <label className="text-gray-600 font-medium block mt-4" htmlFor="description">
          Description
        </label>
        <input
          className="border-solid border-gray-300 border py-20 px-4 w-full rounded text-gray-700"
          type="description"
          {...register("description", { required: true, minLength: 2 })}
        />
        <input className="mt-4 w-full bg-green-400 hover:bg-green-600 text-green-100 border py-3 px-6 font-semibold text-md rounded" type="submit" />
        {/* <ErrorMessage
          errors={errors}
          name="name"
          render={({ message }) => <p>{message}</p>}
        /> */}
      </form>
    </div>
  );
}
