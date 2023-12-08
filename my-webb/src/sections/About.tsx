
const About = () => {
  return (
    <div id="about" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 mt-6">
        <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 ">
                <div className="sm:text-right pb-8 pl-4 pt-2">
                    <p className="text-4xl inline border-b-4 border-[#092436] font-bold text-gray-500">About</p>
                </div>
                <div></div>
            </div>
            <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                <div>
                    <p className="sm:text-right text-4xl bold font-bold text-gray-500">
                        Hi, I'm Senyo, nice to meet you. Welcome to my world of 
                        software engineering and programming!
                    </p>
                </div>
                <div className="pt-2 font-serif">
                <p>
                    ***Subject to change***
                    I am passionate about building excellent software that improves the lives of those around me. 
                    I specialize in creating software for clients ranging from individuals and small-businesses 
                    all the way to large enterprise corporations. What would you do if you had a software expert 
                    available at your fingertips?
                </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About