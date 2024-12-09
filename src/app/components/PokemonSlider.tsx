'use client'

import React, { useState } from 'react';

interface Pokemon {
    name: string;
    url: string;
}

export function PokemonSlider ({ pokemons }: { pokemons: Pokemon[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % pokemons.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? pokemons.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative w-full max-w-md mx-auto">
            <div className="flex justify-center items-center">
                <button
                    type='button'
                    onClick={handlePrev}
                    className="absolute left-0 z-10 bg-gray-300 p-2 rounded"
                >
                    Anterior
                </button>
                
                <div className="flex flex-col items-center">
                    <img
                        src={`https://img.pokemondb.net/sprites/home/normal/${pokemons[currentIndex].name}.png`}
                        alt={pokemons[currentIndex].name}
                        className="mb-4"
                    />
                    <h2 className="text-center">{pokemons[currentIndex].name}</h2>
                </div>

                <button
                    type='button'
                    onClick={handleNext}
                    className="absolute right-0 z-10 bg-gray-300 p-2 rounded"
                >
                    Próximo
                </button>
            </div>
        </div>
    );
};