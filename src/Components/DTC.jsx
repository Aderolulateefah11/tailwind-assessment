import div5 from "../Images/div5.png"
import div4 from "../Images/div4.png"
import div3 from "../Images/div3.png"
import div2 from "../Images/div2.png"

const DTC=()=>{
    return(
        <section className="pb-10 overflow-hidden max-lg:w-max ">
          <div className="">
            <h1 className="text-center pt-12 text-6xl font-semibold   max-lg:pl-96 max-lg:pr-96 max-sm:pr-60 max-sm:pl-60">Trusted by thousands </h1>
                <h1  className="text-center pt-6 text-6xl font-semibold   max-sm:pr-80 max-sm:pl-80"> of top DTC <i className="text-2xl text-emerald-700">brands</i></h1>
          </div>
          <div className="flex justify-between  pt-16 ">
            <img className="max-lg:mr-18 ml-28 max-sm:mr-14 max-sm:ml-14" src={div2} alt=""/>
            <img className="max-lg:mr-8 ml-28 max-sm:mr-14 max-sm:ml-20" src={div3} alt=""/>
            <img className="max-lg:mr-18 ml-20 max-sm:mr-14 max-sm:ml-20"  src={div4} alt=""/>
            <img className="max-lg:mr-36 ml-20 max-sm:mr-0 max-sm:ml-28" src={div5} alt=""/>
          </div>
        </section>
    )
}
export default DTC;