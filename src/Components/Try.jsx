import img from "../Images/img.png"

import div1 from "../Images/div1.png"
const Try=()=>{
    return (
        <div>
          <section className="grid-flow-row columns-2 mt- bg-orange-600 max-lg:w-max max-lg:pl-5">
            <div className="ml-14 pt-20 max-lg:pl-10 max-lg:text-2xl">
                <h1 className="font-bold text-4xl text-white">Try PostPiolot</h1>
                <h1 className="font-bold text-4xl text-white"> Risk-Free</h1>
                <p className="text-white pt-6">No contracts.No comments.Guaranted results.*</p>
                <div className="flex">
                <button className="mt-12  font-semibold border-l-2 border-r-4 border-t-2 border-b-4 border-black pt-1 pb-1 h-11 pr-6 pl-6 rounded-xl bg-white"> GET STARTED</button>
                <img  className="pl-10 mt-10" src={div1} alt=""/>
                
                </div>
                <p className="mt-6 text-white">*for qualified brands with over $1m annual shopify revenue</p>
            </div>
            <div>
              <img className="max-lg:pl-72"src={img} alt=""/>
            </div>
          </section>
        </div>
    )
}
export default Try;