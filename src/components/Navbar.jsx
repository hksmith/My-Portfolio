import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { mylogo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(
        prevScrollPos > currentScrollPos ||
        currentScrollPos < 100
      );
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <nav
      className={`
          ${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-gradient-to-r from-[#2d0131] to-[#27002b] via-[#0b020c] via-[#09000a] transition-all duration-300}
          ${visible ? '' : 'hidden'}
        `}
    >
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto"> 
              <Link to="/" className="flex items-center gap-2"
                    onClick={() => {
                      setActive("");
                      window.scrollTo(0, 0)
                    }}
              >
                <img src={mylogo} alt="logo" className="w-9 h-9 object-contain" />
            
              </Link>
              <ul className='list-non hidden sm:flex flex-row gap-10'>
                {navLinks.map((link) => (
                  <li key={link.id}
                      className={`${active === link.title ? "text-[#a93db3]" : "text-secondary"}
                      hover:text-[#a93db3] text-[18px] font-medium cursor-pointer`} 
                      onClick={() => setActive(link.title)}>
                    <a href={`#${link.id}`} className={`${styles.hoveronNavbar}`}>
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
                     p-3 black-gradient absolute top-20 right-0
                     mx-4 my-2 min-w-[14px] z-10 rounded-xl`}>
                  <ul className='list-non flex justify-end items-start flex-col gap-4'>
                    {navLinks.map((link) => (
                      <li key={link.id}
                          className={`${active === link.title ? "text-[#a93db3]" : "text-secondary"}
                          hover:text-[#a93db3] text-[16px] font-medium cursor-pointer`} 
                          onClick={() => {setToggle(!toggle);
                                         setActive(link.title);}}>
                        <a href={`#${link.id}`} className={`${styles.hoveronNavbar}`}>
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