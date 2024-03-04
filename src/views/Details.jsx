import { useParams } from "react-router-dom";
import Tarjeta from "../components/Tarjeta";
import { useState, useEffect } from "react";

const Details = () => {
  const [infoDetail, setInfoDetail] = useState(null);
  const { name } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await response.json();
        setInfoDetail(data);
        setLoading(true);
      } catch (error) {
        console.error("Error fetching Pokémon details:", error);
      }
    };

    fetchPokemonDetails();

 
    return () => {

    };
  }, [name]); 

  return (
    <Tarjeta infoDetail={infoDetail} loading={loading} />
  );
};

export default Details;
