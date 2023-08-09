import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import '../src/styles/index.css';

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <header className="bg-blue-500 text-white p-4">Mon Portfolio</header>

        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <footer className="bg-blue-500 text-white p-4 mt-4">Copyright 2023</footer>
      </div>
    </Router>
  );
}

function Accueil() {
  return <div className="p-4">Bienvenue sur mon portfolio !</div>;
}

function Projets() {
  return <div className="p-4">Mes projets...</div>;
}

function About() {
  return <div className="p-4">À propos de moi...</div>;
}

export default App;
