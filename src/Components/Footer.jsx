
import Eco from "../Images/Eco.png"
import arrow from "../Images/arrow.png"
import Printed from "../Images/Printed.png"
import post from "../Images/post.png"

const Footer=()=>{
    return(
        <div>
          <section className="flex justify-between mt-24 mb-10 max-lg:w-max">
            <div className="ml-24 max-lg:mr-28 max-lg:text-2xl">
              <img src={Eco} alt=""/>
              <p className="mt-4 text-gray-500">Our paper is sourced from FSC-certified</p>
              <p className=" text-gray-500">mills.We plant enough trees to more than</p>
              <p className=" text-gray-500">double our paper usage</p>
            </div>
            <div className="max-lg:mr-28 max-lg:text-2xl max-lg:ml-14">
                <h1 className="font-semibold pb-3 -mt-2">COMPANY</h1>
                <p className="pb-3">About us</p>
                <p className="pb-3">Partner program </p>
                <p className="pb-3">Career</p>
                <p className="pb-3">Contact us</p>
                <p className="pb-3">Privacy Policy</p>
                
            </div>
            <div className="max-lg:mr-28 max-lg:ml-14 max-lg:text-2xl">
                <p className="pb-3 pt-6">Pricing</p>
                <p className="pb-3">Reviews</p>
                <p className="pb-3">Direct Mail Academy</p>
                <p className="pb-3">Success stories</p>
                <p className="pb-3">Terms & conditions</p>
            </div>
            <div className="mr-20 max-lg:text-2xl max-lg:ml-18">
                <h1 className="font-semibold pb-6">CONTACT</h1>
                <div className="flex mb-8">
                 <img className=""src={arrow} alt=""/>
                 <p className="ml-4 text-gray-800">support@postpilot.com</p>
                </div>
               
               <img src={Printed} alt=""/>
            </div>
          </section>
          <hr></hr>
          <section className="mt-12 grid-flow-row columns-2 mb-24 max-lg:w-max">
              <img className="ml-20" src={post} alt=""/>
              <button  className="rounded-lg border-b-4 ml-80 border-r-4 border-l-2 pr-4 pl-4 pt-1 pb-1 text-sm border-t-2 border-black max-lg:mr-20  max-lg:pb-2 max-lg:text-2xl">Login</button>
              <button className=" bg-orange-500 ml-6 rounded-xl pl-10 pr-10 pt-2 pb-2 text-sm text-white border-b-4 border-l-2 border-t-2 border-r-4 border-t-1 border-black max-lg:mr-20 max-lg:text-2xl max-lg:pb-4 "><a href="#">Try it for free</a></button>

          </section>
        </div>
    )
}
export default Footer;