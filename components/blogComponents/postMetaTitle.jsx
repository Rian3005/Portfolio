import Link from 'next/link';

export default function PostMetaTitle({ category, title, date, center }) {
     return (
          <>
               <div className="flex items-center space-x-4 text-gray-400 ">
                    <div className="">
                         {category}
                    </div>
                    <span>&bull;</span>
                    <div>
                         {date}
                    </div>
               </div>
               <h2 className={`text-2xl mt-4 text-white ${center ? 'text-center' : ''}`}>
                    <Link href="/detail"><a>{title}</a></Link>
               </h2>
          </>
     );
}