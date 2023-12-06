import ProjectItems from "./ProjectItems"
import calcImg from '../assets/calc.png'
import quoteImg from '../assets/quote.png'

function Projects() {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center font-[luminari] text-[#083B5B] ">Projects</h1>
      <p className="py-8 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, ea amet ratione dolorem non culpa eligendi, enim et nemo quidem rem tempore quod recusandae obcaecati, voluptatum ex adipisci cum illum!</p>
      <div className="grid gap-12 sm:grid-cols-2">
        <ProjectItems img={calcImg} title='Calculator' tools='React.Js Typescript'/>
        <ProjectItems img={quoteImg} title='Quote Machine' tools='React.Js Typescript'/>
      </div>
    </div>
  )
}

export default Projects