import './App.css'
import { Game } from "./components/Game"
import { Menu } from "./components/Menu"
import { SelectDifficulty } from "./components/SelectDifficulty"
import { GameMedium } from "./components/GameMedium"
import { GameHard } from "./components/GameHard"
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      
      <Routes>
        <Route path='/' element={<Menu/>}/>
        <Route path='Game' element={<Game/>}/>
        <Route path='SelectDifficulty' element={<SelectDifficulty/>}/>
        <Route path='GameMedium' element={<GameMedium/>}/>
        <Route path='GameHard' element={<GameHard/>}/>


      </Routes>
    </>
  )
}

export default App;