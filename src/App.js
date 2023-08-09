import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Create from "./pages/Create";
import Policy from "./pages/Policy";
import Account from "./pages/Account";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Create" element={<Create />} />
        <Route path="/Policy" element={<Policy />} />
        <Route path="/Account" element={<Account />} />
      </Routes>
    </>
  );
}

export default App;
