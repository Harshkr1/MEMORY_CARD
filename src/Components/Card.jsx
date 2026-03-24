export default function Card({ pokemonName, pokemonImageURL, onClick }) {
  return (
    <>
      <div className="card" onClick={onClick}>
        <img src={pokemonImageURL} className="pokemonImage" alt={pokemonName}/>
        <div>
            <h3 className="pokemonName">{pokemonName}</h3>
        </div>
      </div>
    </>
  );
}
