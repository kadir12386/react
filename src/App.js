// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
export default function App() {
  // const Rose = [
  //   {
  //     name: "Pink Rose",
  //     imageURL:
  //       "https://www.hortibiz.com/fileadmin/_processed_/b/4/csm_Commercial_Rose_Farming_Business_Information_Guide_For_Farmers...._1ecc735903.jpg",
  //   },
  //   {
  //     name: "White Rose",
  //     imageURL:
  //       "https://cdn.vox-cdn.com/thumbor/s6o0oNP74eOgSncfahbejN-uh9c=/0x0:5511x3640/1200x800/filters:focal(3063x791:3943x1671)/cdn.vox-cdn.com/uploads/chorus_image/image/58470249/492767389.jpg.0.jpg",
  //   },
  //   {
  //     name: "Red Rose",
  //     imageURL:
  //       "https://www.gardeningknowhow.com/wp-content/uploads/2021/07/bud-red-rose.jpg",
  //   },
  // ];

  // return (
  //   <div className="App">
  //     {Rose.map((Rose, index) => (
  //       <Msg key={index} name={Rose.name} image={Rose.imageURL} />
  //     ))}
  //   </div>
  // );
  return (
    <div className="App">
      {/* {Rose.map((Rose, index) => (
         <Msg key={index} name={Rose.name} image={Rose.imageURL} />
       ))} */}
      <Counter />
    </div>
  );
}

//function counter
function Counter() {
  // var like = 0; //react is not tracking
  const [Like, setLike] = useState(10);
  const [Dislike, dissetLike] = useState(10);
  return (
    <div>
      <button
        onClick={() => {
          setLike(Like + 1);
        }}
      >
        👍 {Like}
      </button>

      <button
        onClick={() => {
          dissetLike(Dislike + 1);
        }}
      >
        👎 {Dislike}
      </button>
      {/* <p>{Like}</p> */}
    </div>
  );
}

//function counter

// Msg  is now a component
// function Msg({ name, image }) {
//   return (
//     <div>
//       <img src={image} height="200" alt="rose iamges" />
//       <h1>{name}</h1>
//     </div>
//   );
// }

// export default App;
