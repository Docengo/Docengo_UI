<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedLayout from "./components/ProtectedLayout"
=======
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
import AllHelp from './Pages/AllHelp'
import UserProfile from './Pages/UserProfile'
import EditProfile from './components/EditProfile'
import NetworkStatus from './components/NetworkStatus';
import OtherExamsPage from './Pages/OtherExamsPage'; // ⬅️ new page
>>>>>>> 59ad0ff2d72388eb91f15aacd6e5a7c9ce5f4067

// Public
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";

// Protected
import Body from "./Pages/Body";
import DoubtSupport from "./Pages/DoubtSupport";
import MyDoubts from "./Pages/MyDoubts";
import AdminAllDoubts from "./Pages/AdminAllDoubts";
import TestSeries from "./Pages/TestSeries";
import Notes from "./Pages/Notes";
import Help from "./Pages/Help";
import About from "./Pages/About";
import Footer from "./components/Footer";
import UserProfile from "./Pages/UserProfile";
import EditProfile from "./components/EditProfile";
import NetworkStatus from "./components/NetworkStatus"

export default function App() {
  return (

<<<<<<< HEAD
<BrowserRouter>
  <NetworkStatus />
  <Routes>
    {/* Public routes */}
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />

    {/* Protected routes */}
    <Route element={<ProtectedLayout />}>
      <Route path="/body" element={<Body />} />
      <Route path="/doubt" element={<DoubtSupport />} />
      <Route path="/myDoubts" element={<MyDoubts />} />
      <Route path="/allDoubts" element={<AdminAllDoubts />} />
      <Route path="/testSeries" element={<TestSeries />} />
      <Route path="/docengoNotes" element={<Notes />} />
      <Route path="/help" element={<Help />} />
      <Route path="/about" element={<About />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/myProfile" element={<UserProfile />} />
      <Route path="/editProfile" element={<EditProfile />} />
    </Route>
  </Routes>
</BrowserRouter>

 );
=======
    <BrowserRouter>
    <NetworkStatus />
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
        <Route path="/myProfile" element = {<UserProfile/>}></Route>
        <Route path="/editProfile" element = {<EditProfile/>}></Route>
        <Route path="/pros" element = {<Pros/>}></Route>
        <Route path="/allHelp" element = {<AllHelp/>}></Route>
        <Route path="/other-exams" element={<OtherExamsPage />} />
      </Routes>
    </BrowserRouter>
  )
>>>>>>> 59ad0ff2d72388eb91f15aacd6e5a7c9ce5f4067
}

