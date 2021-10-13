import React, { useState, useEffect }  from 'react'

const Home = () => {

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/5')
    .then(response => response.json())
    .then(json => console.log(json))},
     [])

    return (
        <div>
            <p>home</p>
        </div>
    )
}

export default Home
