
import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";


export default function ChracterList(){
    const [details, setDetails] = useState([]);


    useEffect(() => {
        axios
        .get("https://reqres.in/api/users?page=2")
        .then(response =>{
          console.log(response.data.data);
          setDetails(response.data.data);
          })
    },[]);
    return (

      

        <div className="card">
            {details.map(value => <CharacterCard
            firstname={value.first_name}         
            lastname={value.last_name}
            useremail={value.email}
            key={value.firstname}

            
            
            />)}

        </div>
    
    )
}
