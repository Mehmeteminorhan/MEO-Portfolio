import { useSelector } from "react-redux"
import miRNA from '../assets/miRNA.jpg'
import pizza from '../assets/pizza.jpg'
import film from '../assets/films.jpg'

export default function Projects () {

    const info = useSelector(myStore=>myStore.info)

    return (
        <div id = 'projects' className="flex flex-col items-start w-full gap-10 py-12">
            <hr className="hrline"/>
            <h2 className="başlık">{info.projects.head}</h2> 
            <div className="w-full flex sm:flex-row xs:flex-col justify-between sm:gap-4 xs:gap-20"> 
                <div className="flex flex-col items-start sm:w-[30%] gap-4">
                    <img src={miRNA} className="md:w-full md:h-80 sm:h-40 "/>
                    <h3 className="altbaşlık">{info.projects.p1}</h3> 
                    <p className="prdes">{info.projects.c1}</p>
                    <div className="flex lg:gap-4 md:gap-2 xs:gap-1">
                        <button className="prbutton">R</button>
                        <button className="prbutton">Python</button>
                        <button className="prbutton">Machine Learning</button>
                    </div>
                    <div className="flex justify-between w-full">
                        <a className="prsite" href="https://github.com/Mehmeteminorhan/NegativeRNA">Github</a>
                        <a className="prsite" href="/">{info.projects.site}</a>
                    </div>
                </div>
                <div className="flex flex-col items-start sm:w-[30%] gap-4 ">
                    <img src={pizza} className="md:w-full md:h-80 sm:h-40" />
                    <h3 className="altbaşlık">{info.projects.p2}</h3> 
                    <p className="prdes">{info.projects.c2}</p>
                    <div className="flex lg:gap-4 md:gap-2 xs:gap-1">
                        <button className="prbutton">react</button>
                        <button className="prbutton">redux</button>
                        <button className="prbutton">axios</button>
                    </div>
                    <div className="flex justify-between w-full">
                        <a className="prsite" href="https://github.com/Mehmeteminorhan/fsweb-s7-challenge-pizza">Github</a>
                        <a className="prsite" href="/">{info.projects.site}</a>
                    </div>
                </div>
                <div className="flex flex-col items-start sm:w-[30%] gap-4">
                    <img src={film} className="md:w-full md:h-80 sm:h-40"/>
                    <h3 className="altbaşlık">{info.projects.p3}</h3>
                    <p className="prdes">{info.projects.c3}</p>
                    <div className="flex lg:gap-4 md:gap-2 xs:gap-1">
                        <button className="prbutton">react</button>
                        <button className="prbutton">redux</button>
                        <button className="prbutton">axios</button>
                    </div>
                    <div className="flex justify-between w-full">
                        <a className="prsite" href="https://github.com/Mehmeteminorhan/Film_archive_project">Github</a>
                        <a className="prsite" href="/">{info.projects.site}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}