import img1 from "../Images/img1.png"
import img2 from "../Images/img2.png"
import img3 from "../Images/img3.png"
import img4 from "../Images/img4.png"
import img5 from "../Images/img5.png"
import img6 from "../Images/img6.png"
import brand from "../Images/brand.png"


const Brand=() =>{
    return (
        <div>
            <section className="pb-16">
                <div className="pt-10 pb-10 text-center  ">
                <h1 className="font-bold text-6xl max-lg:w-max max-lg:ml-96">Everything your brand needs to</h1>
                    <img className="pl-96 max-lg:ml-64" src={brand} alt=""/>
                  
                </div>
                <section className="flex justify-between max-lg:ml-20">
                    <div>
                        <div className="bg-orange-100 pr-4 pl-4m ml-20 h-96 pt-6 w-96 rounded-md max-lg:mr-32 max-lg:ml-20">
                            <img className="pl-6"src={img1} alt=""/>
                            <h1 className="font-bold text-center pt-3">Plug-and-play with</h1>
                            <h1 className="font-bold text-center ">your stack</h1>
                            <p className="pl-9 max-lg:pl-14">Native integration provide seamless</p>
                            <p className="pl-4 max-lg:pl-8">segmentation,automation & tracking.No</p>
                            <p className="pl-24 max-lg:pl-28">clunky spreadsheet</p>
                        </div>
                    </div>
                    <div className="bg-green-100 ml-16 mr-20 w-96 rounded-md max-lg:w-max max-lg:pl-24 max-lg:pr-24 max-lg:ml-6 max-lg:mr-2">
                        <di>
                            <img className="pt-16 pl-9 max-lg:-ml-2 max-lg:mr-40   "src={img2} alt=""/>
                            <h1 className="font-bold text-center pt-3 text-2xl max-lg:text-2xl">Run campaigns</h1>
                            <h1 className="font-bold text-center text-2xl max-lg:text-2xl">on autopilot</h1>
                            <p className="pl-12 max-lg:pl-10 ">Ink profits while you sleep: just set it and</p>
                            <p className="pl-40 max-lg:pl-20">forget it</p>
                            
                        </di>
                    </div>
                    <div>
                        <div className="bg-purple-100 mr-24 w-96 h-96 pb-6 rounded-md max-lg:ml-40" >
                            <img className="pt-8 pl-8"src={img3} alt=""/>
                            <h1 className="font-bold text-center pt-3 text-2xl">Real-time ROI dashboard</h1>
                            <p className="pl-14">Track performance of every postcard by</p>
                            <p className="pl-12">customer or discount code.Your CFO will</p>
                            <p className="pl-40">love it</p>
                        </div>
                    </div>
                    </section>
                    <section  className="flex justify-between max-lg:ml-20">
                    <div>
                        <div className="bg-cyan-100 w-96  mt-6 pb-4 rounded-md ml-20  max-xl:mr-20 max-xl:ml-20">
                            <img className="pl-10 pt-8  max-xl:mr-20"src={img4} alt=""/>
                            <h1 className="font-bold text-center pt-3 text-2xl">Deliver WOW with *real*</h1>
                            <h1 className="font-bold text-center text-2xl">handwritten cards</h1>
                            <p className="pl-12">Our proprietary robots use real pens and</p>
                            <p className="pl-16">Ink for an unforgettable VIP touch.</p>
                        </div>
                    </div>
                    <div>
                        <div className="bg-red-100 w-96 h-96 mt-6 mr-4 rounded-md  max-xl:mr-20 max-xl:ml-20">
                            <img className="pl-10 pt-8" src={img5} alt=""/>
                            <h1 className="font-bold text-center pt-3 text-2xl">Predictable pricing</h1>
                            <p className="pl-12">Unlike CPCs,postage rates don't change</p>
                            <p className="pl-14">based on competition or who you're</p>
                            <p className="pl-40">targeting</p>
                        </div>
                    </div>
                    <div>
                        <div className="bg-gray-100 w-96 pb-4 mt-6 mr-24 rounded-md  max-xl:mr-20 max-xl:ml-20">
                            <img className="pl-10 pt-4" src={img6} alt=""/>
                            <h1  className="font-bold text-center pt-2 text-2xl">Complimentary</h1>
                            <h1  className="font-bold text-center  text-2xl">concierge service</h1>
                            <p className="pl-12">DTC is our DNA.Our pros will build your</p>
                            <p className="pl-12">strategy and custom designs using battle-</p>
                            <p className="pl-32">tested best practices</p>
                        </div>
                    </div>
                    </section>
            </section>
        </div>
    )
}
export default Brand;