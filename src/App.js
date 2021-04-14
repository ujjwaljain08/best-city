import React , {useState} from 'react'
import './App.css'

function App() {

  // const mycity = {
  //   India: [
  //     { name: "Indore", rating: "4/5" },
  //     { name: "bangalore", rating: "3.5/5" }
  //   ],
  //   USA : [
  //     { name: "Texas", rating: "4.8/5" },
  //     { name: "Austin", rating: "3.8/5" }
  //   ],
  //   Australia: [
  //     { name: "	Sydney", rating: "4.5/5" },
  //     { name: "	Melbourne", rating: "4/5" }
  //   ]
  // };

  const Collection = {
    India: [
       { name: "Indore", rating: "4/5" },
      { name: "bangalore", rating: "3.5/5" }
    ],
    Usa : [
      { name: "Texas", rating: "4.8/5" },
      { name: "Austin", rating: "3.8/5" }
    ],
    Australia: [
      { name: "	Sydney", rating: "4.5/5" },
      { name: "	Melbourne", rating: "4/5" }
    ]
  };


  var city = Object.keys(Collection);

  function handlebtnClick(type) {
    setCity(type);
  }

  const [City, setCity] = useState("India");
  return (
    <div className="App">
     <h1>Best City </h1>
       
        {city.map((e)=>(
          <button className="button active" onClick={() => handlebtnClick(e)}>
          {e}
        </button>
        ))}

<ul style={{ listStyle: "none" }}>
          {Collection[City].map((item) => (
            <li>
              <div className="list-div">
                {item.name}
                <div style={{ fontSize: "smaller" }}>{item.rating}</div>
              </div>
            </li>
          ))}
        </ul>
    </div>
  );
}

export default App;
