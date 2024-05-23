
const products = [
    {
      id: 1,
      imageSrc: 'https://i.pinimg.com/564x/24/ad/77/24ad7757308be4bb2862ad8e654b8c38.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
    },
    {
        id: 2,
        imageSrc: 'https://i.pinimg.com/564x/7c/f2/17/7cf2178d869653709496d3c1e61a1f32.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
       
      },
      {
        id: 3,
        imageSrc: 'https://i.pinimg.com/474x/15/3e/02/153e02a8971f5a9277764df843e585b8.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
       
      },
      {
        id: 4,
        imageSrc: 'https://i.pinimg.com/564x/3c/d8/fc/3cd8fce336bfbe4cc2652955f2683b49.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
       
      },
      {
        id: 5,
        imageSrc: 'https://i.pinimg.com/564x/93/12/b6/9312b69f820233e9122e516ed16a19e2.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
       
      },
      {
        id: 6,
        imageSrc: 'https://i.pinimg.com/474x/e7/d0/b7/e7d0b7927fe6ad4580ae22d688235af0.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
       
      },
      {
        id: 7,
        imageSrc: 'https://i.pinimg.com/474x/5c/81/4d/5c814dc4dfc302d02d1ea4fb6e639bfd.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
       
      },
  ]
  
  export default function Posters() {
    return (
      <div className="bg-gray-100">
        <div className="post relative top-[-60px] mx-auto max-w-2xl px-4 py-16 lg:max-w-7xl lg:px-8 ">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Posters</h2>
          <div className="mt-6 flex gap-x-6 gap-y-10 lg:flex-cols-4 xl:gap-x-8 overflow-x-auto">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-[300px] overflow-hidden  rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full  object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  