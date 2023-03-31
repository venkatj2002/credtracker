import Home from "./components/Home";
import Login from "./components/Login";
import { Routes, Route } from 'react-router-dom'
// import {Switch} from "react-router"
import NavBar from "./components/NavBar";
import UserDash from "./components/UserDash";
import OrganizationDash from "./components/OrganizationDash";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
import AccountAccess from "./components/AccountAccess";
function App() {
  // localStorage.setItem("isUserLogin",false);
  // localStorage.setItem("isCompanyLogin",false);
  // localStorage.setItem("isInstituteLogin",false);

  const bodyCss={

    backgroundColor: "black",
   // backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='1' y2='0'%3E%3Cstop offset='0' stop-color='%230FF'/%3E%3Cstop offset='1' stop-color='%23CF6'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%23F00'/%3E%3Cstop offset='1' stop-color='%23FC0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23FFF' fill-opacity='0' stroke-miterlimit='10'%3E%3Cg stroke='url(%23a)' stroke-width='2'%3E%3Cpath transform='translate(0 0)' d='M1409 581 1450.35 511 1490 581z'/%3E%3Ccircle stroke-width='4' transform='rotate(0 800 450)' cx='500' cy='100' r='40'/%3E%3Cpath transform='translate(0 0)' d='M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z'/%3E%3C/g%3E%3Cg stroke='url(%23b)' stroke-width='4'%3E%3Cpath transform='translate(0 0)' d='M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z'/%3E%3Crect stroke-width='8' transform='rotate(0 1089 759)' x='1039' y='709' width='100' height='100'/%3E%3Cpath transform='rotate(0 1400 132)' d='M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
    backgroundAttachment: "fixed",
    backgroundSize:" cover"
}
  return (
    <div style={{bodyCss}}>
      <NavBar />
      <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/userLogin" element={<Login isUser={true}/>} />
        <Route path="/instituteLogin" element={<Login isInstitute={true}/>} />
        <Route path="/companyLogin" element={<Login isCompany={true}/>} />
        <Route path="/signUp" element={<SignUp/>} />
        <Route path="/userDash" element={<UserDash />} />
        <Route path="/accountAccess" element={<AccountAccess />} />
        <Route path="/instituteDash" element={<OrganizationDash isInstitute={true}/>} />
        <Route path="/companyDash" element={<OrganizationDash isCompany={true}/>} />
      </Routes>
      </div>
      <Footer/>
    </div>
  );
}


export default App;
