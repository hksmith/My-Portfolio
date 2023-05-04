import { useState } from "react"
import { socialMedia } from "../constants"
import { FaFilePdf } from 'react-icons/fa'
import CVp from "./CVp"

const Footer = () => {

  const [cv, setCv] = useState(false);
  return (
    <div className="relative p-0 m-0 gap-0">
      <div className="flex flex-row flex-wrap justify-center gap-0 bg-black opacity-30 w-full h-full absolute top-0 left-0 bottom-0 z-10">
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-1 w-full relative z-20">

        {socialMedia.map((socialMediaa) => (
          <div className="w-28 h-28 py-5 z-50" key={socialMediaa.name}>
            <a href={socialMediaa.link} target="blank">
              <img className="h-8 w-8 hover:opacity-50 transition-all duration-300 cursor-pointer" src={socialMediaa.icon} alt={socialMediaa.name} />
            </a>
          </div>
        ))}
        <a href="https://drive.google.com/file/d/1leLxVSISbNlDGv5UozGJKBFtIyjQqOW4/view?usp=share_link">
        <button className="bottom-0 left-0 flex items-center bg-[#a93db3] hover:opacity-50 hover:scale-95 text-white rounded-md h-10 shadow-md m-4 z-30">
          <FaFilePdf className="mr-2" /> CV
        </button>
        </a>
        
 
      </div>
      <div className="flex justify-center items-center align-middle pb-5 pt-0 mt-0 ">
        <p className="text-bold text-white">Copyright © 2023 Kalab Solomon</p>
      </div>
      <CVp open={cv} onClose={() => setCv(false)} />
    </div>
  )
}

export default Footer
