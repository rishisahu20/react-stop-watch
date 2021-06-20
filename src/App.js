import { StopWatch } from "./components/stopwatch";
import "./App.css";

function App() {
  return (
    <div className="App">
      <StopWatch initial="0" interval="10" />
      <StopWatch initial="5" interval="5" />
      <StopWatch initial="2" interval="6" />
    </div>
  );
}

export default App;
