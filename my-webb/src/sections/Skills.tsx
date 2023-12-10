import CsharpImg from '../assets/csharp.png'
import CssImg from '../assets/css.png'
import JavascriptImg from '../assets/javascript.png'
import HTMLImg from '../assets/html.png'
import ReactImg from '../assets/react.png'
import TypescriptImg from '../assets/typescript.png'

function Skills() {
  return (
    <div id="skills" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <div className="sm:text-center pb-3 pl-2 pt-2">
        <h1 className="inline text-4xl font-bold text-center text-[#001b5e] border-b-4 pr-1">Skills</h1>
        </div>
        <p className='sm:text-center text-[20px] font-serif'>These are the technologies I am most familiar with.</p>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 py-8 gap-4 text-center'>
          <div className='border-2 py-2 my-4 h-[200px] flex flex-col justify-center shadow-md shadow-gray-400 hover:scale-105 duration-500 rounded-[20px] bg-gray-200'>
            <img src={CsharpImg} alt="C#" className="w-[120px] h-30 mx-auto"/>
            <p className="text-center">C#</p> 
          </div>
          <div className='border-2 py-2 my-4 h-[200px] flex flex-col justify-center shadow-md shadow-gray-400 hover:scale-105 duration-500 rounded-[20px] bg-gray-200'>
            <img src={CssImg} alt="CSS" className="w-[120px] h-30 mx-auto"/>
            <p className="text-center">CSS</p>
          </div>
          <div className='border-2 py-2 my-4 h-[200px] flex flex-col justify-center shadow-md shadow-gray-400 hover:scale-105 duration-500 rounded-[20px] bg-gray-200'>
            <img src={JavascriptImg} alt="Javascript" className="w-[120px] h-30 mx-auto"/>
            <p className="text-center">Javascript</p>
          </div>
          <div className='border-2 py-2 my-4 h-[200px] flex flex-col justify-center shadow-md shadow-gray-400 hover:scale-105 duration-500 rounded-[20px] bg-gray-200'>
            <img src={HTMLImg} alt="HTML" className="w-[120px] h-30 mx-auto"/>
            <p className="text-center">HTML</p>
          </div>
          <div className='border-2 py-2 my-4 h-[200px] flex flex-col justify-center shadow-md shadow-gray-400 hover:scale-105 duration-500 rounded-[20px] bg-gray-200'>
            <img src={ReactImg} alt="React" className="w-[120px] h-30 mx-auto"/>
            <p className="text-center">React</p>
          </div>
          <div className='border-2 py-2 my-4 h-[200px] flex flex-col justify-center shadow-md shadow-gray-400 hover:scale-105 duration-500 rounded-[20px] bg-gray-200'>
            <img src={TypescriptImg} alt="Typescript" className="w-[120px] h-30 mx-auto"/>
            <p className="text-center">Typescript</p>
          </div>
        </div>
    </div>
  )
}

export default Skills