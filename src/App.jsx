import { useEffect, useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css'
import Home from './HOME/home'
import Roles from "./ROLES/roles"
import Navigationbar, { Footer } from './COMPONENTS/components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Navigationbar></Navigationbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/roles" element={<Roles></Roles>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  )
}

export default App
