import "./App.css";
import Play from "./pages/Play";
import "../node_modules/video-react/dist/video-react.css"; // import css

function App() {
  return (
    <div>
      <Play className="video-react"/>
    </div>
  );
}

export default App;
