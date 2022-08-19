import Link from 'next/link';

export default function Portfolio() {
     return (
          <section >
               <div className="container text-gray-400 py-10 mx-auto">
                    <div className="flex flex-wrap w-full mb-7 flex-col ">
                         <h1 className="text-red-800">My portfolio</h1>
                         <p className="sm:text-3xl text-2xl font-medium title-font text-white ">Some of my distinguished works</p>
                    </div>
                    <div className="flex flex-wrap justify-between ">
                         <div className="rounded-md max-w-xs bg-gray-800 shadow-xl my-5 overflow-hidden">
                              <Link href="/detail">
                                   <a>
                                        <img className="max-w-full" src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg" alt="Deer" />
                                   </a>
                              </Link>
                              <div className="py-6 px-8">
                                   <div>
                                        <h2 className="text-lg text-white font-medium title-font mb-2">Blog Title</h2>
                                        <p />
                                        <p className="leading-relaxed text-base">Lorem ipsum dolor sit, amet consectetur adipisicing
                                             elit. Beatae distinctio tenetur eaque aspernatur aut molestias amet natus temporibus
                                             quaerat odio.</p>
                                        <a href="#" className="mt-3 text-red-800 inline-flex items-center">Learn More
                                             <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                  <path d="M5 12h14M12 5l7 7-7 7" />
                                             </svg>
                                        </a>
                                   </div>
                              </div>
                         </div>
                         <div className="rounded-md max-w-xs bg-gray-800 shadow-xl my-5 overflow-hidden">
                              <Link href="/detail">
                                   <a>
                                        <img className="max-w-full" src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg" alt="Deer" />
                                   </a>
                              </Link>
                              <div className="py-6 px-8">
                                   <div>
                                        <h2 className="text-lg text-white font-medium title-font mb-2">Blog Title</h2>
                                        <p />
                                        <p className="leading-relaxed text-base">Lorem ipsum dolor sit, amet consectetur adipisicing
                                             elit. Beatae distinctio tenetur eaque aspernatur aut molestias amet natus temporibus
                                             quaerat odio.</p>
                                        <a href="#" className="mt-3 text-red-800 inline-flex items-center">Learn More
                                             <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                  <path d="M5 12h14M12 5l7 7-7 7" />
                                             </svg>
                                        </a>
                                   </div>
                              </div>
                         </div>

                         <div className="rounded-md max-w-xs bg-gray-800 shadow-xl my-5 overflow-hidden">
                              <Link href="/detail">
                                   <a>
                                        <img className="max-w-full" src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg" alt="Deer" />
                                   </a>
                              </Link>
                              <div className="py-6 px-8">
                                   <div>
                                        <h2 className="text-lg text-white font-medium title-font mb-2">Blog Title</h2>
                                        <p />
                                        <p className="leading-relaxed text-base">Lorem ipsum dolor sit, amet consectetur adipisicing
                                             elit. Beatae distinctio tenetur eaque aspernatur aut molestias amet natus temporibus
                                             quaerat odio.</p>
                                        <a href="#" className="mt-3 text-red-800 inline-flex items-center">Learn More
                                             <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                  <path d="M5 12h14M12 5l7 7-7 7" />
                                             </svg>
                                        </a>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
}