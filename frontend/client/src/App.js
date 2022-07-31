import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import AdminLogin from './components/AdminLogin/Login'
import SuperAdminDashboard from './components/SuperAdminDashboard/SuperAdminDashboard'
import GettingStartedHelp from "./components/Help/pages/GettingStartedHelp"
import UserRegisterHelp from "./components/Help/pages/UserRegisterHelp"
import UserLoginHelp from "./components/Help/pages/UserLoginHelp"
import ContactUs from "./components/ContactUs/ContactUs"
import AboutUs from "./components/AboutUs/AboutUs"

import { useContext } from "react";
import { themeContext } from "./Context";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App" 
    style={{
      background: darkMode ? "black" : "",
      color: darkMode ? "white" : "",
    }}
    >
      <Routes >
        <Route path="/" element={<Navbar />} />
        <Route path="/login" element={< AdminLogin/>} /> 
        <Route path="/superadmindashboard" element={< SuperAdminDashboard/>} /> 
        <Route path="/gettingstartedhelp" element={<GettingStartedHelp/>}></Route>
        <Route path="/userregisterhelp" element={<UserRegisterHelp/>}></Route>
        <Route path="/userloginhelp" element={<UserLoginHelp/>}></Route>
        <Route path="/contactus" element={<ContactUs/>}></Route>
        <Route path="/aboutus" element={<AboutUs/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
