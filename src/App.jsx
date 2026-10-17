import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Characters from "./pages/characters";
import CharacterDetail from "./pages/CharacterDetail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/characters" element={<Characters />} />
      <Route path="/characters/:id" element={<CharacterDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;