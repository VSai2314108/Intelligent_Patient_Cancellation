import logo from "./photo.jpeg"; // with import
import "./css/home.css"
function Home() {
    return(
        <div>
        <center>
            <h1 id="header">Samaya</h1>
            <p id = "first"> We used a machine learning model to determine whether or not a patient would miss their doctor's appointment based off various factors like age and gender. 
            This website is a tool meant for hospital providers - it predicts whether a patient will miss their appointment, and then displays it.</p>
            <p id="second">Missing appointments can lead to disruptions in the health car delivery system, the poor allocation of resources, and it delays the care of the 
            patient. We aim to conserve hospital costs and reduce wasted time by allowing hospitals to double book or follow up more with patients that are likely to miss 
            their appointment.  </p>

        
            </center>
            <center>
            <img src={logo} alt="Doctor and Patient" width="612" height="408" class = "center" />
            </center>
            
        </div>
    )


}
export default Home;