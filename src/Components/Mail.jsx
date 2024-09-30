
import Whyus from "../Images/Whyus.png"

const Mail=()=>{
    return (
        <div className="pt-14 bg-emerald-50 pb-20 max-lg:w-max max-lg:pr-64 max-lg:pl-80 max-lg:overflow-hidden max-sm:pl-36 max-sm:pr-36">
            <section className="pb-11">
                <img className="ml-96 -mr-80 w-max"src={Whyus} alt=""/>
                
            </section>
            <section className="flex justify-evenly max-xl:flex-grow max-xl:flex-1 flex-nowrap  ">
                <div className="mt-16 max-sm:mt-36 max-lg:mt-32 max-lg:-ml-28  max-sm:-ml-18 max-sm:-mr-18">
                    <h1 className="font-bold text-4xl pl-20">28X</h1>
                    <p className="text-center  max-sm:mr-0 max-sm:mt-6 max-sm:text-4xl max-lg:text-2xl ">Higher response rate than email</p>
                    <p className="pl-20  max-sm:text-4xl max-lg:text-2xl">& digital</p>
                </div>
                <div className="max-sm:mt-10 ml-8 max-lg:ml-56  max-sm: max-sm:ml-16 max-lg:mt-6">
                    <button className="bg-orange-500 rounded-xl pr-4 pl-4 pt-16 pb-4 text-xs text-white border-b-4 border-r-4  border-t-2 border-l-2 border-black w-20 max-sm:ml-28 max-sm:text-2xl max-sm:pl-6 max-sm:w-36 max-sm:h-52 max-lg:pl-4 max-lg:pr-18 max-lg:w-28 max-lg:text-xl" >90% Direct Email</button>
                    <button className="bg-emerald-100 rounded-xl pr-6 pl-6 pt-2 pb-1 text-xs border-b-4 border-l-2 border-r-4  border-t-2 border-black w-24 ml-4 font-bold max-sm:ml-4 max-lg:pb-2 max-lg:text-xl max-lg:pl-9
                     max-lg:pr-9 max-lg:w-32"><span className="font-bold text-2xl">20% </span>Email</button>
                    <p className="pl-3  max-sm:text-4xl max-sm:ml-8 max-sm:mt-6 max-lg:text-2xl max-lg:-ml-4">Your messages get read</p>
                </div>
                <div className="mt-16 max-sm:ml-40 max-lg:ml-60 max-sm:mt-36 max-lg:mt-32">
                    <h1 className="font-bold text-4xl">17Days</h1>
                    <p className="pl-4 max-sm:text-4xl max-sm:mr-6 max-sm:mt-6 max-lg:text-2xl">Lifespan of a postcard vs.</p>
                    <p className="pl-4 max-sm:text-4xl max-sm:mr-6 max-lg:text-2xl">seconds for email or SMS</p>
                </div>
            </section>
        </div>
    )
}
export default Mail;