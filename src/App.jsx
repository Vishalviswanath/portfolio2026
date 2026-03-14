import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import ProjectDetail from "./components/ProjectDetail"
import HireMe from "./components/HireMe"

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/hire" element={<HireMe />} />
      </Routes>
    </BrowserRouter>
  )
}