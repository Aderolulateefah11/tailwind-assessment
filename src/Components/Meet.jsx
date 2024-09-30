import div from "../Images/div.png"
import div1 from "../Images/div1.png"
import Meets from "../Images/Meets.png"

const Meet =()=>{
    return (
        <div className="md:flex-grow ">
        <section className=" grid-flow-row columns-2  bg-emerald-100 pt-20 pl-8 h-fit max-sm:font-bold max-sm:flex max-sm:justify-between max-sm:overflow-hidden   max-lg:w-max max-lg:pl-24 max-lg:pr-40 max-sm:pl-12 max-sm:pr-12   ">
            <div className=" ">
                <img src={Meets} alt=""/>
    
                <p className="pt-4 pb-1 max-lg:text-2xl max-sm:text-4xl ">Remarkable results. Easier than email.Postcard marketing</p> 
                   <p className="max-xl::text-2xl max-sm:text-4xl sm:bg-flex-grow md:flex-grow max-lg:text-2xl"> reinvented for modern ecommerce</p>
                    <div className="flex mt-20 md:text-xl">
                    <button className=" bg-orange-500 rounded-xl  pl-12 pr-12 pt-5 pb-5 text-sm text-white border-b-4 border-l-2 border-t-2 border-r-4 border-t-1 border-black max-xl:text-xl max-sm:text-2xl"><a href="#">TRY IT RISK-FREE</a></button>
                    <img className="ml-12"src={div1} alt=""/>
                    </div>
                
                
            </div>
            <div>
            < img className="ml-32 sm:min-full md:flex-grow" src={div} alt=""/>
            </div>
        </section>
        </div>
    )
}
export default Meet;