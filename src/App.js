import './App.css'
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import { motion } from 'framer-motion'
import Home  from './pages/Home'
import Projects  from './pages/Projects'
import Contact  from './pages/Contact'
const App = () => {

  
    return (
      <>
        <BrowserRouter>

<nav className="flex">
  <div id="nav-brand">
     <h3>Who Am I ?</h3>
  </div>
<div id="nav-options">
   <span>
    <Link to={'/'}>Home</Link>
   </span>
   <span>
    <Link to={'/projects'}>Project</Link>
   </span>
   <span>
    <Link to={'/contact'}>Contact Me</Link>
   </span>
</div>
</nav>

<div className='flex header'>
   <div className="user-info">
    <h1>Nguyen Khang Hoang</h1>
    <p>Hi Visitor ! I am the guy who passionate about coding. My main major is FullStack Developer. Hope to join in the project with you</p>
   </div>

   <div className="user-pic">
    <motion.img 
    transition={{duration: 1.5}}
    whileHover={{scale: 1.2}}
    src="https://media-cdn-v2.laodong.vn/storage/newsportal/2024/6/15/1353393/Toni-Kroos-Germany.jpg?w=660" 
    alt='' 
    className="img-responsive img-circle"/>
   </div>
</div>
        
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="*" element={<h1>404 - Page not found !</h1>}></Route>
        </Routes>
        </BrowserRouter>
        
        
      </>
    );
}
export default App;
