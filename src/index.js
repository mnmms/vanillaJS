import '../styles.css';
import axios from 'axios';

const root = document.querySelector('#root');
const container = document.createElement("div");
const button1 = document.createElement("button");
const button2 = document.createElement("button");
const clock = document.createElement("div");
const movie= document.createElement("div");

root.appendChild(container);
container.appendChild(button1);
container.appendChild(button2);

button1.innerText = "시계보기";
button2.innerText = "영화 정보 보기";

let clickedShowClock = false;
let clickedShowMovieInfo = false;

button1.onclick = function () {
     container.appendChild(clock);
     if(clickedShowClock) {
          clock.classList.add("hidden");
     } else {
          clock.classList.remove("hidden");
     }
     clickedShowClock = !clickedShowClock;
}

button2.onclick = function () {
     container.appendChild(movie);
     if(clickedShowMovieInfo) {
          movie.classList.add("hidden");
     } else {
          movie.classList.remove("hidden");
     }
     clickedShowMovieInfo = !clickedShowMovieInfo;
}

container.classList.add("container");
clock.classList.add("clock");
movie.classList.add("movie");

setInterval(_ => clock.innerText = showClock(), 1000);
movie.innerText  = movieInfo();

function showClock() {
     const date = new Date();
     const hours = date.getHours();
     const minutes = String(date.getMinutes()).padStart(2, "0");
     const seconds = String(date.getSeconds()).padStart(2, "0");

     return `${hours}:${minutes}:${seconds}`;
}

async function movieInfo() {
     const data= await axios.get("https://yts.mx/api/v2/list_movies.json");
     console.log(data);
     // return movies;
}