import { useCallback, useEffect, useState } from 'react'

import './App.css'
import { Home } from '../components/Home'
import {useToken} from "../components/useToken"
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Login } from "../components/Login";





function App() {
  const {token,setToken}=useToken();

  if(!token){
    return <Login setToken={setToken}></Login>
  }
  
  
  
  return (
    <div className="wrapper">
{/*       <h1>Application</h1> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}>
                    
       
          </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
  
}

export default App
