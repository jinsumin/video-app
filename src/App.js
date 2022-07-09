import "./App.css";
import Player01 from "./pages/player01";
import Player02 from "./pages/player02";
import "../node_modules/video-react/dist/video-react.css"; // import css

function App() {
  return (
    <div>
      {/* <Player01 className="video-react"/> */}
      <Player02 />
    </div>
  );
}

export default App;
