import React, { useEffect } from 'react'
import "./App.css";
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import Home from "../src/pages/Home";
import Jobs from "../src/pages/Jobs";
// import Dashboard from "../src/pages/Dashboard";
import PostApplication from "../src/pages/PostApplication";
import Register from '../src/pages/Register';
import Login from "../src/pages/Login";
import NotFound from "../src/pages/NotFound";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { getUser } from './store/slices/userSlice';


const App = () => {

const dispatch=useDispatch();
useEffect(()=>{
  dispatch(getUser());
},[]);


  return (
    <>
      <Router>
      <Navbar/>
<Routes>
 
  <Route path='/' element={<Home/>} />
  <Route path='/jobs' element={<Jobs/>}/>
  {/* <Route path='/dashboard' element={<Dashboard/>}/> */}
  <Route path='/post/application/:jobId' element={<PostApplication/>}/>
  <Route path='/register' element={<Register/>} />
  <Route path='/login' element={<Login/>} />
  <Route path='*' element={<NotFound/>}/>

</Routes>
   <Footer/>
  <ToastContainer position='top-right' theme='dark'/>
      </Router>
   </>
  )
}

export default App

