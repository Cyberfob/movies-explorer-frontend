import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import React, { useState } from 'react';
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
import { mainApi } from '../../utils/MainApi';
import * as auth from '../../utils/Auth';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { UserDataContext } from "../CurrentUserContext/CurrentUserContext";
function App() {

  const [currentUser, setCurrentUser] = useState({});
  //const [authState, setAuthState] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();

  const [errorProfile, setErrorProfile] = useState(false);
  const [errorLogin, setErrorLogin] = useState(false);
  const [errorRegister, setErrorRegister] = useState(false);

  //Доработать

  React.useEffect(() => {
    checkToken();
  }, []);

  function checkToken() {
    const jwt = localStorage.getItem('jwt')
    if (jwt) {
      mainApi.getUserInfo()
        .then((userData) => {
          setCurrentUser(userData.data);
          setIsLoggedIn(true);
          navigate('/movies');
        })
        .catch((err) => {
          navigate('/');
        })
    } else {
      setIsLoggedIn(false);
      navigate('/');
    }
  }

  const handleLogin = (email, password) => {
    auth
      .login(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          setIsLoggedIn(true);
          navigate("/movies");
        }
      })
      .catch((err) => {
        setErrorLogin(err);
        console.log(errorLogin)
        setIsLoggedIn(false);
      });
  };

  const handleRegister = (name, email, password) => {
    auth
      .register(name, email, password)
      .then((res) => {
        if (res) {
          handleLogin(email, password);
        }
      })
      .catch((err) => {
        setErrorRegister(err);
        console.log(errorRegister)
      });
  };

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setCurrentUser({});
    navigate("/");
  };

  const handleUpdateUser = (name, email) => {
    mainApi
      .setUserInfo(name, email)
      .then((userData) => {
        console.log(userData);
        setCurrentUser(userData.data);
      })
      .catch((err) => {
        setErrorProfile(err);
        console.log(errorProfile)
      });
  };

  return (
    <UserDataContext.Provider value={currentUser}>
      <div className="app">
        <Header isLoggedIn={isLoggedIn}></Header>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Movies isLoggedIn={isLoggedIn} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <SavedMovies isLoggedIn={isLoggedIn} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Profile
                  isLoggedIn={isLoggedIn}
                  errorProfile={errorProfile}
                  onUpdateUser={handleUpdateUser}
                  handleLogout={handleLogout}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/signin"
            element={
              isLoggedIn ? (
                <Navigate to="/movies" />) :
                (<Login handleLogin={handleLogin} isLoggedIn={isLoggedIn} errorLogin={errorLogin} />)
            }
          />
          <Route
            path="/signup"
            element={
              isLoggedIn ? (<Navigate to="/movies" />) :
                (<Register
                  handleRegister={handleRegister}
                  isLoggedIn={isLoggedIn}
                  errorRegister={errorRegister}
                />
                )
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer></Footer>
      </div>
    </UserDataContext.Provider>
  );
}

export default App;
