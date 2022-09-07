import SideBar from './components/SideBar';
import {Routes, Route} from 'react-router-dom';
import SpotifyLayout from './components/SpotifyLayout';
import Home from './components/Home';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<SpotifyLayout />}> 
        <Route index element={<Home />} ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
