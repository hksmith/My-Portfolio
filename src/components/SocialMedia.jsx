import { useState } from "react"
import { socialMedia } from "../constants"
import { SectionWrapper } from "../hoc"
import CVp from "./CVp"

const SocialMedia = () => {

  const [cv, setCv] = useState(false);
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {socialMedia.map((socialMediaa) => (
        <div className="w-28 h-28" key={socialMediaa.name}>
          <a href={socialMediaa.link} target="blank">
          <img className="h-12 w-12 filter grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer" src={socialMediaa.icon}/>
          <h1>{socialMediaa.name}</h1>
          </a>
        </div>
      ))}
      <button className="bg-[#530b5a] rounded-md hover:rounded-full transition-all duration-300 h-10 w-20"
              onClick={() => {
                setCv(true)
              }}>CV</button>
        <CVp open={cv} onClose = {() => setCv(false)} />
    </div>
  )
}

export default SectionWrapper(SocialMedia, "")