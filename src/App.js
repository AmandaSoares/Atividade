import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Contato from './components/Contato';
import Suporte from './components/Suporte';


function App() {
  return (
    <>
    <Router>
    <Header/>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/contato'} element={<Contato/>}/>
        <Route path={'/suporte'} element={<Suporte/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
