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
        <h1 className="text-4xl font-bold text-center font-[luminari] text-[#083B5B]">Work</h1>
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