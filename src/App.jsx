import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '../src/pages/Home/Home.css'
import Home from './pages/Home/Home';
import Hotel from './pages/hotel/Hotel';
import List from './pages/List/List';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hotels' element={<List />} />
        <Route path='/hotels/:id' element={<Hotel />} />
      </Routes>
    </Router>
  );
}

export default App;
