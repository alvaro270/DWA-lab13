/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Home.module.css";

const Pokemons = ({ results, error }) => {
  return (
    <div className={styles.mainv2}>
      <h1>Pokemons</h1>
      <div className={styles.containerv2}>
        {results.map((pokemon, index) => (
          <div key={pokemon.name}>
            <img
              width={300}
              height={400}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
                index + 1
              }.svg`}
              alt={pokemon.name}
            />
            <h4>{pokemon.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

Pokemons.getInitialProps = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await response.json();

    return {
      results: data.results,
    };
  } catch (error) {
    return {
      error: error.message,
    };
  }
};

export default Pokemons;
