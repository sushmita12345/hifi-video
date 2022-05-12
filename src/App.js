import "./App.css";
import {Route, Routes} from "react-router-dom";
import {LandingPage} from "../src/pages/LandingPage/LandingPage";
import {Navbar} from "../src/components/Navbar/Navbar";
import { CategoryFilterPage } from "./pages/CategoryFilterPage/CategoryFilterPage";
import {Login} from "./pages/Login/Login";


function App() {
  return (
    <div className="App">

      <Navbar />

      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/category" element={<CategoryFilterPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      
    </div>
  );
}

export default App;
