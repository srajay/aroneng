import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import NavSection from "./components/navbar/NavSection";
import BodySection from "./components/BodySection";
import Footer from "./components/footer/Footer";
// import Testnavbar from "./components/Testnavbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <NavSection />
        <BodySection />
        <Footer />
        {/* <Testnavbar /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
