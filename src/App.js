import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './routes/components/Navbar/Navbar';
import AdminLogin from './routes/components/AdminLogin/Login'
import SuperAdminDashboard from './routes/components/SuperAdminDashboard/SuperAdminDashboard'
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
        <Route path="login" element={< AdminLogin/>}/>
        <Route path="superadmindashboard" element={<SuperAdminDashboard/>}/>
    </Routes>
    </div>
  );
}

export default App;
