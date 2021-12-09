import React from 'react'
import model24 from '../photos/model24kb.webp';

const Cards = (props) => {
    const {alt} = props;

    return (
        <section className="card-item">  
         <picture>
           <source media="(max-width: 499px)" srcset={model24}/>
           <source media="(min-width: 500px)" srcset={model24}/>
           <img src={model24}  alt={alt}/>
         </picture>
         <p>{alt}</p>
         <p className="price-card">$49.99</p>
        </section>
    )
}

export default Cards
