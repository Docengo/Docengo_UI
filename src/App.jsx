import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedLayout from "./components/ProtectedLayout"
import PublicRoute from "./components/PublicRoute";

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
import OtherExamsPage from "./Pages/OtherExamsPage"
import AllHelp from "./Pages/AllHelp"
import AllFeedbacks from "./Pages/AllFeedbacks"
import NeetBatches from "./components/NeetBatches";
import JeeBatches from "./components/JeeBatches";
import Batches from "./Pages/Batches";
import RegistrationPayment from "./components/RegisterationPayment";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
 
<BrowserRouter>
<Toaster position="top-center" reverseOrder={false} />
  <NetworkStatus />
  <Routes>
    {/* Public routes */}
    <Route element={<PublicRoute/>}>
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
    </Route>

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
      <Route path="/neet-batches" element={<NeetBatches />} />
      <Route path="/jee-batches" element={<JeeBatches />} />
      <Route path="/other-exams" element={<OtherExamsPage/>} />
      <Route path="/allHelp" element={<AllHelp/>}/>
      <Route path="/allFeedbacks" element={<AllFeedbacks/>}/>
      <Route path="/batches" element={<Batches/>}/>
      <Route path="/register-payment" element={<RegistrationPayment/>}/>
      
    </Route>
  </Routes>
</BrowserRouter>

 );
}

