export default function SkillsForm({register, index}){

    return <div>
        <select
              name="title"
              id="title"
              {...register(`skills.${index}.title`)}
              className="border-solid border-gray-300 border py-20 px-4 w-full rounded text-gray-700"
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
              className="border-solid border-gray-300 border py-20 px-4 w-full rounded text-gray-700"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
    </div>
}