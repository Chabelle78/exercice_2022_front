export default function Skills({ data }) {
  console.log(data);

  return (
    <div>
      <h1>Skills</h1>
      {data.map((item)=>{ return <>
        <p>{item.title}</p>
        <p>{item.votes}</p>
        
      </>})}
    </div>
  );
}
