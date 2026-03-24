import { useState, useEffect } from "react";
import Card from "./Card.jsx";

function shuffleArray(array) {
  const newArr = [...array];

  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }

  return newArr;
}

export default function Dashboard({
  score,
  setScore,
  bestScore,
  setBestScore,
  visitedPokemon,
  setVisitedPokemon,
}) {
  const pokemonList = [
    "pikachu",
    "charizard",
    "mewtwo",
    "greninja",
    "lucario",
    "rayquaza",
    "gengar",
    "eevee",
    "dragonite",
    "garchomp",
  ];

  const [pokeDex, setPokeDex] = useState([]);

  const handleClick = (pokemon) => {
    console.log("CLICKED HANDLECLICK");
    if (!visitedPokemon.some((p) => p.name === pokemon.name)) {
      console.log("CLICKED Includes ");
      console.log("visitedPokemon:", visitedPokemon); // 👈 add this

      setScore((score) => score + 1);

      setVisitedPokemon([...visitedPokemon, pokemon]);
    } else {
      if (bestScore <= score) {
        setBestScore(score);
      }
      setScore(0);
      setVisitedPokemon([]);
    }
  };

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const promises = pokemonList.map((pokemon) =>
          fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((res) =>
            res.json(),
          ),
        );
        const results = await Promise.all(promises);

        const formattedData = results.map((data) => ({
          name: data.name,
          image: data.sprites.front_default,
        }));

        setPokeDex(formattedData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPokemon();
  }, []);

  return (
    <>
      <div className="Dashboard">
        <div className="Dashboard">
          {pokeDex.length === 0 ? (
            <p>Loading...</p>
          ) : (
            shuffleArray(pokeDex).map((pokemon) => (
              <Card
                pokemonName={pokemon.name}
                pokemonImageURL={pokemon.image}
                key={pokemon.name}
                onClick={() => handleClick(pokemon)}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}
