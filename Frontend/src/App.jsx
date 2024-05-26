import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import TimerNavbar from "./components/TimerNavbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import axios from "axios";
import { UserContextProvider } from "./context/userContext";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.withCredentials = true;
function App() {
  return (
    // <TimerNavbar/>
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/timer" element={<TimerNavbar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
