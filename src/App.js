import "./App.css";
import {Route, Routes} from "react-router-dom";
import {Navbar} from "../src/components/index";
import { LandingPage, CategoryFilterPage, Login, History, SingleVideoPage } from "./pages/index";


function App() {
  return (
    <div className="App">

      <Navbar />

      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/category" element={<CategoryFilterPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/video/:videoId" element={<SingleVideoPage />} />
        <Route path="/history" element={<History />} />

      </Routes>

      
    </div>
  );
}

export default App;
