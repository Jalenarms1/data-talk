import React, { useEffect, useRef, useState } from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdOutlineAddBox } from 'react-icons/md';
import Canvas from './pages/Canvas';
import { FcFlowChart } from 'react-icons/fc';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import LandingPage from './pages/LandingPage';
import { UserContextProvider } from './context/userContext';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';


const App = () => {
  const [isShowingLogin, setIsShowingLogin] = useState<boolean>(false)
  const [isShowingSignup, setIsShowingSignup] = useState<boolean>(false)

  return (
    <>
      <UserContextProvider>
        <div className="h-full w-full relative">
        {isShowingLogin && <SignIn setIsShowingLogin={setIsShowingLogin} setIsShowingSignup={setIsShowingSignup} />}
        {isShowingSignup && <SignUp setIsShowingLogin={setIsShowingLogin} setIsShowingSignup={setIsShowingSignup} />}
          <Navbar setIsShowingLogin={setIsShowingLogin} setIsShowingSignup={setIsShowingSignup}  />
          <Router>
            <Routes>
              <Route path='/' element={<LandingPage setIsShowingLogin={setIsShowingLogin} setIsShowingSignup={setIsShowingSignup} />} />

            </Routes>
          </Router>
          {/* <Canvas /> */}
      </div>

      </UserContextProvider>
    </>
  )
}

export default App
