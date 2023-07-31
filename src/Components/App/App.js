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

function App() {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <div className='content'>
          <Header></Header>
          <Routes>
            <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
            <Route path='/' element={<Main></Main>}></Route>
            <Route path='/movies' element={<Movies></Movies>}></Route>
            <Route
              path='/saved-movies'
              element={<SavedMovies></SavedMovies>}
            ></Route>
            <Route
              path='/profile'
              element={
                <Profile
                  user={{ name: 'Виталий', email: 'pochta@yandex.ru' }}
                ></Profile>
              }
            ></Route>
            <Route path='/signin' element={<Login></Login>}></Route>
            <Route path='/signup' element={<Register></Register>}></Route>
          </Routes>
        </div>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
