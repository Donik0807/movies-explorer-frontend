import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';
import { getUserData } from '../../utils/MainApi';

function App() {
  const [currentUser, setCurrentUser] = React.useState(null);
  const [checkingAuth, setCheckingAuth] = React.useState(true);

  React.useEffect(() => {
    setCheckingAuth(true);
    getUserData()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setCheckingAuth(false));
  }, []);

  return (
    <CurrentUserContext.Provider value={[currentUser, setCurrentUser]}>
      <BrowserRouter>
        <div className='wrapper'>
          <div className='content'>
            <Header></Header>
            <Routes>
              <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
              <Route path='/' element={<Main></Main>}></Route>
              <Route
                path='/movies'
                element={
                  !checkingAuth && (
                    <ProtectedRoute
                      element={Movies}
                      loggedIn={currentUser}
                    ></ProtectedRoute>
                  )
                }
              ></Route>
              <Route
                path='/saved-movies'
                element={
                  !checkingAuth && (
                    <ProtectedRoute
                      element={SavedMovies}
                      loggedIn={currentUser}
                    ></ProtectedRoute>
                  )
                }
              ></Route>
              <Route
                path='/profile'
                element={
                  !checkingAuth && (
                    <ProtectedRoute
                      element={Profile}
                      loggedIn={currentUser}
                    ></ProtectedRoute>
                  )
                }
              ></Route>
              <Route path='/signin' element={<Login></Login>}></Route>
              <Route path='/signup' element={<Register></Register>}></Route>
            </Routes>
          </div>
          <Footer></Footer>
        </div>
      </BrowserRouter>
    </CurrentUserContext.Provider>
  );
}

export default App;
