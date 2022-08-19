import PostMetaTitle from './PostMetaTitle';
import PostAuthor from './PostAuthor';
import ReactMore from '../ReactMore';
export default function InfoPost({
     category,
     date,
     title,
     shortDescription,
     authorAvatar,
     authorName,
     authorJob
}) {
     return (
          <>
               <PostMetaTitle
                    category={category}
                    date={date}
                    title={title}
               />
               <ReactMore>
                    {shortDescription}
               </ReactMore>

               <PostAuthor
                    authorName={authorName}
                    authorJob={authorJob}
                    authorAvatar={authorAvatar}
               />
          </>
     );
}