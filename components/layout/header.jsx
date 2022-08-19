import { BsFacebook, BsLinkedin, BsInstagram, BsGithub, BsLightningChargeFill } from 'react-icons/bs';
import { FaBars, FaTimes, FaCampground, FaUnsplash } from 'react-icons/fa'
// import Dark from '../dark';
import Link from "next/link"
import { withRouter } from "next/router"
import { useState, useEffect } from 'react';

const navs = [
      { text: 'Home', href: '/' },
      { text: 'Portfolio', href: '/portfolio' },
      { text: 'Blog', href: '/blog' },
      { text: 'Contact', href: '/contact' }
]
function Header({ router }) {
      const [shadow, setShadow] = useState('')
      const [open, setOpen] = useState(false)


      function headerFunc() {
            window.scrollY > 80 ? setShadow('shadow-3xl z-50 sticky transition-transform duration-700 delay-300 ease-in-out  ') : setShadow('')
      }

      const css = ` top-0 left-0 right-0 py-4 bg-gray-900 text-white ${shadow}`;
      useEffect(() => {
            window.addEventListener("scroll", headerFunc);
            // console.log(apam)
            return () => window.removeEventListener("scroll", headerFunc);
      }, []);

      return (
            <>
                  <header className={css}>
                        <div className="flex justify-between items-center max-w-6xl mx-auto ">
                              <h1 className="font-medium text-3xl font-o flex items-center"><BsLightningChargeFill className='text-red-800' /><span className='text-red-800 '>R</span>IAN</h1>
                              {/* MOBILE NAV ICON */}
                              <div className="md:hidden block  top-4 right-8 fixed">
                                    <button onClick={() => setOpen(!open)} aria-label="navigation" type="button" className="md:hidden text-gray-200 transition duration-300 focus:outline-none focus:text-white hover:text-white">
                                          {!open ?
                                                <FaBars className="text-3xl" id="bars" />
                                                :
                                                <FaTimes className="text-3xl" id="bars" />
                                          }
                                    </button>
                              </div>
                              {/* NAVIGATION - LARGE SCREENS */}
                              <div className="hidden md:flex">
                                    <ul className="hidden md:flex">
                                          {navs.map(nav => (
                                                <li key={nav.href} className="text-lg font-medium pr-8 ">
                                                      <Link href={nav.href} >
                                                            <a className={`nav.item ${router.pathname == nav.href ? 'transition duration-300 underline focus:underline text-red-800' : ' focus:outline-none focus:text-red-800 focus:underline hover:underline hover:text-red-800'}`} style={{ textUnderlineOffset: '8px' }}>{nav.text}</a>
                                                      </Link>
                                                </li>
                                          ))}
                                    </ul>
                              </div>
                              <div className="hidden md:flex items-center w-2/12 justify-between ">

                                    <Link href={'https://www.facebook.com/rian.nazar.52'} passHref ><a target='_blank' ><BsFacebook className='hover:text-red-800' size={20} /></a></Link>
                                    <Link href={'https://www.instagram.com/rian.nazar'} passHref ><a target='_blank' ><BsInstagram className='hover:text-red-800' size={20} /></a></Link>
                                    <Link href={'https://www.linkedin.com/in/rian-nazar-04322523b'} passHref ><a target='_blank' ><BsLinkedin className='hover:text-red-800' size={20} /></a></Link>
                                    <Link href={'https://github.com/Rian3005'} passHref ><a target='_blank' ><BsGithub className='hover:text-red-800' size={20} /></a></Link>

                                    {/* <Dark /> */}
                              </div>


                        </div>
                        {/* MOBILE MENU */}
                        {open == true ?
                              <div id="mobileMenu" className=" w-full mx-auto py-8 text-center">
                                    <div className="flex flex-col justify-center items-center w-full">
                                          {navs.map(nav => (
                                                <Link key={nav.href} href={nav.href} >
                                                      <a className="block text-gray-200 cursor-pointer py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500" style={{ textUnderlineOffset: '8px' }}>{nav.text}</a>
                                                </Link>
                                          ))}
                                    </div>
                                    <div className='flex items-end'>
                                          {/* <Dark /> */}
                                    </div>
                              </div>
                              : ''}
                  </header>

            </>
      )
}
export default withRouter(Header);