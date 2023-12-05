import { TypeAnimation } from "react-type-animation"
import {FaInstagram, FaLinkedinIn, FaTwitter} from 'react-icons/fa'

function Main() {
  return (
    <div id="main">
        <img className="w-full h-screen object-cover object-left" src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2531&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <div className="w-full h-screen absolute top-0 left-0 bg-white/40">
            <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
                <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">I'm Senyo Dedoo</h1>
                <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">I'm a
                    <TypeAnimation
                        sequence={[
                            'Full Stack Developer',
                            2000,
                            'Programmer',
                            2000,
                            'Software Engineer',
                            2000
                        ]}
                        wrapper="div"
                        speed={50}
                        style={{ fontSize: '1em', display: 'inline-block', paddingLeft: '5px' }}
                        repeat={Infinity}
                    />
                </h2>
                <div className="flex justify-between pt-6 max-w-[200px] w-full">
                    <a href="www.linkedin.com/in/senyo-dedoo">
                        <FaLinkedinIn size={20} />
                    </a>
                    <a href="https://instagram.com/themrdee?igshid=MmVlMjlkMTBhMg%3D%3D&utm_source=qr">
                        <FaInstagram size={20} />
                    </a>
                    <a href="https://x.com/theonemrdee?s=21&t=YPYlECFd-OyBj4g5NUySHQ"> 
                        <FaTwitter size={20} />
                    </a>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main