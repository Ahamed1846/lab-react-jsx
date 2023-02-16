import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  const data = imageData();

  return (
    <div style={{ textAlign:"center"}}>
      <h2>Kalvium Gallery</h2>
      <div style={{ display: "grid",gridTemplateColumns:"repeat(2, 1fr)", gap: "10px"}}>
        {data.map(item => (
          <img
            key={item.id}
            src={item.img}
            alt={`Elephant ${item.id}`}
            style={{ width: "100%",height:"auto"}}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
