export default function About() {
     return (
          <section>
               <h1 className=" text-red-800">About Me</h1>
               <p className="sm:text-3xl text-2xl font-medium mb-2 pb-5 text-white">I'm here to help your next project</p>
               <div className="container  py-3 mx-auto text-gray-400 flex">
                    <div className="flex flex-col text-justify w-full mb-10">
                         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit ab ipsam, ex reprehenderit tenetur
                              facere at tempore quis ratione, beatae ipsa voluptas aliquid dolores in assumenda quae inventore
                              pariatur! Expedita, magni officiis repudiandae dicta corrupti culpa dolorum accusamus omnis minus
                              dolore possimus laudantium exercitationem mollitia debitis doloribus quos dignissimos eius
                              explicabo, soluta ad. Vero ad reiciendis enim, fugit iure aliquam nobis officiis corporis dolore
                              voluptate expedita pariatur repellat eos rerum porro quod officia laborum tempora, voluptas aperiam
                              voluptatum quisquam? Tempora, voluptas. Qui quisquam consequuntur neque nihil eveniet, provident rem
                              magnam, dolorum quam tempora iusto dolorem quae? Explicabo illo sit quasi.</p>
                    </div>
                    <div className="ml-10 flex  items-center">
                         <div className="p-4 md:w-full">
                              <div className="flex rounded-lg h-full bg-gray-800 p-8 flex-col">
                                   <div className="flex items-center mb-3">
                                        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-800 text-white flex-shrink-0">
                                             <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                                                  <circle cx={12} cy={7} r={4} />
                                             </svg>
                                        </div>
                                        <h2 className="text-white text-lg title-font font-medium">Web Development</h2>
                                   </div>
                                   <div className="flex-grow">
                                        <p className="leading-relaxed text-base">Lorem ipsum dolor sit, amet consectetur adipisicing
                                             elit. Officiis, veniam.</p>
                                        <a className="mt-3 text-red-800 inline-flex items-center">Learn More
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