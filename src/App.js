import './App.css';
import Header from './components/header';
import PatientForm from './components/patientform';
import Home from './components/home';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
    <Header />
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/patient" element={<PatientForm />}></Route>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
