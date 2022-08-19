import { useState } from "react";

export default function ReactMore({ children }) {
     const text = children;
     const [isReactMore, setIsReactMore] = useState(true);

     function toggleReactMore() {
          setIsReactMore(!isReactMore);
     }
     return (
          <p onClick={toggleReactMore} className=" w-10/12 text-gray-400 text-base mt-3.5 cursor-pointer">
               {isReactMore ? `${text.slice(0, 50)}...` : text}
          </p>
     );
}