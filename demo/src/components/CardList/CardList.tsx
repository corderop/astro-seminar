import { useEffect, useState } from "react"
import Card from "../Card/Card"
import './styles.css'

const CARDS = [
    { title: "Card 1", description: "Sit ipsum elit eiusmod laborum sunt est id pariatur culpa eiusmod pariatur." },
    { title: "Card 2", description: "Sint dolor ex cillum in." },
    { title: "Card 3", description: "Qui id aliquip exercitation ea pariatur sit tempor aute." },
    { title: "Card 4", description: "Qui id aliquip exercitation ea pariatur sit tempor aute." },
]

const CardList = () => {
    const [cards, setCards] = useState(CARDS)

    const removeRandomCard = () => {
        const randomIndex = Math.floor(Math.random() * cards.length)
        const newCards = [...cards]
        newCards.splice(randomIndex, 1)
        
        setCards(newCards)
    }

    return (<>
        <div className="grid">
            {cards.map((card, index) => <Card key={index} title={card.title} description={card.description} />)}
		</div>
        <button onClick={removeRandomCard}>
            Remove random card
        </button>
    </>
    )
}

export default CardList