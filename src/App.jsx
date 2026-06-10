import './App.css';
import Landing from './pages/landing/landing';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import Profile from './pages/profile/profile';



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
