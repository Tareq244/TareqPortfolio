import { Routes, Route, Link } from 'react-router-dom';
import Book from './component/book.jsx';
import Snowfall from 'react-snowfall'

function App() {
  return (
    <div>
      <Snowfall />
      <Routes>
        <Route path="/" element={<Book />} />
      </Routes>
    </div>
  );
}

export default App;
