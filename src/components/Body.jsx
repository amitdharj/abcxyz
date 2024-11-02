import React from 'react'

const Body = () => {
  return (
    <div className='bg-gray-200  min-h-screen  flex flex-col gap-5 pl-8  pr-12 pb-5  '>


      <div className='pt-5  '>
        <div className=' bg-zinc-50 items-center flex  pl-3 pr-3 pt-6 pb-6 gap-8 shadow-md shadow-gray-300'>

          <div className=''>
            <img src="src/assets/air-series.png" alt="" className=' bg-blue-200 rounded-full' />
            <p className='text-center pt-2 text-sm'>DJI Air series</p>
          </div>

          <div className=''>
            <img src="src/assets/avata-series.png" alt="" className='bg-blue-200 rounded-full' />
            <p className='text-center pt-2 text-sm'>DJI Avata</p>
          </div>

          <div className=''>
            <img src="src/assets/mini-series (1).png" alt="" className='bg-blue-200 rounded-full ' />
            <p className='text-center pt-2 text-sm'>DJI Mini Series</p>
          </div>

          <div className=''>
            <img src="src/assets/mavic-series.png" alt="" className='bg-blue-200 rounded-full' />
            <p className='text-center pt-2 text-sm'>DJI Mavic Series</p>
          </div>

          <div>
            <img src="src/assets/drone-accessories.png" alt="" className='bg-blue-200 rounded-full' />
            <p className='text-center pt-2 text-sm'>DJI Accessories</p>
          </div>

          <div>
            <img src="src/assets/enterprise-drone.png" alt="" className=' bg-blue-200 rounded-full' />
            <p className='text-center pt-2 text-sm'>Enterprise Drones</p>
          </div>

          <div>
            <img src="src/assets/evo-ii-series.png" alt="" className='bg-blue-200 rounded-full' />
            <p className='text-center pt-2 text-sm'>EVO II Series</p>
          </div>

          <div>
            <img src="src/assets/evo-nano-series.png" alt="" className='bg-blue-200 rounded-full' />
            <p className='text-center pt-2 text-sm'>EVO Nano Series</p>
          </div>

        </div>
      </div>



      <div className='bg-zinc-50 pl-5 pr-5  pb-5 shadow-md shadow-gray-300'>
        <h3 className='pt-3 pb-3 font-medium text-xl'> Best Sellers</h3>

        <div className='  flex gap-6  font-medium '>
          <div className=' bg-white border border-gray-400 rounded-lg'>
            <img src="src/assets/drone4.jpg" alt="drone" className=' rounded-xl h-72 w-72' />
            <p className='text-center pb-5'> DJI Mini Series <br />Price : 89,999 Rs</p>
            <button className=''>Add to cart</button>
          </div>

          <div className=' bg-white  border border-gray-400 rounded-lg'>
            <img src="src/assets/drone3.jpg " alt=" drone2" className='rounded-xl h-72 w-72' />
            <p className='text-center pb-5'> DJI Mini Series <br />Price : 74,999 Rs</p>
          </div>

          <div className=' bg-white  border border-gray-400 rounded-lg'>
            <img src="src/assets/air-series.png" alt=" drone3" className='rounded-xl h-72 w-72' />
            <p className='text-center pb-5'> DJI Mini Series <br />Price : 68,999 Rs</p>
          </div>

          <div className=' bg-white border border-gray-400 rounded-lg'>
            <img src="src/assets/drone4.png" alt="" className='rounded-xl h-72 w-72 ' />
            <p className='text-center pb-5'> DJI Mini Series <br />Price : 70,000 Rs</p>
          </div>

        </div>

        <div className='  flex gap-6  pt-8 font-medium '>
          <div className=' bg-white border border-gray-400 rounded-lg'>
            <img src="src/assets/air-series.png" alt="drone" className=' rounded-xl h-72 w-72' />
            <p className='text-center pb-5'> DJI Mini Series <br />Price : 68,999 Rs</p>
          </div>

          <div className=' bg-white  border border-gray-400 rounded-lg'>
            <img src="src/assets/enterprise-drone.png" alt=" drone2" className='rounded-xl h-72 w-72' />
            <p className='text-center pb-5'> DJI Mini Series <br /> Price : 87,999 Rs</p>
          </div>

          <div className=' bg-white  border border-gray-400 rounded-lg'>
            <img src="src/assets/evo-nano-series.png" alt=" drone3" className='rounded-xl h-72 w-72' />
            <p className='text-center pb-5'> DJI Mini Series <br />Price : 78,999 Rs</p>
          </div>

          <div className=' bg-white border border-gray-400 rounded-lg'>
            <img src="src/assets/evo-ii-series.png" alt="" className='rounded-xl h-72 w-72 ' />
            <p className='text-center pb-5'> DJI Mini Series <br />Price :70,000</p>
          </div>
        </div>




      </div>

      <div className='bg-zinc-50 pl-5 pr-5 shadow-md shadow-gray-300'>
        <h3 className='pt-3 pb-3 font-medium text-xl'>Drone Accessories</h3>
        <div className='flex gap-6'>
          <div className=' bg-white border border-gray-400 rounded-lg' >
            <img src="src/assets/rc controller.webp" alt="drone-accessories" className='h-80 w-80  pt-8 pb-8' />
            <p className='font-medium text-center'>RC controller</p>
          </div>

          <div className=' bg-white border border-gray-400 rounded-lg'>
            <img src="src/assets/joystick.jpg" alt="drone-accessories" className='h-80 w-80 pt-12 pb-10' />
            <p className='font-medium text-center'>DJI Motion controller</p>
            <button className=''>Add To Cart</button>
          </div>

          <div className=' bg-white border border-gray-400 rounded-lg'>
            <img src="src/assets/battery.webp" alt="drone-accessories" className='h-80 w-80 pt-8 pb-8' />
            <p className='font-medium text-center'>Battery</p>
          </div>

          <div className=' bg-white border border-gray-400 rounded-lg'>
            <img src="src/assets/propellar.jpg" alt="drone-accessories" className='h-80 w-80 pt-8 pb-8' />
            <p className='font-medium text-center'>Propeller</p>
          </div>
        </div>

        <div className='flex gap-6 pt-5 pb-5'>
          <div className=' bg-white border border-gray-400 rounded-lg' >
            <img src="src/assets/rc controller.webp" alt="drone-accessories" className='h-80 w-80  pt-8 pb-8' />
            <p className='font-medium text-center'>RC controller</p>
          </div>

          <div className=' bg-white border border-gray-400 rounded-lg'>
            <img src="src/assets/joystick.jpg" alt="drone-accessories" className='h-80 w-80 pt-12 pb-10' />
            <p className='font-medium text-center'>DJI Motion controller</p>
          </div>

          <div className=' bg-white border border-gray-400 rounded-lg'>
            <img src="src/assets/battery.webp" alt="drone-accessories" className='h-80 w-80 pt-8 pb-8' />
            <p className='font-medium text-center'>Battery</p>
          </div>

          <div className=' bg-white border border-gray-400 rounded-lg'>
            <img src="src/assets/propellar.jpg" alt="drone-accessories" className='h-80 w-80 pt-8 pb-8' />
            <p className='font-medium text-center'>Propeller</p>
          </div>



        </div>

      </div>


      <div className='bg-neutral-100'>

        <div className=' pt-28 pb-28'>

          <p className=' flex justify-center align font-normal text-base   '>WE OFFER </p>
          <p className='flex justify-center text-3xl font-medium pt-2'>Drones at the Lowest Price </p>
          <p className='flex justify-center text-3xl pt-2  '>in India</p>
        </div>


        <div className='bg-gray-900 rounded-md flex justify-evenly shadow-md shadow-gray-400 '>
          <img src="src/assets/images.png" alt="" className='size-28 pl-2 pt-2 pb-2 rounded-3xl ' />
          <img src="src/assets/service.png" alt="" className='size-28 pl-2 pt-2 pb-2 rounded-3xl' />
          <img src="src/assets/SUPPORT.jpg" alt="" className='size-28 pl-2 pt-2 pb-2 rounded-3xl' />
          <img src="src/assets/grant.png" alt="" className='size-28 pl-2 pt-2 pb-2 rounded-3xl' />
        </div>

      </div>
      



    </div>
  )
}

export default Body