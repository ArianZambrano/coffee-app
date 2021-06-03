import { useState, useEffect } from 'react';

//localhost as a fake api from ../data.*.json using json-server
const coffeesURL = 'http://localhost:3000/coffees';

const useCoffes = () => {
    const [coffees, setCoffees] = useState([]);
    
    useEffect(() => {
        fetch(coffeesURL)
        .then(res => res.json())
        .then(data => setCoffees(data))
    }, []);

    return coffees
}

export default useCoffes;