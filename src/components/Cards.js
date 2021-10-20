import React from 'react'

const Cards = (props) => {
    const {alt, url, mobileImg} = props;

    return (
        <div className="card-item">  
         <picture>
           <source media="(max-width: 499px)" srcset={mobileImg}/>
           <source media="(min-width: 500px)" srcset={url}/>
           <img src={url}  alt={alt}/>
         </picture>
         <p>{alt}</p>
         <p className="price-card">$49.99</p>
        </div>
    )
}

export default Cards
