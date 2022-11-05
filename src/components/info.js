function Info() {
    return(
        <div>
            <h1>Info Page</h1>
            <p className = "paragraph">First we downloaded a public dataset that included many factors for patients such as age, gender, diabetes, hypertension, alcoholism, handicap,
                 and SMS Received as well as whethere they missed their appointment or not. We dropped irrelevant data such as the patient ID and date/time of the
                 appointment. Before training the model, the age was normalized and the rest of the categorical data was converted to numbers. Using the sklearn 
                 python library, we split the data into training, validation, and testing data. We tested several different regression models to see which one
                yielded the most accurate results. Out of the linear, lasso, ridge, logistic, and Bayesian regressions, the logistic regression had the highest
                efficacy of about 80%. </p>
        </div>
    )
}

export default Info;