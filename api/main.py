# Importing necessary libraries
import uvicorn
import pickle
from pydantic import BaseModel
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Initializing the fast API server
app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Loading up the trained model
# model = pickle.load(open('../model/hireable.pkl', 'rb'))

# Defining the model input types
class Appointment(BaseModel):
    gender: int
    age: float
    welfare: int
    hypertension: int
    diabetes: int
    alcholic: int
    handicap: int
    sms: int

# Setting up the home route
@app.get("/")
def read_root():
    return {"data": "Welcome to the Patient No Show Prediction API"}

@app.post("/predict")
def predict(data: list):
    return data

# Setting up the prediction route
""" @app.post("/prediction/")
async def get_predict(data: Appointment):
    sample = [[
        data.gender,
        data.age,
        data.welfare,
        data.hypertension,
        data.diabetes,
        data.alcholic,
        data.handicap,
        data.sms
    ]]

    hired = model.predict(sample).tolist()[0]

    return {
        "data": {
            'prediction': hired,
            'interpretation': 'Candidate can be hired.' if hired == 1 else 'Candidate can not be hired.'
        }
    } """

# Configuring the server host and port
if __name__ == '__main__':
    uvicorn.run(app, port=8080, host='0.0.0.0')