import { React, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { mylogo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`
          ${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
              <Link to="/" className="flex items-center gap-2"
                    onClick={() => {
                      setActive("");
                      window.scrollTo(0, 0)
                    }}
              >
                <img src={mylogo} alt="logo" className="w-9 h-9 object-contain" />
                <p className="text-white text-[25px] font-blod text-lg cursor-pointer">Kalab Solomon</p>
              </Link>
              <ul className='list-non hidden sm:flex flex-row gap-10'>
                {navLinks.map((link) => (
                  <li key={link.id}
                      className={`${active === link.title ? "text-[#a93db3]" : "text-secondary"}
                      hover:text-[#a93db3] text-[18px] font-medium cursor-pointer`} 
                      onClick={() => setActive(link.title)}>
                    <a href={`#${link.id}`} className="
                                  relative rounded-full bg-primary px-3 py-2
                                  transition-all duration-500 content-['']
                                  before:absolute before:-bottom-0 before:left-0
                                  before:w-0 before:h-1.5 before:rounded-full
                                  before:opacity-0 before:transition-all
                                  before:duration-500 before:bg-gradient-to-r
                                  before:from-[#4d0154] before:via-[#daa3df]
                                  before:to-[#793d7f] hover:before:w-full 
                                  hover:before:opacity-100">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="sm:hidden flex flex-1 justify-end items-center">
                <img  src={toggle ? close : menu} alt="menu"
                      className="w-[28px] h-[28px] object-contain cursor-pointer"
                      onClick={() => setToggle(!toggle)}/>
                <div className={`${!toggle ? 'hidden' : 'flex'}
                     p-6 black-gradient absolute top-20 right-0
                     mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                  <ul className='list-non flex justify-end items-start flex-col gap-4'>
                    {navLinks.map((link) => (
                      <li key={link.id}
                          className={`${active === link.title ? "text-[#a93db3]" : "text-secondary"}
                          hover:text-[#a93db3] text-[16px] font-medium cursor-pointer`} 
                          onClick={() => {setToggle(!toggle);
                                         setActive(link.title);}}>
                        <a href={`#${link.id}`} className="
                                      relative px-3 py-2 
                                      transition-all duration-500 content-['']
                                      before:absolute before:-bottom-0 before:left-0
                                      before:w-0 before:h-1.5 before:rounded-full
                                      before:opacity-0 before:transition-all
                                      before:duration-500 before:bg-gradient-to-r
                                      before:from-[#4d0154] before:via-[#daa3df]
                                      before:to-[#793d7f] hover:before:w-full 
                                      hover:before:opacity-100">
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            </div>
    </nav>
  ) 
}

export default Navbar