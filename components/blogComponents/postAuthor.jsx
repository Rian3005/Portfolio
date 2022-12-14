export default function PostAuthor({ authorAvatar, authorName, authorJob }) {
     return (
          <div className="flex items-center  mt-5  w-full  py-3 text-gray-400  border-t border-gray-500">
               <img src={authorAvatar} className="w-14 h-14 rounded-full object-cover" />
               <div className="ml-4">
                    <h3 className="text-white">{authorName}</h3>
                    <div className="text-sm mt-1">
                         {authorJob}
                    </div>
               </div>
          </div>
     );
}