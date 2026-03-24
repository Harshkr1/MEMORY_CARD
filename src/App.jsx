import "./App.css";
import { useState } from "react";
import Dashboard from "./Components/Dashboard.jsx";
import Header from "./Components/Header.jsx";
function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [visitedPokemon, setVisitedPokemon] = useState([]);

  return (
    <>
      <Header score={score} bestScore={bestScore} />
      <Dashboard
        score={score}
        setScore={setScore}
        bestScore={bestScore}
        setBestScore={setBestScore}
        visitedPokemon={visitedPokemon}
        setVisitedPokemon={setVisitedPokemon}
      />
    </>
  );
}

export default App;
