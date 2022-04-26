import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';

//components
import ListItems from './ListItems';
import ListItemsFiltered from './ListItemsFiltered'

//style
import "../styles/home.css"
export default function Home() {
    const [song, setSong] = useState("")
    const [artist, setArtist] = useState("")
    const [genre, setGenre] = useState("")
    const [rating, setRating] = useState("")

    const [arrayOfObjects, setArrayOfObjects] = useState([])
    const [emptyArray, setEmptyArray] = useState([])

    const [hasObj, setHasObj] = useState(false)
    const [filtered, setFiltered] = useState(false)



    const [filterText, setFilterText] = useState("")

    const [num, setNum] = useState("")


    // sorteren

    arrayOfObjects.sort((a, b) => {
        if (a.song > b.song) {
            return 1
        } else if (b.song > a.song) {
            return -1
        } else {
            return 0
        }
    })

    const handleDelete = (item) => {
        const x = arrayOfObjects.filter(obj => obj !== item)
        const y = emptyArray.filter(obj => obj !== item)
        setArrayOfObjects(x)
        setEmptyArray(y)

    }


    const submitHandler = (e) => {
        setSong("")
        setArtist("")
        setGenre(" --- ")
        setRating(" --- ")
        e.preventDefault()
        setHasObj(true)
        setFiltered(false)
        setArrayOfObjects([...arrayOfObjects, { song, artist, genre, rating }])
        handleChange(e)
    }


    const handleChange = (e) => {
        setFilterText(e.target.value)
        setNum("")
        if (e.target.value === "all") {
            setFiltered(false)
            setHasObj(true)
            e.target.value = ""
        } else if (e.target.value === "rock" && e.target.value) {
            setFiltered(true)
            setHasObj(false)
            setEmptyArray(arrayOfObjects.filter(item => item.genre === e.target.value))
        } else if (e.target.value === "jazz") {
            setFiltered(true)
            setHasObj(false)
            setEmptyArray(arrayOfObjects.filter(item => item.genre === e.target.value))
        } else if (e.target.value === "pop") {
            setFiltered(true)
            setHasObj(false)
            setEmptyArray(arrayOfObjects.filter(item => item.genre === e.target.value))
        } else if (e.target.value === "") {
            return null
        }
        else {
            setFilterText("")
        }

    }





    const handleDeleteFiltered = (item) => {
        const x = emptyArray.filter(song => song !== item)
        const y = arrayOfObjects.filter(song => song !== item)
        setEmptyArray(x);
        setArrayOfObjects(y)
    }

    useEffect(() => {
        handleRating(num)
    }, [num])
    const handleRating = (num) => {

        if (filterText === "rock" || filterText === "jazz" || filterText === "pop") {
            const x = arrayOfObjects.filter(song => song.rating == num && song.genre === filterText)
            setFiltered(true)
            setHasObj(false)
            setEmptyArray(x)
        } else if (filterText === "all") {
            const x = arrayOfObjects.filter(song => num > 0 ? song.rating == num : song.rating)
            setFiltered(true)
            setHasObj(false)
            setEmptyArray(x)
        } else if (filterText === "") {
            const x = arrayOfObjects.filter(song => num > 0 ? song.rating == num : song.rating)
            setFiltered(true)
            setHasObj(false)
            setEmptyArray(x)
        }




    }

    return (
        <div className='center'>
            <Navbar />
            <h1>Winc Lil' Liedjeslijst</h1>
            {/* this form for to adding songs */}
            <form className='marginStyle' onSubmit={(e) => submitHandler(e)}>
                <input required type="text" placeholder='Song' value={song} onChange={(e) => setSong(e.target.value)} />
                <input required type="text" placeholder='Artist' value={artist} onChange={(e) => setArtist(e.target.value)} />
                <select required value={genre} onChange={(e) => setGenre(e.target.value)}>
                    <option value=""> --- </option>
                    <option value="rock"> Rock </option>
                    <option value="jazz"> Jazz </option>
                    <option value="pop"> Pop </option>

                </select>
                <select required value={rating} onChange={(e) => setRating(e.target.value)}>
                    <option value=""> --- </option>
                    <option value="1"> 1 </option>
                    <option value="2"> 2 </option>
                    <option value="3"> 3 </option>
                    <option value="4"> 4 </option>
                    <option value="5"> 5 </option>

                </select>
                <button>Add Song</button>

            </form>


            {/* this for for filter songs by genre */}
            <form className='center'>
                <span>Filter songs by genre : </span>
                <select value={filterText} onChange={(e) => handleChange(e)}>
                    <option value=""> --- </option>
                    <option value="rock">Rock</option>
                    <option value="jazz">Jazz</option>
                    <option value="pop">Pop</option>
                    <option value="all">All</option>
                </select>
            </form>
            {/* this for for filter songs by rating */}
            <form className='center'>
                <span>Filter songs by rating : </span>
                <select value={num} onChange={(e) => setNum(e.target.value)}>
                    <option value=""> --- </option>
                    <option value="1"> 1 </option>
                    <option value="2"> 2 </option>
                    <option value="3"> 3 </option>
                    <option value="4"> 4 </option>
                    <option value="5"> 5 </option>
                </select>
            </form>
            <table className="table">
                <thead>
                    <tr>
                        <td>Song</td>
                        <td>Artist</td>
                        <td>Genre</td>
                        <td>Rating</td>

                    </tr>
                </thead>
                <tbody>
                    {hasObj && (
                        arrayOfObjects.map(item => <ListItems key={item.song} item={item} handleDelete={handleDelete} />)
                    )}

                    {filtered && emptyArray.map(item => <ListItemsFiltered key={item.song} item={item} handleDeleteFiltered={handleDeleteFiltered} />)}
                </tbody>
            </table></div>
    )
}
