import { Routes, Route, Link } from 'react-router-dom';
import Book from './component/book.jsx';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Book />} />
      </Routes>
    </div>
  );
}

export default App;
