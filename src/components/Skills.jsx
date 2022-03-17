export default function Skills({ data }) {
  return (
    <div>
      <h1>Skills</h1>
      {data.map((item) => {
        return (
          <>
            <div className="mx-2 flex justify-around">
              <p>{item.title}</p>
              <p>{item.votes}</p>
            </div>
          </>
        );
      })}
    </div>
  );
}
