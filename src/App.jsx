import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import TweetsList from './components/TweetsList/TweetsList';
import Home from './components/Home/Home';
import styles from './app.module.css';

function App() {
  return (
    <div className={styles.container}>
      <nav className={styles.navigation}>
        <Link to="/">Home</Link>
        <Link to="/tweets">Tweets</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tweets" element={<TweetsList />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
