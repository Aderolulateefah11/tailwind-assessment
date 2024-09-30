
import Nav from "./Components/Nav"
import Meet from "./Components/Meet"
import DTC from "./Components/DTC"
import Mail from "./Components/Mail"
import Profitpostcard from "./Components/Profitpostcard"
import Brand from "./Components/Brand"
import Launch from "./Components/Launch"
import Postpilot from "./Components/Postpilot"
import Drives from "./Components/Drives"
import Try from "./Components/Try"
import Trend from "./Components/Trend"
import Footer from "./Components/Footer"

export default function App() {
  return (
   <div>
    <section className="pl-10 pb-0">
      <Nav />
   </section>
   <section>
   < Meet />
   </section>
   <section>
    <DTC />
   </section>
   <section>
    <Mail/>
   </section>
   <section>
    <Profitpostcard/>
   </section>
   <section>
    <Brand />
   </section>
   <section>
    <Launch/>
   </section>
   <section>
    <Postpilot/>
   </section>
   <section>
    <Drives/>
   </section>
   <section>
    <Try/>
   </section>
   <section>
    <Trend/>
   </section>
   <section>
    <Footer/>
   </section>
   </div>
  )
}
