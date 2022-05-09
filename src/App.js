import "./App.css";
import {Route, Routes} from "react-router-dom";
import {LandingPage} from "../src/pages/LandingPage/LandingPage";
import {Navbar} from "../src/components/Navbar/Navbar";
import { CategoryFilterPage } from "./pages/CategoryFilterPage/CategoryFilterPage";


function App() {
  return (
    <div className="App">

      <Navbar />

      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/category" element={<CategoryFilterPage />} />
      </Routes>

      
    </div>
  );
}

export default App;
