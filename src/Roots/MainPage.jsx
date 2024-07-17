import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "../components/Header";
import Intro from "../components/Intro";
import Yetenekler from "../components/Yetenekler";
import TopHeader from "../components/TopHeader";
import Profile from "../components/Profile";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

export default function MainPage () {

    return (
        <div>
            <div className="flex flex-col max-w-1440 mx-auto lg:gap-5 lg:px-20 dark:bg-d-body bg-white" >
                <ToastContainer />
                <Header/> 
                <TopHeader/>
                <Intro/>
                <Yetenekler/>
                <Profile/>
                <Projects/>
            </div>
            <Footer/>
            
        </div>
        
    )
}