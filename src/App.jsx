import './App.css';
import Landing from './pages/landing/landing.jsx';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './pages/login/login.jsx';
import Signup from './pages/signup/signup.jsx';
import Profile from './pages/profile/profile.jsx';



function App() {

  return (
    <>


     <BrowserRouter>
     
        
      <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />}/>
      </Routes>
          
     
     </BrowserRouter>
 


    </>
  )
}

export default App;
