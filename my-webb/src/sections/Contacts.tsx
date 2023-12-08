
function Contacts() {
  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1 className="py-4 text-3xl font-bold text-center text-[#001b5e] font-[luminari]">Contacts</h1>
        <form action="https://getform.io/f/0b7f9cb9-7a44-4562-9a15-9e17e2d9b9e3" method="POST" encType="multipart/form-data">
          <div className="grid md:grid-cols-2 gap-4 w-full py-2">
            <div className="flex flex-col">
              <label className="uppercase text-sm py-2">Name</label>
              <input className="border-2 rounded-lg p-2 flex border-gray-300" 
                type="text" 
                name="name" 
                id="name" 
              />
            </div>
            <div className="flex flex-col">
              <label className="uppercase text-sm py-2">Phone</label>
              <input className="border-2 rounded-lg p-2 flex border-gray-300" 
                type="text" 
                name="phone-number" 
                id="phone-number" 
                />
            </div>
          </div>
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2">Email</label>
            <input className="border-2 rounded-lg p-2 flex border-gray-300"
              type="email"
              name="email" 
              id="email" 
              />
          </div>
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2">Subject</label>
            <input className="border-2 rounded-lg p-2 flex border-gray-300" 
              type="text" 
              name="subject" 
              id="subject" 
              />
          </div>
          <div className="flex flex-col py-3">
            <label className="uppercase text-sm py-2">Message</label>
            <textarea className="border-2 rounded-lg py-2 border-gray-300 p-3"
              rows='10' 
              name="message" 
              id="message"
            ></textarea>
          </div>
          <button className="bg-[#001b5e] text-gray-100 w-full p-4 rounded-lg mt-4">
            Submit
          </button>
        </form>
    </div>
  )
}

export default Contacts