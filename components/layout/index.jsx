import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
     return (
          <div className="content bg-gray-900">
               <Header />
               <div className=" ">
                    <div className="max-w-6xl mx-auto p-4 h-full py-10">
                         {children}
                    </div>
               </div>
               <Footer />
          </div>

     );
}