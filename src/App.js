import React , {useEffect} from 'react';
import './App.css';
import Main from './Components/Main';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Aos from 'aos';
import "aos/dist/aos.css"


function App() {
 useEffect(() => {
  Aos.init({duration:2000}); 
  
 }, []);
 
  return (
    <>
    <div >
    <Main />
    </div>
    </>
  );
}

export default App;
