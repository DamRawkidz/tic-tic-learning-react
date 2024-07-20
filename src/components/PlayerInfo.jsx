import { useState } from "react"

export default function Players({ initialName, symbol }) {
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false)

    function handleEditClick() {
        setIsEditing(editing => !editing)
    }

    function handleChange(event) {
        setPlayerName(event.target.value)
    }

    let editablePayerName = <span className="player-name">{playerName}</span>

    if (isEditing) {
        editablePayerName = <input type="text" required value={playerName} onChange={handleChange} />
    }

    return (
        <li className="player-info">
            {editablePayerName}
            <span className="player-symbol">{symbol}</span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}