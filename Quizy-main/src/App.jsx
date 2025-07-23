
import { BrowserRouter as Router,Routes,Route, useLocation} from "react-router-dom"
import './App.css'
import './index.css';
import Forgot from './component/fogot';
import Login from './component/Login'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import SelectTopic from './component/SelectTopic';
import Profile from './component/Profile';
import Signup from './component/Signup'
import Home from './component/Home'
import Logout from './component/Logout';
import Error from './component/err404';
import Feedback  from './component/feedback';
import About  from './component/About';
import Quizy  from './component/Quizy';




function App() {

  return (
    <>

<Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/feedback' element={<Feedback/>}/> 

{/* only login user can see */}
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/select' element={<SelectTopic/>}/>
          <Route path='/quiz/:subject' element={<Quizy/>}/>
{/* only login user can see */}
{/* login signup related pages */}
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/logout' element={<Logout/>}/>
          <Route path='/forgot' element={<Forgot/>}/>
{/* login signup related pages */}
   {/* 404 page  */}

          <Route path='*' element={<Error/>}/>
       
   {/* 404 page  */}


          
        </Routes>
        <Footer/>
      </Router>
   
    </>
  )
}

export default App
