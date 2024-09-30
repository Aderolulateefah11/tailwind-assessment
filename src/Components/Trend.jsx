
import Latest from "../Images/Latest.png"
import div29 from "../Images/div29.png"
import div28 from "../Images/div28.png"
import div27 from "../Images/div27.png"

const Trend=()=>{
    return (
        <div>
            <section className="bg-teal-50 pb-20 max-lg:w-max">
                <img className="ml-96 pt-14 mb-12 max-lg:pl-48"src={Latest} alt=""/>
            <div className="flex justify-between">
                <div className="ml-24 max-lg:mr-40">
                    <img src={div27} alt=""/>
                    <p className="text-2xl font-semibold mt-2">3 Low-Cost Campaigns</p>
                    <p className="text-2xl font-semibold">You must Run to Win BFCM</p>
                </div>
                <div className="max-lg:mr-40">
                    <img src={div28} alt=""/>
                    <p className="text-2xl font-semibold mt-2">Postcard Marketing:The</p>
                    <p className="text-2xl font-semibold">Deinite Guide to High</p>
                    <p className="text-2xl font-semibold">ROI [2022]</p>
                </div>
                <div className="mr-24 max-lg:mr-40"> 
                    <img src={div29} alt=""/>
                    <p className="text-2xl font-semibold mt-2">The ultimate Guide to Thank</p>
                    <p className="text-2xl font-semibold">You Notes for Ecommerce</p>
                </div>
                </div>
            </section>
        </div>
    )
}
export default Trend;