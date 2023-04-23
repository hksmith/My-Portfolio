import { BrowserRouter } from "react-router-dom";

import {About, Contact, Experience, Footer, Hero, Navbar, Tech, Works } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero bg-gradient-to-r from-[#29002d] to-[#3d0046] via-[#0b020c] via-[#09000a]
                        bg-cover bg-no-repeat bg-center ">
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Tech />
          <Works />
          <Contact />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App