import React from 'react'
import model24 from '../photos/model24kb.webp';

const Cards = (props) => {
    const {alt} = props;

    return (
        <section className="card-item">  
         <div className='photo-card'>
         <picture>
           <source media="(max-width: 499px)" srcSet={model24}/>
           <source media="(min-width: 500px)" srcSet={model24}/>
           <img src={model24}  alt={alt}/>
         </picture>
         </div>       
         <p>{alt}</p>
         <p className="price-card">$49.99</p>
        </section>
    )
}

export default Cards
