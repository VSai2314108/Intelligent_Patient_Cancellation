import "./css/info.css" 
import picture from './logisticcurve.png'

function Info() {
    return(
        <div>
            <br></br>
            <p id= "header">Info Page</p>
            <p> First we downloaded a public dataset that included many factors for patients such as age, gender, diabetes, hypertension, alcoholism, handicap,
                 and SMS Received as well as whether they missed their appointment or not. We dropped irrelevant data such as the patient ID and date/time of the
                 appointment. Before training the model, the age was normalized and the rest of the categorical data was converted to numbers. Using the sklearn 
                 python library, we split the data into training, validation, and testing data. We tested several different regression models to see which one
                yielded the most accurate results. Out of the linear, lasso, ridge, logistic, and Bayesian regressions, the logistic regression had the highest
                efficacy of about 80%. We then discovered we had the wrong activiation function. We changed it from softmax to sigmoid which is the correct activiation
                function for binary output. This raised the accuracy to 96%.</p>
                
                <img src={picture} height = "450" width = "600" alt="Logistic Regression" class ="center"/>
            
        </div>
    )
}

export default Info;