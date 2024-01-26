"use client"
import style from "./pokemon.modular.css"
import { useState, useEffect } from 'react';
import Image from "next/image";
export default function Pokemon() {
    const [imagenpokemon, setImagenpokemon]=useState ("/vercel.svg"); 
    const [npokemon, setNpokemon]=useState ("gyarados");   
    const [especie, setEspecie]=useState ("especie");
    const [habilidad, setHabilidad]=useState("habilidad")
    const url = "https://pokeapi.co/api/v2/pokemon/130";
    useEffect(() => {         
        fetch(url)
            .then(res => res.json())
            .then(data => {setImagenpokemon(data.sprites.front_default),
                        setNpokemon(data.forms.name),
                        setEspecie(data.species.name), 
                        setHabilidad(data.abilities[1].ability.name)
            });
    }, [])
    return (
        <div className="principal">
            <div>
            <h2>My Pokemon</h2>
            <h1>{npokemon}</h1>
            </div>
            <div>
                <Image src={imagenpokemon} alt={npokemon} width={250} height={250}/>
            </div>

            
        </div>
    );
  }