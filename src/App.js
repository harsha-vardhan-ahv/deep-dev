import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Joke from './Joke';
import Quote from './Quote';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/joke">Joke</Link> | <Link to="/quote">Quote</Link>
        </nav>
        <Routes>
          <Route path="/joke" element={<Joke />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
