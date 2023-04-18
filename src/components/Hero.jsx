import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import Typed from 'typed.js';


const Hero = () => {
  
  const textRef = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: ["Software Engineer", "Full Stack Web Developer", "Phothograhper"],
      typeSpeed: 60,
      backSpeed: 50,
      loop: true,
      smartBackspace: true
    });
    return () => {
      typed.destroy();
    };
  }, []);
  
  return (
    <section className="relative w-full h-[675px] mx-auto">
      <div className={`${styles.paddingX} absolute inset-0
           top-[120px] max-w-7xl mx-auto flex flex-row
           items-start gap-5`}>
          <div className='flex flex-col justify-center
               items-center mt-5'>
                <span className="relative flex h-5 w-5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#915eff] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-5 w-5 bg-[#915eff]"></span>
                </span>
                <div className='w-1 sm:h-80 h-40 violet-gradient' />
               </div>
          <div>
            <h1 className={`${styles.heroHeadText} mt-2 text-white-100`}>Hey, I'm</h1>
            <h1 className={`${styles.heroHeadText} mt-2 text-white-100`}><span className="text-[#a93db3]">Kalab Solomon</span></h1>
            <p className={`${styles.heroSubText}`}>
              I'm a <span className='bg-gradient-to-r from-[#70007a] to-[#81008f] via-[#140216] via-[#09000a] rounded-full px-2' ref={textRef}></span>
            </p>
          </div>
      </div>
      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[30px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.dev animate={{ y: [0, 24, 0] }} transition={{duration:1.5, repeat: Infinity, repeatType: 'loop'}}
                        className="w-3 h-3 rounded-full bg-secondary mb-1" />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero;