import React, { useState, useEffect }  from 'react'
import CardsList from './CardsList'
import '../Sass/home.scss'


const Home = () => {

    const [cardsData, setCardsData] = useState([]);

    useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/photos/')
        .then((response) => response.json())
        .then((json) => {
            const cards = json.slice(0, 6);
            setCardsData(cards);
            console.log(cards);

       })}, [])

    return (
        <>
          <CardsList cardsData={cardsData}/>        
        </>
    )
}

export default Home
