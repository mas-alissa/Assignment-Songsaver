import "../styles/about.css"
import { Link } from "react-router-dom"
export default function About() {
    return (
        <div className="body">


            <div>⭐⭐⭐</div>

            <h4>Ik ben Mohammed. Ik hou van de programmering. Ik heb HTML , CSS en Javascript geleerd. Ik ben nu bezig met React. Ik vind dat de programmering iets mooi en ik wil het leren...</h4>
            <div className="toRight">⭐⭐⭐</div>
            <Link to="/">To Home Page</Link>
        </div>
    )
}
