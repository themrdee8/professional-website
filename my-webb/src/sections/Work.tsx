import WorkItem from "./WorkItem"

const data = [
    {
        year: '2023',
        duration: '2 Years',
        title: 'Freelancer', 
        description: 'Lorem'
    },
    {
        year: '2023',
        duration: '2 Years',
        title: 'Freelancer', 
        description: 'Lorem'
    },
    {
        year: '2023',
        duration: '2 Years',
        title: 'Freelancer', 
        description: 'Lorem'
    },
    {
        year: '2023',
        duration: '2 Years',
        title: 'Freelancer', 
        description: 'Lorem'
    },
]
function Work() {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <div className="sm:text-center pb-8 pl-4 pt-2">
        <h1 className="text-4xl inline font-bold md:text-center text-[#083B5B] border-b-4 pr-1">Work</h1>
        </div>
        {data.map((item, idx) => (
            <WorkItem 
            key={idx} 
            year={item.year} 
            title={item.title} 
            duration={item.duration} 
            description={item.description}
            />
        ))}
    </div>
  )
}

export default Work