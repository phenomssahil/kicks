import './App.css';
import Example from './nav';
import Home from './Home';
import { CartProvider } from 'react-use-cart';
import vid from './image/sneak2.gif'
import vid1 from './image/sneak.gif'
import vid2 from './image/air2.png'
import Posters from './posters';
function App() {

  return (
    <div className="App bg-gray-100 w-[1440px]">
<CartProvider>
  <Example/>
  <img src={vid1} className='cor1 relative left-10 rounded-lg top-[90px] w-1/2 '></img>
  <img src={vid} className='cor relative rounded-lg mb-10 top-[-700px]'></img>
 <img src={vid2} className='cor2 relative rounded-lg mt-32 '></img>
 <div className='home'>
 <Home/>
 <Posters/>
 <div className="bg-black w-full h-screen relative"></div>
  </div>
</CartProvider>
    </div>
  );
}

export default App;