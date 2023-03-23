import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import Footer from '../Footer/Footer';

function App() {
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(false);

  const handleLoggedIn = () => {
    setLoggedIn(true);
    navigate('/movies');
  };

  const handleLoggedOut = () => {
    setLoggedIn(false);
    navigate('/');
  };

  return (
    <div className="app">
      <Header
        loggedIn={loggedIn}
      />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/profile" element={<Profile loggedOut={handleLoggedOut} />} />
        <Route path="/signin" element={<Login loggedIn={handleLoggedIn} />} />
        <Route path="/signup" element={<Register loggedIn={handleLoggedIn} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
