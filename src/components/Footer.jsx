import { useSelector } from "react-redux"


export default function Footer () {

    const info = useSelector(myStore=>myStore.info)
    const contactEmail = 'mehmeteorhan7@gmail.com'

    return (
    <footer id="footer" className="bg-white dark:bg-foo w-full">
        <div id = 'footer' className="flex flex-col w-full md:gap-16 md:p-20 sm:gap-8 sm:p-10 xs:gap-4 xs:p-4 bg-footer dark:bg-foo" >
            <h2 className="font-Inter font-semibold lg:text-5xl lg:w-1/3 text-left md:text-3xl sm:text-2xl xs:w-full xs:text-lg dark:text-h1 text-r-black">{info.footer.head}</h2>
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <p>👉</p>
                    <a className="font-medium font-Inter lg:text-xl underline sm:text-sm xs:text-xs dark:text-lilac text-red"href={`mailto:${contactEmail}`} >{contactEmail}</a>
                </div>
                <div className="flex md:gap-6 xs:gap-2">
                    <p className="font-medium font-Inter lg:text-lg md:text-base xs:text-xs dark:text-btn-t text-r-black">{info.footer.s1}</p>
                    <a className="font-medium font-Inter lg:text-lg text-green md:text-base xs:text-xs " href="https://github.com/Mehmeteminorhan">Github</a>
                    <a className="font-medium font-Inter lg:text-lg text-blue md:text-base xs:text-xs " href="https://www.linkedin.com/in/mehmeteorhan/">Linkedin</a>
                </div>
            </div>
        </div>
    </footer>
    )
}