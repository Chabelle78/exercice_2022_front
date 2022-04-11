export default function SkillsForm({ register, index, remove }): JSX.Element {
  return (
    <div className="flex justify-around my-2">
      <select
        name="title"
        id="title"
        {...register(`skills.${index}.title`)}
        className="border-solid border-gray-300 border py-2 px-2 w-4/8 rounded text-gray-700"
      >
        <option value="HTML">HTML</option>
        <option value="JS">JS</option>
        <option value="REACT">REACT</option>
        <option value="BEATRIZ#">BEATRIZ#</option>
      </select>
      <select
        name="votes"
        id="votes"
        {...register(`skills.${index}.votes`)}
        className="border-solid border-gray-300 border py-2 px-2 w-2/8 rounded text-gray-700"
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <button type="button" className="border-solid bg-red-200 border-gray-300 border py-2 px-2 w-2/8 rounded text-gray-700" onClick={() => remove(index.title)}>
        Remove
      </button>
    </div>
  );
}
