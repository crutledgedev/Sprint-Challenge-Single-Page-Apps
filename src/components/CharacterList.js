import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";


export default function ChracterList(){
    const [details, setDetails] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        axios
        .get("https://rickandmortyapi.com/api/character/")
        .then(response =>{
            setDetails(response.data.results.filter(character => 
            character.name.toLowerCase().includes(query.toLowerCase())));
          })
    },[query]);
    const handleInputChange = event => {
      setQuery(event.target.value);
    }
    return (
      <div>
      <form>
      <input
      type="text"
      onChange={handleInputChange}
      value={query}
      name="name"
      tabIndex="0"
      className="promptSearchName"
      placeholder="search by name"
      autoComplete="off"
      />
    </form>
      

        <div className="card">
            {details.map(value => <CharacterCard
            name={value.name}         
            gender={value.gender}
            species={value.species}
            status={value.status}
            key={value.name}

            
            
            />)}

        </div>
        </div>
    )







}


