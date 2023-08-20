import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Navbar from "./components/navbar/Navbar";
import { HoverProvider } from "./context/HoverContext";

function App() {
  return (
    <BrowserRouter>
      <HoverProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </HoverProvider>
    </BrowserRouter>
  );
}

export default App;
