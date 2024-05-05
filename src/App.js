import './App.css';
import Example from './nav';
import Card from './cards';
import Products from './data';

import { CartProvider } from 'react-use-cart';

function App() {

  return (
    <div className="App">
<CartProvider>
   <Example/>
   <div className='container'>
{
  Products.map((item,index)=>{
    return(
    <Card imageSrc={item.imageSrc} name={item.name} href={item.href} price={item.price} id={item.id} key={index} item={item} />
    )
})
}
</div>
</CartProvider>
    </div>
  );
}

export default App;