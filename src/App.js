import './App.css';
import Header from './components/header';
import ProviderForm from './components/providerform';
import Home from './components/home';
import Info from './components/info';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
    <Header />
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/info" element={<Info />}></Route>
          <Route path="/provider" element={<ProviderForm />}></Route>
          <Route path="/schedule" element={<ProviderForm />}></Route>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
