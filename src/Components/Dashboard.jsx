import { useState, useEffect } from "react";
import Card from "./Card.jsx";
export default function Dashboard() {
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
        {pokeDex.map((pokemon,index) => (
          <Card pokemonName={pokemon.name} pokemonImageURL={pokemon.image} key={index}/>
        ))}
      </div>
    </>
  );
}
