import React from 'react'
import Cards from './Cards'


const CardsList = (props) => {
    const cards = props.cardsData;
    console.log(cards);
    return (
      <div className="flex-cards-wrapper">
        {cards.map((card) =>
          <Cards key={card.id}
                alt={card.title}
                />
                )}
      </div>
      )
}

export default CardsList
