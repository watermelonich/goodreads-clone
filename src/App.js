import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateAccount from './components/CreateAccount/CreateAccount';
import SignIn from './components/SignIn/SignIn';

function App() {
  return (
    <div className="App">

      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/MyBooks' element={<CreateAccount />} />
        <Route path='/CreateAccount' element={<CreateAccount />} />
        <Route path='/SignIn' element={<SignIn />} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
