export default function Skill() {
     return (
          <section id="skill" className="text-gray-400 body-font">
               <div className="container px-5 py-10 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                         <img alt="feature" className="object-cover object-center h-full w-full" src="https://i.ibb.co/ZHGrn4B/work4.jpg" />
                    </div>
                    <div className="w-full flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                         <h1 className="text-red-800">Skills</h1>
                         <h1 className='sm:text-3xl text-2xl font-medium title-font text-white mb-10'>My Skills </h1>
                         <div className="flex flex-col mb-10 lg:items-start items-center">
                              <div className="w-full">
                                   <h2>HTML</h2>
                                   <div className="shadow w-full bg-red-300">
                                        <div className="bg-red-800 text-xs leading-none py-1 text-center text-white" style={{ width: '85%' }}>85%</div>
                                   </div>
                                   <h2 className="pt-5">CSS</h2>
                                   <div className="shadow w-full bg-red-300 mt-2">
                                        <div className="bg-red-800 text-xs leading-none py-1 text-center text-white" style={{ width: '80%' }}>80%</div>
                                   </div>
                                   <h2 className="pt-5">JS</h2>
                                   <div className="shadow w-full bg-red-300 mt-2">
                                        <div className="bg-red-800 text-xs leading-none py-1 text-center text-white" style={{ width: '65%' }}>65%</div>
                                   </div>
                                   <h2 className="pt-5">Tailwindcss</h2>
                                   <div className="shadow w-full bg-red-300 mt-2">
                                        <div className="bg-red-800 text-xs leading-none py-1 text-center text-white" style={{ width: '75%' }}>75%</div>
                                   </div>
                                   <div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
}