import React from 'react';
import backgroundImage from '../Images/loginbg.png';

const Login = () => {
  return (
    <div>
       <div className = "bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: `url(${backgroundImage})`, height: '100vh' }}>
        <div className='relative w-full h-full' >
          <div className='absolute w-2/5 h-4/5 left-2/4 top-2/4 transform translate-x-[10%] -translate-y-1/2 bg-transparent border border-light-gray-10 rounded-2xl pt-[150px]'>
            <div className='text-white pl-9'>
              <h3 className=' text-2xl font-medium text-start mb-[5px]'>Login</h3>
              <p className='text-xs mb-[10px]'>Glad You're back..!</p>
            </div>
            <div className='flex flex-col items-center gap-5'>
              <input type="text" className='p-2 w-4/5 border rounded-md' placeholder="Username"></input>
              <input type ="password" className=' p-2 w-4/5 border rounded-md' placeholder="Password"></input>
            </div>
          </div>
        </div>
      </div> 




      {/* // <div className="bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: `url(${backgroundImage})`, height: '100vh' }}>
      //   <div className="relative w-full h-full flex justify-end items-center right-20">
      //   <div className="w-2/5 h-4/5 bg-transparent border border-gray-200 rounded-2xl">
      //     <div className='text-white pl-9'>
      //     <h3 className=' text-2xl font-medium text-start'>Login</h3>
      //     <p>Glad You're back!</p>
      //     </div>
      //     <div className='flex flex-col items-center'>
      //     <input type="text" className="p-2 border rounded-md mb-4 w-4/5" placeholder="Username" />
      //     <input type="password" className="p-2 border rounded-md w-4/5" placeholder="Password" />
      //     </div>
      //   </div>
      // </div>
      </div>
       */}
      
        
    </div>
  )
}

export default Login

