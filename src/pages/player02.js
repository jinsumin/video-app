import "../styles/player.css";
import poster from "../assets/이상한변호사.jpeg";
import src from "../assets/이상한변호사.mp4";

export default function Play() {
//   const autoPlay = () => {
//     return document.getElementById("vid").play();
//   };

  return (
    <div>
      <video autoPlay muted loop width="100%" height="100%">
        <source src={src} poster={poster} type="video/mp4" />
      </video>
    </div>
  );
}
