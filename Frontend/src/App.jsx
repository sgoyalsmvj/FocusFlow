import { Route, Routes } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import TimerNavbar from "./components/TimerNavbar"
import Register from "./pages/Register"
import Login from "./pages/Login"


function App() {

  return (
    // <TimerNavbar/>
   <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/timer" element={<TimerNavbar />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
   </Routes>
  )
}

export default App
