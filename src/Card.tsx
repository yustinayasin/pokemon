import pokemonSprite from './assets/pokemon-2.jpg';
import { useState, useEffect } from 'react';

interface Ability {
    ability: {
        name: string
    },
    is_hidden: boolean,
    slot: number
}

interface Species {
    name: string,
    url: string
}

interface Stats {
    base_stat: number,
    effort: number,
    stat: {
        name: string
    }
}

interface Pokemon {
    name: string,
    base_experience: number,
    abilities: Ability[],
    sprites: {
        other: {
            dream_world: {
                front_default: string
            }
        }
    },
    species: Species,
    capture_rate: number,
    base_happiness: number,
    generation: string,
    stats: Stats[]
}

function Card() {
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);


    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/35/')
        .then((response) => response.json())
        .then((data: Pokemon) => {
            console.log(data);
            setPokemon(data);
        });
    }, []);

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure className='p-6'><img src={pokemon?.sprites?.other?.dream_world?.front_default} style={{width: 300}} alt="Pokemon"/></figure>
            <div className="card-body">
                <h2 className="card-title">{pokemon?.name}</h2>
                <div className="overflow-x-auto">
                    <table className="table">
                        <tbody>
                        <tr>
                            <td>Base experience</td>
                            <td>{pokemon?.base_experience}</td>
                        </tr>
                        <tr>
                            <td>Abilities</td>
                            <td>
                                <ul>
                                    {
                                        pokemon?.abilities?.map((a, index) => {
                                            return (
                                                <li key={index}>{a.ability.name.split("-").join(" ")}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>Species</td>
                            <td>{pokemon?.species?.name}</td>
                        </tr>
                        <tr>
                            <td>Stats</td>
                            <td>
                                <div className="overflow-x-auto">
                                    <table className="table">
                                        <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Base stat</th>
                                            <th>Effort</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                pokemon?.stats?.map((stat, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{stat.stat.name.split("-").join(" ")}</td>
                                                            <td>{stat.base_stat}</td>
                                                            <td>{stat.effort}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    );
}

export default Card