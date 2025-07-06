import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Body from "./Pages/Body"
import Signup from "./Pages/Signup"
import Login from "./Pages/Login"
import DoubtSupport from './Pages/DoubtSupport'
import MyDoubts from './Pages/MyDoubts'
import AdminAllDoubts from './Pages/AdminAllDoubts'
import TestSeries from './Pages/TestSeries'
import Notes from './Pages/Notes'
import Help from './Pages/Help'
import About from './Pages/About'
import Footer from './components/Footer'
import Pros from './Pages/Pros'
<<<<<<< HEAD
import FloatingActions from "./components/FloatingActions";

=======
import AllHelp from './Pages/AllHelp'
>>>>>>> 4ace05b821fa3154f177fa9a2969942746538873


function App() {
 

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/body" element = {<Body/>}></Route>
        <Route path="/signup" element = {<Signup/>}></Route>
        <Route path="/login" element = {<Login/>}></Route>
        <Route path="/doubt" element = {<DoubtSupport/>}></Route>
        <Route path="/myDoubts" element = {<MyDoubts/>}></Route>
        <Route path="/allDoubts" element = {<AdminAllDoubts/>}></Route>
        <Route path="/testSeries" element = {<TestSeries/>}></Route>
        <Route path="/docengoNotes" element = {<Notes/>}></Route>
        <Route path="/help" element = {<Help/>}></Route>
        <Route path="/about" element = {<About/>}></Route>
        <Route path="/footer" element = {<Footer/>}></Route>
<<<<<<< HEAD
        <Route path="/pros" element = {<Pros/>}></Route>
        <Route path="/floatingactions" element={<FloatingActions />} />        
=======
>>>>>>> 4ace05b821fa3154f177fa9a2969942746538873
      </Routes>
    </BrowserRouter>
  )
}

export default App
