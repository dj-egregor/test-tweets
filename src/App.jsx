import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Tweet from './components/Tweet/Tweet';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/tweets">Tweets</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tweets" element={<Tweet />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
