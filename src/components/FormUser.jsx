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
    };
    createWilder(wilder);
    navigate("/");
  };

  return (
    <div className="">
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <label className="" htmlFor="name">
          name
        </label>
        <input
          className=""
          type="text"
          {...register("name", { required: true, minLength: 2 })}
        />
        <ErrorMessage
          errors={errors}
          name="name"
          render={({ message }) => <p>{message}</p>}
        />

        <label className="" htmlFor="city">
          City
        </label>
        <input
          className=""
          type="city"
          {...register("city", { required: true, minLength: 2 })}
        />
        <input className="" type="submit" />
      </form>
    </div>
  );
}
