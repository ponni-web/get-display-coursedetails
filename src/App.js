
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Home from './Home';


function App() {
  return (
    <div className="App">
      <div>
        <Routes>
              <Route path='/' element={<Login></Login>}></Route>
              <Route path='/home' element={<Home></Home>}></Route>

        </Routes>
      </div>
    </div>
  );
}

export default App;
