import type React from 'react'
import './styles.css'

interface Props {
    title: string
    description: string
}

const Card: React.FC<Props> = ({ title, description }) => {
    return <button className="card">
        <h3>{title}</h3>
        <p>{description}</p>
    </button>
}

export default Card