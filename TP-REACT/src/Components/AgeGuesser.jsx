import React , { useState , useEffect } from "react";


function AgeGuesser() {

    const [age , setAge] = useState(null);
    const [error , setError] = useState(null);
    const myName = 'Gonzalo';

     useEffect(() => {
         
    const fetchAge = async () => {
        try {
            const response = await fetch(`https://api.agify.io?name=[${myName}]`);
            if (!response.ok) {
                throw new Error('Network response was not ok! status: ${response.status}');
            }
            const data = await response.json();
            setAge(data.age);
        } catch (error) {
            setError(error.message);
            console.error("Error fetching age:", error);
        };
    };
    fetchAge();
    }, []);

   
    return (
        <div>
            <h2>Adivinador de Edad</h2>
            {age !=null ? (
                <p>La edad estimada para {myName} es:{age}años.</p>
            ) : error ? (
                <p>Error al obtener la edad: {error}</p>
            ) : (
                <p>Estimando la edad...</p>
            )};
        </div>
    );
};

export default AgeGuesser;