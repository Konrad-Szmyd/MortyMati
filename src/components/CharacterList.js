import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";

const CharacterList = () => {
    const URL = "https://rickandmortyapi.com/api/character"

    const [show,setShow] = useState([])

    const getData = async() =>{
        const data = await fetch(URL)
        const characters = await data.json()
        const showList = characters.results.map((char)=>{
            const details = {
                id: char.id,
                name: char.name,
                species: char.species,
                img: char.image
            }
            return(
                <CharacterCard  key={char.id} details = {details} />
            )
        })
        setShow(showList)
    }

    useEffect(()=>{
        getData()
    },[])


    return(
        <div>
            {show}
        </div>
    )
}

export default CharacterList