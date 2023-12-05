
function WorkItem({year, title, duration, description}) {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-200">
        <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 bg-stone-200 border-white"/>
            <p className="flex flex-wrap gap-4 flex-row items-center judtify-start text-xs md:text-sm">
                <span className="inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md">{year}</span>
                <span className="text-lg font-semibold text-[#001b5e]">{title}</span>
                <span className="my-1 leading-none text-sm font-normal text-stone-400">{duration}</span>
            </p>
            <p className="my-2 text-base font-normal text-stone-500">{description}</p>
        </li>
    </ol>
  )
}

export default WorkItem