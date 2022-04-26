import "../styles/ListItems.css"

export default function ListItems({ item, handleDelete }) {
    return (
        <>
            <tr>
                <td className="blue">{item.song}</td>
                <td className="blue">{item.artist}</td>
                <td className="blue">{item.genre}</td>
                <td className="blue">{item.rating}</td>
                <td className="blue"><button onClick={() => handleDelete(item)}>Delete</button></td>
            </tr>

        </>
    )
}
