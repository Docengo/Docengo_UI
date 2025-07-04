import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Body from "./Pages/Body"
import Signup from "./Pages/Signup"
import Login from "./Pages/Login"
import DoubtSupport from './Pages/DoubtSupport'
import MyDoubts from './Pages/MyDoubts'


function App() {
 

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/body" element = {<Body/>}></Route>
        <Route path="/signup" element = {<Signup/>}></Route>
        <Route path="/login" element = {<Login/>}></Route>
        <Route path="/doubt" element = {<DoubtSupport/>}></Route>
        <Route path="/myDoubts" element = {<MyDoubts/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
