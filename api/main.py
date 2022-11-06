# Importing necessary libraries
import uvicorn
from pydantic import BaseModel
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import numpy as np
import keras

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
loaded_model = keras.models.load_model("../my_model")

# Setting up the home route
@app.get("/")
def read_root():
    return {"data": "Welcome to the Patient No Show Prediction API"}

# Setting up prediction route
@app.post("/predict")
def predict(array: list):
    array = np.asarray(array).astype('float32')
    loaded_results = loaded_model.predict(array)
    loaded_results = np.asarray(loaded_results).astype('int32')
    return loaded_results.tolist()

# Configuring the server host and port
if __name__ == '__main__':
    uvicorn.run(app, port=8080, host='0.0.0.0')