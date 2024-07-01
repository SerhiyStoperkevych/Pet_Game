import React, {useState, useEffect} from 'react';

function Time() {

    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
          setCurrentDateTime(new Date());
        }, 1000);
    
        return () => clearInterval(timer);
      }, []);

    return(
        <div>

            <h1>Time: {currentDateTime.toLocaleString()}</h1>

        </div>
    );
};

export default Time;
