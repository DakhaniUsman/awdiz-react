function PropDrilling({ students, data }) {
  console.log(students, "students");

  console.log(data);
  return (
    <div>
      {students.map((student) => (
        <h2>Student : {student}</h2>
      ))}

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {data.map((product) => (
          <div style={{ height: "350px", width: "22%", boxShadow:"0px 0px 10px #aaa", marginBottom:"1em", padding:"10px"}}>
            <img src={product.image} style={{ height: "60%", width: "auto" }} />
            <h2>Name : {product.name}</h2>
            <p>Price : {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// students array ["Rohit","Rahul","Virat"]
// student as i act krta hai

// for (let student = 0 ; student < students.length ; student++)

export default PropDrilling;
