import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Nav/Navbar'
import Interface from './components/Interface/Interface';

function App() {
  

  return (
    <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Interface/>} />
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
