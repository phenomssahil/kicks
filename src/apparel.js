import { useCart } from 'react-use-cart';
  export default function Apparel(props) {
    const {addItem}=useCart();
    return (
      <div className="card ml-20">
        <div className="prod max-w-2xl lg:max-w-7xl lg:px-8 relative top-20 mb-20">
          <h2 className="sr-only">Products</h2>
          <div>
           
              <a key={props.id} className="group z-0">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img 
                    src={props.imageSrc}
                    alt={props.imageAlt}
                    className="h-full w-full object-cover object-center z-0"/>
                </div>
                <h3 className="mt-4 text-sm text-gray-700 text-nowrap overflow-hidden">{props.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">$ {props.price}</p>  
                <button className='relative left-20' onClick={()=>addItem(props.item)}>
                <div class="new relative left-0">
  <label className="checkbox-label">
    <input type="radio" className="checkbox" name='radio' />
    <span className="container"></span>
    <h5 className='ml-4'>{props.size1}</h5></label>

  <label className="checkbox-label">
    <input type="radio" className="checkbox" name='radio' />
    <span className="container"></span>
    <h5 className='ml-4'>{props.size2}</h5></label>

  <label className="checkbox-label">
    <input type="radio" className="checkbox" name='radio' />
    <span className="container"></span>
    <h5 className='ml-4'>{props.size3}</h5></label>

  <label className="checkbox-label">
    <input type="radio" className="checkbox" name='radio' />
    <span className="container"></span>
    <h5 className='ml-4'>{props.size4}</h5></label>
    </div>
                <a className="fancy">
  <span className="top-key"></span>
  <span className="text">Add to Cart</span>
  <span className="bottom-key-1"></span>
  <span className="bottom-key-2"></span>
</a>
 </button>
              </a>
          </div>
        </div>
      </div>
    )
  }
  