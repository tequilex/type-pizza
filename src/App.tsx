import { FC } from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import PizzaPage from './pages/PizzaPage';

const App: FC = () => {
  
  return (
    <div className="App">
      <div className="wrap">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<PizzaPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
