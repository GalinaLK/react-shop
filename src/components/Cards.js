import React from 'react'

const Cards = (props) => {
    const {alt, url, mobileImg} = props;
    console.log(alt, url)
    return (
        <div className="card-item">  
         <picture>
           <source media="(max-width: 499px)" srcset={mobileImg}/>
           <source media="(min-width: 500px)" srcset={url}/>
           <img src={url}  alt={alt}/>
         </picture>
         <p>{alt}</p>
         <p>$49.99</p>
        </div>
    )
}

export default Cards
