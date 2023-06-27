import './App.css'
import { Game } from "./components/Game";
import { Routes, Route } from 'react-router-dom'






function App() {
  return (
      <Routes>
        <Route path='/' element={<Game/>}></Route>
      </Routes>
  )
}

export default App;