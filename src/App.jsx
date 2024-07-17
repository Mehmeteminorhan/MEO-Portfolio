

import './App.css'
import { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header";
import Intro from "./components/Intro";
import Yetenekler from "./components/Yetenekler";
import TopHeader from "./components/TopHeader";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";


function App() {
  const dispatch = useDispatch();
  const lang = useSelector(myStore => myStore.lang);



  useEffect(() => {
    const mode = localStorage.getItem('mode');
    if (mode === 'false'){
      document.querySelector('html').classList.add('dark');
    } else {
      document.querySelector('html').classList.remove('dark');
    }
  },[lang,dispatch])

  /*className="flex flex-col lg:gap-20 py-12 lg:px-20 md:px-10 sm:gap-12 sm:px-8 xs:gap-8 xs:px-4 xs:py-8 dark:bg-d-body bg-white"*/


  return (<>
    <div className='flex flex-col mx-auto lg:gap-5 lg:px-20 dark:bg-d-body bg-white'>
      <ToastContainer />
      <Header/> 
      <TopHeader/>
      <Intro/>
      <Yetenekler/>
      <Profile/>
      <Projects/>
    </div>
    <Footer/>
    </>
  )
}

export default App
