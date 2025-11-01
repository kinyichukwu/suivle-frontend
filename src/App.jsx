import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Graph from './pages/Graph';
import Docs from './pages/Docs';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/graph/:network/:txHash" element={<Graph />} />
        <Route path="/graph/:txHash" element={<Graph />} />
        <Route path="/docs" element={<Docs />} />
      </Routes>
    </BrowserRouter>
  );
}