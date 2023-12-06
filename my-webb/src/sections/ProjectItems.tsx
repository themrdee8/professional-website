
function ProjectItems({img, title, tools}) {
  return (
    <div className="relative flex items-center justify-center h-60 w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
        <img src={img} alt={title} className="rounded-xl group-hover:opacity-20 object-cover h-60 w-full" />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className="font-bold text-2xl text-white tracking-wider text-center">
                {title}
            </h3>
            <p className="pb-4 pt-2 text-white text-center">{tools}</p>
            <a href="/">
                <p className="text-center p-2 rounded-lg bg-white text-gray-700 font-bold text-lg">More Info</p>
            </a>
        </div>
    </div>
  )
}

export default ProjectItems