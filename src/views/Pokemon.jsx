import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Pokemon = () => {
  const [names, setNames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon");
        const data = await res.json();
        setNames(data.results);
        setSelectedPokemon(data.results[0].name);
        setLoading(true);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleOptionChange = (e) => {
    setSelectedPokemon(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate(`/pokemones/${selectedPokemon}`);
  };

  return (
    <main className="pokemonesMain">
      {loading ? (
        <form id="pokemonForm" onSubmit={handleFormSubmit}>
          <label htmlFor="pokemonSelect">Selecciona un pokemón</label>
          <select
            id="pokemonSelect"
            value={selectedPokemon}
            onChange={handleOptionChange}
          >
            {names.map((pokemon, index) => (
              <option key={index} value={pokemon.name}>
                {pokemon.name}
              </option>
            ))}
          </select>
          <button type="submit">Ver Detalle</button>
        </form>
      ) : (
        <h1>Loading...</h1>
      )}
    </main>
  );
};

export default Pokemon;
