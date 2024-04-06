import './App.css';
import { Routes, Route } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import Homepage from './pages/homepage/Homepage';
import MoviePage from './pages/movies/MoviePage';
import MovieDetail from './pages/movieDetail/MovieDetail';
import NotFoundPage from './pages/notFoundPage/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Homepage />} />
        <Route path='/movies'>
          <Route index element={<MoviePage />}/>
          <Route path=':id' element={<MovieDetail />} />
        </Route>
      </Route>

      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
  );
}

export default App;
