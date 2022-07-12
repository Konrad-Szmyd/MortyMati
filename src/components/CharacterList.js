import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";

const CharacterList = () => {
    const URL = "https://rickandmortyapi.com/api/character"

    const [characters, setCharacters] = useState([])

    const getData = async () => {
        const data = await fetch(URL)
        const characters = await data.json()
        setCharacters(characters.results)
    }
    const showList = characters.map((char) => {
        const details = {
            id: char.id,
            name: char.name,
            species: char.species,
            img: char.image
        }
        return (
            <CharacterCard key={char.id} details={details} />
        )
    })

    useEffect(() => {
        getData()
    }, [])


    return (
        <div>
            {showList}
        </div>
    )
}

export default CharacterList