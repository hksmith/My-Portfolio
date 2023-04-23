import { technologies } from "../constants"
import { SectionWrapper } from "../hoc"

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-20 h-20" key={technology.name}>
          <img className="h-12 w-12 transition-all duration-300 cursor-pointer" src={technology.icon}/>
          <h1>{technology.name}</h1>
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "");