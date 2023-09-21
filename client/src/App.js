import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import Chats from "./pages/chats";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Homepage />} exact/>
        <Route path="/chats" element={<Chats />}/>
    </Routes>
  );
}

export default App;
