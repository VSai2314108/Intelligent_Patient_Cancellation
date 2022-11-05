import logo from "./photo.jpeg"; // with import

function Home() {
    return(
        <div>
        <center>
            <h1>Home Page</h1>
            <p>We set out to determine whether or not a patient would miss their doctor's appointment based off a number of factors including age and gender. </p>
            <p>Missing appointments can lead to disruptions in the health car delivery system, the poor allocation of resources, and it delays the care of the patient.</p>
            </center>
            <img src={logo} alt="Doctor and Patient" width="612" height="408" class = "center" />
        </div>
    )


}
export default Home;