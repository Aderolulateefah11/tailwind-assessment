import div10 from "../Images/div10.png"
import div9 from "../Images/div9.png"
import div11 from "../Images/div11.png"
import Postpilot from "../Images/Postpilot.png"
import Doneforyou from "../Images/Doneforyou.png"
import Fightback from "../Images/Fightback.png"
import Powerful from "../Images/Powerful.png"


const Profitpostcard=()=>{
    return(
        <div className="min-h-max "> 
            <section className="bg-orange-100 max-lg:w-max max-lg:pl-64 max-lg:pr-64">
                <img className="ml-96 pt-10 max-lg:ml-56 max-lg:pr-52"src={Postpilot} alt=""/>
                <div className="text-center pt-8 font-bold text-3xl">
                  
                </div>
                <div className="pl-12 mt-16 max-lg:mr-80 max-lg:-ml-40">
                 <img className=""src={Powerful}  alt=""/>
                  <h1 className="font-bold text-xl">acquisition</h1>
                  <h1 className="font-bold text-xl">&retention</h1>
                  <p className="pt-5">Send one-off or triggered campaigns to customers</p>
                  <p>& prospects.Target email leads with MailMatch</p>
                  <img className="pt-5" src={div9} alt=""/>
                </div>
                <div className="float-right pr-56 pt-4 max-lg:pl-96 max-lg:mt-18 max-lg:ml-32 ">
                    <img src={Fightback} alt=""/>
                    <h1 className="font-bold text-2xl">updates,jacked-up</h1>
                    <h1 className="font-bold text-2xl">CPCs&spamfolders</h1>
                    <p>Deliver your message to all of your customers-for less than the</p>
                    <p>costof a click</p>
                    <img className="float-right" src={div10} alt=""/>
                </div>
                <div className="pl-12 mt-96 max-lg:-ml-40">
                    <img src={Doneforyou} alt=""/>
                    <p>From design & strategy to stamp-licking,our ecom </p>
                    <p>experts help you every step of the way</p>
                    <img src={div11} alt=""/>
                    <button className=" bg-orange-500 rounded-xl pl-12 pr-12 pt-2 pb-2 text-sm text-white border-b-4 border-l-2 border-t-2 border-r-4 border-t-1 border-black mt-8 mb-9">TRY IT RISK FREE</button>
                </div>
            </section>
        </div>
    )
}
export default Profitpostcard;
