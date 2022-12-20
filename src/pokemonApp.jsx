import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./features/slices/pokemon/thunks";

export const PokemonApp = () => {
  const dispatch = useDispatch();
  const { isLoading, page, pokemons } = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <div className="flex items-center justify-center h-full">
      <hi>PokemonApp</hi>
      <hr />
      <span>loading: {!isLoading ? "True" : "False"}</span>
      <ul>
        {pokemons.map((pokemon) => (
          <li>{pokemon.name}</li>
        ))}
      </ul>
      <button onClick={() => dispatch(getPokemons(page))}>Next </button>
    </div>
  );
};
