import React, { useEffect, useState, useContext } from 'react';
import {AppContext} from '../../AppContext'; 

function Weather() {

    const { health, hunger, setMood } = useContext(AppContext);

    const [joj, setJoj] = useState(false);

    useEffect(() => {

        const gog = () => {
            if(health < 100 && hunger > 90) {
                setMood((prevMood) => prevMood - 1)
                setJoj(true);
            }
        }
        const weatherInterval = setInterval(gog, 60 * 5)

        return () => clearInterval(weatherInterval);


    }, [health, hunger, setMood])

    return(
        <div>

            {joj ? 'The Weather is bad' : 'The weather is good'}


        </div>
    );
};

export default Weather;
