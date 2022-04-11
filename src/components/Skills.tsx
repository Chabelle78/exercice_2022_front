import { Skill } from "../types/index";

export default function Skills({ data }): JSX.Element {
  return (
    <div>
      <h1>Skills</h1>
      {data.map((item: Skill) => {
        return (
            <div className="mx-2 flex justify-around" key={item._id}>
              <p>{item.title}</p>
              <p>{item.votes}</p>
            </div>
        );
      })}
    </div>
  );
}
