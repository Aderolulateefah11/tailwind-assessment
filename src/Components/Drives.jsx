
import card from "../Images/card.png"
import Campaigns from "../Images/Campaigns.png"
import div26 from "../Images/div26.png"

const Drives=()=>{
    return (
        <div >
            <section  className="flex  mt-20 bg-purple-100 pt-16 max-lg:w-max  max-lg:pl-24 max-lg:pr-64">
                <div className="ml-20">
                    <img src={card} alt=""/>
                </div>
                <div className=" ml-40">
                    <img src={Campaigns} alt=""/>
                    <p className="max-lg: text-2xl">The supplements brand wanted to offset high ad costs</p>
                    <p className="max-lg: text-2xl" >and reach dormant customers.They scored 1000%+ ROIs.</p>
                        <div className="grid-flow-row columns-3 mt-10">
                            <h1> <span className="font-bold text-2xl">1468%</span></h1>
                            <h1 className="font-bold text-2xl">8.59%</h1>
                            <h1 className="font-bold text-2xl">$73,457</h1>
                        </div>
                        <div  className="grid-flow-row columns-3" >
                            <p className="max-lg: text-2xl">ROI</p>
                            <p className="max-lg: text-2xl">Conversion Rate</p>
                            <p className="max-lg: text-2xl">Sales Generated</p>
                        </div>
                        <button className="mt-10  font-semibold border-l-2 border-r-4 border-t-2 border-b-4 border-black pt-2 pb-2 pr-6 pl-6 rounded-xl bg-white"> READ CASE STUDY</button>
                    
                </div>
                
            </section>
            <div className="  bg-purple-100 pl-72 -mt-12 pb-36 max-lg:w-max max-lg:pl-52 max-lg:pr-80 max-lg:mr-10 ">
                <img  className="-mb-14"src={div26} alt=""/>
                </div>
        </div>
    )
}
export default Drives;