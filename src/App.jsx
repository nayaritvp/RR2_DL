import { Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import Home from './views/Home'
import Pokemon from './views/Pokemon'
import Details from './views/Details'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/pokemones' element = {<Pokemon />} />
        <Route path='/pokemones/:name' element = {<Details />} />
      </Routes>
    </>
  )
}

export default App