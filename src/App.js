import { Route, Routes } from 'react-router-dom';
import './App.css';
import StarshipDetails from './pages/StarshipDetails/StarshipDetails';
import StarshipList from './pages/StarshipList/StarshipList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StarshipList />} />
        <Route path="/ship/:id" element={<StarshipDetails />} />
      </Routes>
    </div>
  );
}

export default App;
