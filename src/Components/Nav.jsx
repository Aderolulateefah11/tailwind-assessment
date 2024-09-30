import post from "../Images/post.png"

const Nav =() => {
    return (
        <div className="max-sm:justify-evenly max-lg:justify-between max-lg:w-max max-lg:mt-6 max-sm:mb-0">
            <header className="pt-5 ">
                       
                <nav className="flex justify-between items-center ">
                <a className="">
                <img className="max-lg:mr-40 max-lg:ml-18 max-sm:-ml-72" src={post} alt=""/>
                </a>
                 <ul className="flex-2 flex justify-center items-center gap-16 pr-10">
                    <a className="max-sm:pr-5 max-sm:text-4xl max-xl:text-2xl max-xl:pr-10"href="#">Resources</a>
                    <a className="max-sm:pr-5 max-sm:text-4xl max-xl:text-2xl max-xl:pr-10"href="#">Success stories</a>
                    <a className="max-sm:pr-5 max-sm:text-4xl max-xl:text-2xl max-xl:pr-10" href="#">Company</a>
                    <a  className="max-sm:pr-5 max-sm:text-4xl max-xl:text-2xl max-xl:pr-10"href="#">Pricing</a>
                    <button className=" max-xl:text-2xl max-xl:pr-10 max-xl:pl-10 max-sm:ml-10  max-sm:text-4xl max-lg:pb-2 rounded-lg border-b-4 border-r-4 border-l-2 pr-2 pl-2 border-t-2 border-black"><a href="#">Login</a></button>
                    <button className= "bg-orange-500 max-sm:ml-10 max-sm:pl-5 max-sm:mt-3 max-sm:pt-2 max-sm:pr-5   max-sm:w-60 max-sm:pb-2  text-sm rounded-xl p-2  text-white border-b-2 border-r-2  border-t-1 border-black max-md:pt-2 max-lg:text-2xl max-lg:pr-10 max-xl:pt-0 max-lg:pb-0 max-lg:w-72 max-lg:mt-2 max-lg:pl-10 max-lg:h-14 max-sm:h-24 max-sm:text-4xl"><a href="#" >create free account</a></button>
                 </ul>
                  
                </nav>
            </header>
        </div>
    )
}
export default Nav;