
import './App.css';
import { Home } from './components/Home';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom'
import Service from './Service';
import About  from './About';
import Tools from './Tools';
import {Container, Button} from 'react-bootstrap';


function App() {
  return (
    <div className="App">
     
<Router>  
           <div className="App">  
          

            <ul className="App-header">  
            <Container>
               <li className='logo'>
              <Link to="/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 638 155.5"><path d="M77.8 0C34.9 0 0 34.8 0 77.7c0 42.9 34.9 77.8 77.8 77.8s77.8-34.9 77.8-77.8C155.5 34.9 120.7 0 77.8 0zM39.3 50.4l11.3-19.6c.6-1 1.6-1.6 2.8-1.6h22.7c1.1 0 2.2.6 2.8 1.6l11.3 19.4c.6 1 .6 2.2 0 3.2L79 73c-.6 1-1.6 1.6-2.8 1.6H53.5c-1.1 0-2.2-.6-2.8-1.6L39.4 53.8c-.6-1.2-.6-2.4-.1-3.4zm51 54.9L79 124.7c-.6 1-1.6 1.6-2.8 1.6H53.5c-1.1 0-2.2-.6-2.8-1.6l-11.3-19.2c-.6-1-.6-2.2 0-3.2l11.2-19.7c.6-1 1.6-1.6 2.8-1.6h22.7c1.1 0 2.2.6 2.8 1.6L90.2 102c.7 1.1.7 2.3.1 3.3zm34-6.5c-.6 1-1.6 1.6-2.8 1.6H98.8c-1.1 0-2.2-.6-2.8-1.6L84.7 79.6c-.6-1-.6-2.2 0-3.2L96 56.7c.6-1 1.6-1.6 2.8-1.6h22.7c1.1 0 2.2.6 2.8 1.6l11.3 19.4c.6 1 .6 2.2 0 3.2l-11.3 19.5z" fill="#ffc600"/><path d="M269.9 36.2v80.7h-8.1V80.6h-48.4v36.3h-8.1V36.2h8.1v36.3h48.4V36.2h8.1zm72.2 80.7h-5.9l-1.5-7.4v-1.2c-4.8 6-12.2 9.9-20.5 9.9-14.4 0-26.3-11.9-26.3-26.3V59.2h7.4v32c0 10.8 8.9 19.7 19.7 19.7 10.8 0 19.7-8.9 19.7-19.7v-32h7.4v57.7zm23.2-1c-4-1.6-7.7-3.9-11.1-7l5.1-5.4c5.4 5 11.9 7.5 19.1 7.5 4.7 0 8.7-1.2 11.4-3.3 2.3-1.8 3.6-4.3 3.6-7v-.1c0-2.8-.8-4.4-2.7-5.9-2.4-1.8-6.8-3.5-13.3-4.7-7.5-1.4-12.2-3.1-15.3-5.4-3.6-2.7-5.3-6.1-5.3-10.7v-.1c0-4.3 2.1-8.3 5.8-11.3 3.6-2.8 8.5-4.4 13.8-4.4 7 0 13.7 2.2 19.8 6.6l-4.4 6c-4.7-3.5-9.9-5.2-15.5-5.2-7.7 0-12.2 4.3-12.2 8.3v.1c0 2.3.6 3.6 2.2 4.7 2.3 1.6 6.3 3 12.5 4.2 7.7 1.6 12.9 3.6 16.4 6.1 3.7 2.9 5.5 6.7 5.5 11.8v.1c0 5.1-2.3 9.6-6.5 12.9-4 3.1-9.6 4.8-15.9 4.8-4.5-.2-9-1-13-2.6zm72.9-5v6h-7.7c-8.3-3.1-14.2-11.1-14.2-20.5V66.6h-7.4v-7.4h7.4V43.7h7.4v15.6h12.9v7.4h-12.9v29.8c0 7.8 6.4 14.4 14.5 14.4zm72-22.8c0 16.6-13.3 30.2-29.4 30.2-9.7 0-18.2-4.8-23.6-12.3v3.6l-1.5 7.4h-5.9V36.2h7.4v34c5.4-7.5 14-12.3 23.6-12.3 16.1-.1 29.4 13.6 29.4 30.2zm-7.4 0c0-12.6-10.3-22.8-22.8-22.8s-22.8 10.3-22.8 22.8c0 12.6 10.3 22.8 22.8 22.8s22.8-10.3 22.8-22.8zm70.9 0v1.2h-46c.6 12.1 10.6 21.7 22.7 21.7 5.9 0 11.2-2.2 15.2-5.9l5.3 5.3c-5.7 5.1-12.8 8-20.5 8-8 0-15.6-3.1-21.3-8.9-5.7-5.8-8.9-13.3-8.9-21.3 0-16.6 12.1-30.2 26.8-30.2 14.7-.2 26.7 13.5 26.7 30.1zm-45.3-6.3h37.3c-2.3-9.6-9.8-16.6-18.7-16.6-8.8 0-16.3 7.1-18.6 16.6zm107.1 6.3v1.2h-46c.6 12.1 10.6 21.7 22.7 21.7 5.9 0 11.2-2.2 15.2-5.9l5.3 5.3c-5.7 5.1-12.8 8-20.5 8-8 0-15.6-3.1-21.3-8.9-5.7-5.8-8.9-13.3-8.9-21.3 0-16.6 12.1-30.2 26.8-30.2 14.7-.2 26.7 13.5 26.7 30.1zm-45.3-6.3h37.3c-2.3-9.6-9.8-16.6-18.7-16.6-8.8 0-16.3 7.1-18.6 16.6z" fill="#fff"/></svg>
              
              </Link> </li>
               <aside>
              <li>  
                <Link to="/">Home</Link>  
              </li>  
              <li>  
                <Link to="/Tools">Tools</Link>  
              </li>  
              <li>  
                <Link to="/About">About</Link>  
              </li>  
              <li>  
                <Link to="/Service">Service</Link>  
              </li> 
              </aside>
              </Container>  
            </ul> 
         
           <Routes>  
                 <Route exact path='/' element={< Home />}></Route> 
                 <Route exact path='/Tools' element={< Tools/>}></Route>   
                 <Route exact path='/About' element={< About />}></Route>  
                 <Route exact path='/Service' element={< Service />}></Route>  
          </Routes>  
  
          </div>  
       </Router>  
     
    </div>
  );
}

export default App;
