import "../styles/ListItems.css"
export default function ListItemsFiltered({ item, handleDeleteFiltered }) {
    return (
        <>
            <tr>
                <td className="blue">{item.song}</td>
                <td className="blue">{item.artist}</td>
                <td className="blue">{item.genre}</td>
                <td className="blue">{item.rating}</td>
                <td className="blue"><button onClick={() => handleDeleteFiltered(item)}>Delete</button></td>
            </tr>

        </>
    )
}
