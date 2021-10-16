import { useState } from "react";
import Button from "@mui/material/Button";
export default function App() {
  // const name = "sangeetha";
  const initial_Movies = [
    {
      name: "Movie 1",
      pic: "https://www.pymnts.com/wp-content/uploads/2020/04/movies-films-industry-lost-revenue-box-office-coronavirus.jpg",
      des: "Good",
    },
    {
      name: "Movie 2",
      pic: "https://tamillyrics143.com/wp-content/uploads/2020/04/3-Moonu-Movie-Song-Lyrics.jpg",
      des: "Ram and Janani are high school sweethearts who eventually get married. However, Janani is mystified when Ram commits suicide all of a sudden and she tries to find out the truth behind his death.",
    },
    {
      name: "Movie 3",
      pic: "https://i.pinimg.com/736x/5f/07/bc/5f07bc2cfc7fb8368d79771cce2fc25a.jpg",
      des: "Kutty, a kind young man, falls in love with Geeta, but she does not reciprocate his love. He continues to pursue her even after learning that she is in a relationship with Arjun, her college-mate.",
    },
    {
      name: "Movie 3",
      pic: "https://i.pinimg.com/736x/5f/07/bc/5f07bc2cfc7fb8368d79771cce2fc25a.jpg",
      des: "Kutty, a kind young man, falls in love with Geeta, but she does not reciprocate his love. He continues to pursue her even after learning that she is in a relationship with Arjun, her college-mate.",
    },
  ];

  const [movies, setMovies] = useState(initial_Movies);

  const [movieName, setMovieName] = useState("");
  const [moviePoster, setMoviePoster] = useState("");
  const [moviedes, setMovieDes] = useState("");

  const addMovie = () => {
    const newMovie = {
      name: movieName,
      pic: moviePoster,
      des: moviedes,
    };
    // console.log([...movies, newMovie], newMovie);
    setMovies([...movies, newMovie]);
  };
  return (
    <section>
      {/* <Colorgetdata /> */}
      {/* <Counter /> */}
      <div>
        <input
          value={movieName} //textbox ku values set pannuthu
          onChange={(event) => setMovieName(event.target.value)}
          placeholder="Movie name"
        />
        <input
          value={moviePoster} //textbox ku values set pannuthu
          onChange={(event) => setMoviePoster(event.target.value)}
          placeholder="Movie Poster"
        />
        <input
          value={moviedes} //textbox ku values set pannuthu
          onChange={(event) => setMovieDes(event.target.value)}
          placeholder="Movie Poster"
        />
        <button onClick={addMovie}>Add Movie</button>
      </div>

      <div className="App">
        {/* we need to update the movie not the inital moives */}
        {movies.map((el, index) => {
          return (
            <div>
              <button
                onClick={() => {
                  console.log("deleteing", index);
                  const removeIdx = index;
                  console.log(movies.filter((mv, idx) => idx !== removeIdx));
                  setMovies(movies.filter((mv, idx) => idx !== removeIdx));
                }}
              >
                Delete
              </button>
              <Msg
                key={index}
                user_names={el.name}
                user_img={el.pic}
                des={el.des}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

//textbox and color is adding to the style
// function Colorgetdata() {
//   const [initial_colors, setColor] = useState();
//   // addimg css styles as object
//   const adding_styles = {
//     backgroundColor: initial_colors,
//     fontSize: "1.5rem",
//     fontWeight: "bold"
//   };
//   // const colors = ["red", "yellow", "red"];
//   const [newcolors, setNewColors] = useState([]);
//   return (
//     <div>
//       <input
//         value={initial_colors} //textbox ku values set pannuthu
//         style={adding_styles}
//         onChange={(event) => setColor(event.target.value)}
//         placeholder="movie name"
//       />

//       <button
//         onClick={() => {
//           console.log(initial_colors, newcolors);
//           setNewColors([...newcolors, initial_colors]);
//         }}
//       >
//         Add color
//       </button>

//       {newcolors.map((clr, index) => (
//         <ColorBox key={index} color={clr} />
//       ))}
//     </div>
//   );
// }
// textbox to color and its creates a div box when you click the add button
// function ColorBox({ color }) {
//   const div_box_styles = {
//     backgroundColor: color,
//     width: "150px",
//     height: "100px"
//   };
//   return <div style={div_box_styles}></div>;
// }

// Like  Counter function
function Counter() {
  const [like, SetLike] = useState(0);
  const [dislike, SetDislike] = useState(0);
  // easy way to do the function here Follow this
  const increamentLike = () => SetLike(like + 1);
  const increamentDislike = () => SetDislike(dislike + 1);

  return (
    <div>
      <button onClick={increamentLike}>
        <span aria-label="" role="img">
          👍 {like}
        </span>
      </button>
      <button onClick={increamentDislike}>
        <span aria-label="" role="img">
          👎{dislike}
        </span>
      </button>
    </div>
  );
}

function Msg({ user_names, user_img, des }) {
  const [show, setShow] = useState(false);
  const styles = { display: show ? "block" : "none" };
  return (
    <div className="card">
      <img src={user_img} height="200px" width="200px" alt={user_names} />
      <Counter />
      <h1>{user_names}</h1>
      <Button variant="contained">Contained</Button>
      <button onClick={() => setShow(!show)}>Show description</button>
      <p style={styles}>{des}</p>
    </div>
  );
}
