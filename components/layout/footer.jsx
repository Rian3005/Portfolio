import { BsLightningChargeFill } from 'react-icons/bs';

export default function Footer() {
     return (
          <footer className=" text-white">
               <div className="max-w-6xl py-8 mx-auto border-t border-gray-500">
                    <div className="sm:flex sm:items-center sm:justify-between">
                         <div className="flex justify-center sm:justify-start">
                              <h1 className="font-medium text-3xl font-o flex items-center"><BsLightningChargeFill className='text-red-800' /><span className='text-red-800 '>R</span>IAN</h1>

                         </div>
                         <p className="mt-4 text-sm text-center lg:text-right lg:mt-0">
                              Copyright © 2022. All rights reserved.
                         </p>
                    </div>
               </div>
          </footer>

     );
}