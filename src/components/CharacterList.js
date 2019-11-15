import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";


export default function ChracterList(){
    const [details, setDetails] = useState([])

    useEffect(() => {
        axios
        .get("https://rickandmortyapi.com/api/character/")
        .then(response =>{
            const details = response.data.results;
            setDetails(details);
            console.log(details);

        })
    },[]);

    return (
        <div className="swcard">
            {details.map(value => <CharacterCard
            name={value.name}         
            gender={value.gender}
            species={value.species}
            status={value.status}
            key={value.name}

            
            
            />)}

        </div>
    )







}
