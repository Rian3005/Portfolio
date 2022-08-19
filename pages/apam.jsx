export default function Apam() {
     return (
          <div>
               <div>
                    <div className="py-6 flex flex-col justify-center sm:py-12 px-8">
                         <div className="relative py-3 max-w-xl mx-auto">
                              <div className="absolute inset-0 bg-gradient-to-r from-lime-400 to-green-500 shadow-lg transform skew-y-0 -rotate-6 rounded-3xl" />
                              <div className="relative px-4 py-10 bg-white shadow-lg rounded-3xl sm:px-20 sm:py-12">
                                   <div className="max-w-md mx-auto">
                                        <img src="/images/picture.jpg" className="h-20 sm:h-32 rounded-md mx-auto animate-bounce mt-5 sm:mt-8" />
                                        <div className="text-center pt-6">
                                             <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                                                  MY NAME
                                             </h1>
                                             <button onclick="document.getElementById('pronunciation').play()">🔊</button>
                                             <audio src="/pronunciation.mp3" id="pronunciation" preload="none" />
                                        </div>
                                        <div className="pt-6 leading-8 text-gray-700 text-center">
                                             I am a web/app software programmer living in <a href="https://goo.gl/maps/7fF4dNdcVwPohaJeA" target="_blank">Paris</a>, France. You can find me on <a href="https://twitter.com/nicolasMLV" target="_blank">Twitter</a>, <a href="https://www.linkedin.com/in/nicolasmlv/" target="_blank">Linkedin</a> or send me an email <a href="mailto:contact@example.com" target="_blank">contact@example.com</a>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="max-w-4xl mx-auto py-6 sm:py-12">
                         <div className="mx-4 bg-white shadow-lg rounded-3xl py-6 px-4 sm:px-20 text-gray-700 leading-6 sm:py-12 space-y-5">
                              <h2 className="text-3xl inline font-bold mr-5">
                                   <a href="/blog">Blog</a>
                              </h2>
                              <span className="text-xs text-gray-500 space-x-4">
                                   <a href="/blog.rss">RSS</a>
                                   <a href="/blog.json">JSON Feed</a>
                                   <a href="/blog.atom">Atom</a>
                              </span>
                              <div>
                                   <span className="mr-2 sm:mr-5 text-green-500 font-semibold">2021-01-03</span>
                                   <a href="/blog/tutorial-simple-html-tailwind-setup">A second blog entry : Tailwind CSS setup Tutorial</a>
                              </div>
                              <div>
                                   <span className="mr-2 sm:mr-5 text-green-500 font-semibold">2021-01-02</span>
                                   <a href="/blog/welcome-to-my-blog">Welcome to my blog</a> <a href="https://www.nicomlv.com/template-blog-portfolio-tailwind-css" className="text-gray-400">(thanks)</a>
                              </div>
                              <div>
                                   <a href="/blog">Older entries →</a>
                              </div>
                         </div>
                    </div>
                    <div className="max-w-4xl mx-auto py-6 sm:py-12">
                         <div className="mx-4 bg-white shadow-lg rounded-3xl py-6 px-4 sm:px-20 text-gray-700 leading-6 sm:py-12 space-y-5">
                              <h2 className="text-3xl inline font-bold mr-5">
                                   Portfolio
                              </h2>
                              <div>
                                   <h3 className="text-xl text-green-500">Tinder for cats</h3>
                                   <p>
                                        A social network for cats, there were more than 100,000 cats
                                   </p>
                              </div>
                              <div>
                                   <h3 className="text-xl text-green-500">Tinder for cars</h3>
                                   <p>
                                        A social network for cars, there were more than 100,000 cars
                                   </p>
                              </div>
                              <div>
                                   <h3 className="text-xl text-green-500">Airbnb but for Tinders</h3>
                                   <p>
                                        A social network for Tinders, there were more than 100,000 tinders
                                   </p>
                              </div>
                         </div>
                    </div>
                    <div className="text-center py-6 sm:py-12">
                         <a href="/bio" className="text-xl font-bold">Biography →</a>
                    </div>
                    <div className="py-6 sm:py-12 max-w-4xl mx-auto text-gray-700">
                         © All rights reserved, find me on <a href="https://twitter.com/nicolasMLV">Twitter</a>
                    </div>
               </div>

          </div>
     );
}