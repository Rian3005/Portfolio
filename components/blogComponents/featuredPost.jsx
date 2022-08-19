import Link from 'next/link';
import InfoPost from './InfoPost';

export default function FeaturedPost() {
     return (
          <article>
               <div className="flex lg:items-center  items-start flex-wrap rounded-md bg-gray-800 shadow-2xl overflow-hidden ">
                    <div className=" lg:w-8/12 md:w-7/12 w-full">
                         <Link href="/detail">
                              <a>
                                   <img src="/featured-thumbnail.png" className="w-full mb-4 md:mb-0" />
                              </a>
                         </Link>
                    </div>
                    <div className="lg:w-4/12 md:w-5/12 w-full px-4">
                         <InfoPost
                              category="UI DESIGN"
                              date="July 2, 2021"
                              title="Understanding color theory: the color wheel and finding complementary colors"
                              shortDescription="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. "
                              authorAvatar="/author-1.png"
                              authorName="Leslie Alexander"
                              authorJob="UI Designer"
                         />
                    </div>
               </div>
               <hr className="border-white/10 mt-10 md:hidden" />
          </article>
     );
}