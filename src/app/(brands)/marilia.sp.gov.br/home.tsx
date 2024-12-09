import { PokemonSlider } from "@/app/components/PokemonSlider";

export default async function Home() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
  const data = await response.json();
  const pokemons = data.results;

  return (
    <div className="h-screen max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold">Carrossel de Pokémon</h1>
      <PokemonSlider pokemons={pokemons} />
    </div>
  )
}

