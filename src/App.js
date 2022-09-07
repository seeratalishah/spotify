
import {Routes, Route} from 'react-router-dom';
import SpotifyLayout from './components/SpotifyLayout';
import Home from './components/Home';
import Search from './components/Search';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<SpotifyLayout />}> 
         <Route index element={<Home />} ></Route>
         <Route path='/spotifylayout/search' element={<Search />} ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
