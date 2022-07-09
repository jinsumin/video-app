import { Player } from "video-react";
import poster from "../assets/이상한변호사.jpeg";
import src from "../assets/이상한변호사.mp4";

export default function Play() {
  return (
    <>
      <div className="container">
        <Player playsInline poster={poster} src={src} />
      </div>
    </>
  );
}
