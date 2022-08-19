import Link from "next/link";
import InfoPost from './InfoPost';

export default function CardPost() {
     return (<div className="flex flex-wrap justify-between">
          <article >
               <div className="rounded-md max-w-xs bg-gray-800 shadow-xl my-10 overflow-hidden">
                    <Link href="/detail">
                         <a>
                              <img className="max-w-full" src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg" alt="Deer" />
                         </a>
                    </Link>
                    <div className="py-6 px-8">
                         <InfoPost
                              category="UI DESIGN"
                              date="July 2, 2021"
                              title="Agriculture is good"
                              shortDescription="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In enim a arcu imperdiet malesuada. In rutrum. Curabitur sagittis hendrerit ante. lagi apanubvrj ubvjrnfjq bvkakj khbc khbcqv c"
                              authorAvatar="/author-1.png"
                              authorName="Leslie Alexander"
                              authorJob="UI Designer"
                         />
                    </div>
               </div>
          </article>

          <article >
               <div className="rounded-md max-w-xs  bg-gray-800 shadow-xl my-10 overflow-hidden">
                    <Link href="/detail">
                         <a>
                              <img className="max-w-full" src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg" alt="Deer" />
                         </a>
                    </Link>
                    <div className="py-6 px-8 max-h-96">
                         <InfoPost
                              category="UI DESIGN"
                              date="July 2, 2021"
                              title="Agriculture is good"
                              shortDescription="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
                              authorAvatar="/author-1.png"
                              authorName="Leslie Alexander"
                              authorJob="UI Designer"
                         />
                    </div>
               </div>
          </article>
          <article >
               <div className="rounded-md max-w-xs bg-gray-800 shadow-xl my-10 overflow-hidden">
                    <Link href="/detail">
                         <a>
                              <img className="max-w-full" src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg" alt="Deer" />
                         </a>
                    </Link>
                    <div className="py-6 px-8">
                         <InfoPost
                              category="UI DESIGN"
                              date="July 2, 2021"
                              title="Agriculture is good"
                              shortDescription="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In enim a arcu imperdiet malesuada. In rutrum. Curabitur sagittis hendrerit ante. "
                              authorAvatar="/author-1.png"
                              authorName="Leslie Alexander"
                              authorJob="UI Designer"
                         />
                    </div>
               </div>
          </article>

          <article >
               <div className="rounded-md max-w-xs bg-gray-800 shadow-xl my-10 overflow-hidden z-50">
                    <Link href="/detail">
                         <a>
                              <img className="max-w-full" src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg" alt="Deer" />
                         </a>
                    </Link>
                    <div className="py-6 px-8">
                         <InfoPost
                              category="UI DESIGN"
                              date="July 2, 2021"
                              title="Agriculture is good"
                              shortDescription="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In enim a arcu imperdiet malesuada. In rutrum. Curabitur sagittis hendrerit ante. "
                              authorAvatar="/author-1.png"
                              authorName="Leslie Alexander"
                              authorJob="UI Designer"
                         />
                    </div>
               </div>
          </article>
     </div>
     );
}