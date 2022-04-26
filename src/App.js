import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Components/Home"
import About from "./Components/About"
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />

      </Routes>
    </BrowserRouter>
  )
}
