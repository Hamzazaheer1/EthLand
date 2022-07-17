import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './routes/components/Navbar/Navbar';
import AdminLogin from './routes/components/AdminLogin/Login'
import SuperAdminDashboard from './routes/components/SuperAdminDashboard/SuperAdminDashboard'
import Help from "./routes/components/Help/Navbar"
import GettingStartedHelp from "./routes/components/Help/pages/GettingStartedHelp"
import UserRegisterHelp from "./routes/components/Help/pages/UserRegisterHelp"
import UserLoginHelp from "./routes/components/Help/pages/UserLoginHelp"

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
        <Route path="/help" element={<Help/>}></Route>
        <Route path="/gettingstartedhelp" element={<GettingStartedHelp/>}></Route>
        <Route path="/userregisterhelp" element={<UserRegisterHelp/>}></Route>
        <Route path="/userloginhelp" element={<UserLoginHelp/>}></Route>

        {/* <Route path="/login/superadmindashboard" element={<SuperAdminDashboard/>}/> */}
    </Routes>
    </div>
  );
}

export default App;
