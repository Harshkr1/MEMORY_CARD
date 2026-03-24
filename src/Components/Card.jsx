export default function Card({ pokemonName, pokemonImageURL }) {
  return (
    <>
      <div className="card">
        <img src={pokemonImageURL} className="pokemonImage" alt={pokemonName}/>
        <div>
            <h3 className="pokemonName">{pokemonName}</h3>
        </div>
      </div>
    </>
  );
}
