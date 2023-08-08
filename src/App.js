import './App.css';
import { Routes, Route } from'react-router-dom';
import Header from './components/Header';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Search from './pages/Search';
import Create from './pages/Create';
import Policy from './pages/Policy';
import Account from './pages/Account';

function App() {
  return(
    <>
    {/* <Header /> */}
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/create" element={<Create />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="/account" element={<Account />} />
    </Routes>
    </>
  )
}

export default App;
