import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Display from './view/Display'
import Search from './view/Search'
import About from './view/About'
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Display />} />
        <Route path='/buscar' element={<Search />} />
        <Route path='/listar' element={<Display />} />
        <Route path='/sobre' element={<About />} />
      </Routes>
    </Router>
  )
}
// yarn add react-icons
export default App
