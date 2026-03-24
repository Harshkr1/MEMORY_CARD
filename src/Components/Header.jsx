export default function Header({ score, bestScore }) {
  return (
    <>
      <h1>WELCOME TO POKEMON MEMORY GAME</h1>
      <h3>Scorese from this session</h3>

      <ul>
        <li>Score is : {score} </li>
        <li>Best Score is : {bestScore}</li>
      </ul>
    </>
  );
}
