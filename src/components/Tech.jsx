import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <img className="h-12 w-12 filter grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer" src={technology.icon}/>
          <h1>{technology.name}</h1>
        </div>
      ))}
    </div>
  )
}

export default Tech