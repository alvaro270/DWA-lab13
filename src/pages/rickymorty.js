/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Home.module.css";

const rickymorty = ({ results, error }) => {
    return (
        <div className={styles.main}>
            <h1>Estado de Personajes</h1>
            <div className={styles.container}>
                {results.map((character, index) => (
                    <div key={character.name}>
                        <img
                            width={300}
                            height={400}
                            src={`https://rickandmortyapi.com/api/character/avatar/${index + 1
                                }.jpeg`}
                            alt={character.name}
                        />
                        <h4>Nombre: {character.name}</h4>
                        <h4>Estado: {character.status}</h4>
                        <h4>Genero: {character.gender}</h4>
                        <h4>Especie:{character.species}</h4>
                    </div>                    
                ))}
            </div>
        </div>
    );
};
rickymorty.getInitialProps = async () => {
    try {
        const response = await fetch("https://rickandmortyapi.com/api/character");
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

export default rickymorty;