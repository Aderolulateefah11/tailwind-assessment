import PostPilotDTC from "../Images/PostPilotDTC.png"
import div20 from "../Images/div20.png"
import div21 from "../Images/div21.png"
import div22 from "../Images/div22.png"
import div23 from "../Images/div23.png"

const Postpilot=()=>{
    return (
        <div>
          <section className="pl-96 pt-20 pb-14  ml-28 ">
            <img className="max-lg:ml-64"src={PostPilotDTC}/>
          </section>
          <section className="flex justify-between max-lg:w-max max-sm:w-max ">
          <div className="border-b-2 border-r-2  border-t-2 rounded-lg border-black max-lg:mr-28 max-lg:pb-10 max-lg:text-xl">
                <img className="pr-6"src={div23} alt=""/>
                <p>if you layer in</p>
                <p>uppercharge</p>
                <p><b>PostPilot will</b></p>
                <p><b>ot.</b> killer tool</p>
            </div>
          <div className="border-b-2 border-r-2 border-l-2  border-t-2 rounded-lg border-black pl-10 pt-7 max-lg:mr-24  max-lg:text-xl">
                <img className="pr-6"src={div22} alt=""/>
                <p>ng <b>PostPilot</b> for years.Good for re-</p>
                <p>ment.And you can get creative with</p>
                <p>ssaging</p>
            </div>
            <div className="border-b-2 border-r-2 border-l-2  border-t-2 rounded-lg border-black pl-10 pt-7 max-lg:mr-20  max-lg:text-xl">
                <img className="pr-6" src={div21} alt=""/>
                <p>done some rad winbacks to</p>
                <p>days since purches that have</p>
                <p><b>PostPilot</b> team is one of my favs</p>
            </div>
            <div className="border-b-2  border-r-2 border-l-2 border-t-2 rounded-lg border-black pl-10 pt-7 max-lg:mr-12  max-lg:text-xl max-lg:w-96">
                <img src={div20}/>
                <p>done some rad winbacks to</p>
                <p>days since purches that have</p>
                <p><b>PostPilot</b> team is one of my favs</p>
                
            </div>
          </section>
          <div className="pt-16 pl-96 ml-56 max-lg:w-96">
          <button className=" bg-orange-500 rounded-xl pl-12 pr-12 pt-2 pb-2 text-sm text-white border-b-4 border-l-2 border-t-2 border-r-4 border-t-1 border-black mt-12 ml-14 max-lg:w-80 max-lg:h-24 max-lg:text-2xl max-lg:ml-44 max-sm:ml-14"><a href="#">TRY IT RISK-FREE</a></button> 
          </div>
        </div>
    )
}
export default Postpilot;