import { ErrorMessage } from "@hookform/error-message";
import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { wilder } from "../api/requests";
import SkillsForm from "./SkillsForm";

export default function FormUser() {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ mode: "onSubmit" });
  const { fields, append, remove } = useFieldArray({ control, name: "skills" });

  const createWilder = async (data) => {
    const res = await wilder
      .create(data)
      .then((res) => {
        console.log("log de res dans la promesse", res);
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(res.data);
    return res.data;
  };

  const onSubmit = (data) => {
    const wilder = {
      name: data.name,
      city: data.city,
      description: data.description,
      skills: data.skills,
    };
    console.log("Jenvoie le wilder dans le formulaire", wilder);
    createWilder(wilder);
    navigate("/");
  };

  return (
    <div className="">
      <form
        className="max-w-xl m-auto py-10 mt-10 px-12 border"
        onSubmit={handleSubmit(onSubmit)}
      >
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
        <label
          className="text-gray-600 font-medium block mt-4"
          htmlFor="description"
        >
          Description
        </label>
        <input
          className="border-solid border-gray-300 border py-20 px-4 w-full rounded text-gray-700"
          type="description"
          {...register("description", { required: true, minLength: 2 })}
        />
        {fields.map((field, index) => (
          <div key={field.id}>
            <SkillsForm index={index} register={register} />
          </div>
        ))}
            <button
              type="button"
              onClick={() => append({})}
            >
              Ajouter un skill
            </button>
        {/* <ErrorMessage
          errors={errors}
          name="name"
          render={({ message }) => <p>{message}</p>}
        /> */}
        <input
          className="mt-4 w-full bg-green-400 hover:bg-green-600 text-green-100 border py-3 px-6 font-semibold text-md rounded"
          type="submit"
        />
      </form>
    </div>
  );
}
