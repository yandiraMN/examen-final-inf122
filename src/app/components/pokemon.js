"use client";
import style from "./pokemon.modular.css";
import { useState, useEffect } from 'react';
import Image from "next/image";

export default function Descripcion() {
    const [imagenpokemon, setImagenpokemon] = useState("/vercel.svg");
    const [npokemon, setNpokemon] = useState("nombre");
    const url = "https://pokeapi.co/api/v2/pokemon/130";
    const [habilidad, setHabilidad] = useState("habilidad");
    const [habilidad1, setHabilidad1] = useState("habilidad1");
    const [type, setType] = useState("tipo");
    const [type1, setType1] = useState("tipo1");
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [stats, setStats] = useState([]);
    const [id,setId]=useState("id")

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setImagenpokemon(data.sprites.front_default);
                setNpokemon(data.forms[0].name);
                setId(data.game_indices[3].game_index);
                setType(data.types[0].type.name);
                setType1(data.types[1] ? data.types[1].type.name : "");
                setHabilidad(data.abilities[0].ability.name);
                setHabilidad1(data.abilities[1] ? data.abilities[1].ability.name : "");
                setHeight(data.height);
                setWeight(data.weight);
                setStats(data.stats);
            })
    }, []);

    return (
        <div className={"principal"}>
            <div>
                <h2>My Pokemon</h2>
                <h1>{npokemon}</h1>
            </div>
            <div>
            <h4>#{id}</h4>
                <Image src={imagenpokemon} alt={npokemon} width={250} height={250} />
            </div>
            <h3>About</h3>
            <p>Type: {type}, {type1}</p>
            <p>Height: {height}</p>
            <p>Weight: {weight}</p>
            <p>Abilities: {habilidad}, {habilidad1}</p>
            <div>
                <h3>Stats</h3>
                {stats.map(stat => (
                    <p key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</p>
                ))}

            </div>
        </div>
    );
}
