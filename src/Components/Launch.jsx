import fast from "../Images/fast..png"
import div16 from "../Images/div16.png"
import div17 from "../Images/div17.png"
import div18 from "../Images/div18.png"
import div19 from "../Images/div19.png"
const Launch=()=>{
  return (
    <div className="bg-cyan-100 pb-14 max-lg:w-max max-lg:pl-96 max-lg:pr-96 ">
      <section className="pl-96 pt-16 max-lg:pl-80 ">
       <img className="" src={fast} alt=""/>
      </section>
      <section className="pl-12 max-lg:pl-0 max-lg:pr">
        <div className="max-lg:pr-" >
        <img src={div16} alt=""/>
        
        </div>
        <div>
        <img src={div17} alt=""/>
        
        </div>
        <div>
        <img src={div18} alt=""/>
        
        </div>
        <div>
        <img src={div19} alt=""/>
      
        </div>
      </section>
    </div>
  )
}
export default Launch;