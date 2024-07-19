import { useState } from "react"

export default function Players({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false)

    function handleEditClick() {
        setIsEditing(true)
    }

    let playerName = <span className="player-name">{name}</span>

    if (isEditing) {
        playerName = <input type="text" required />
    }

    return (
        <li className="player-info">
            {playerName}
            <span className="player-symbol">{symbol}</span>
            <button onClick={handleEditClick}>Edit</button>
        </li>
    )
}