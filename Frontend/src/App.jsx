import { Route, Routes } from "react-router-dom";

import TimerNavbar from "./components/TimerNavbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import axios from "axios";
import { UserContextProvider } from "./context/userContext";
import LandingPage from "./pages/LandingPage";
import CreatorProfile from "./pages/CreatorProfile";

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
        <Route path="/creator/profile" element={<CreatorProfile />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
