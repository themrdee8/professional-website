import Sidebar from './components/Sidebar'
import Main from './components/Main'
/* import Work from './sections/Work' */
import Projects from './sections/Projects'
import Contacts from './sections/Contacts'
import About from './sections/About'
import Skills from './sections/Skills'

function App() {

  return (
    <div>
      <Sidebar />
      <Main />
      <About />
      {/* <Work /> */}
      <Skills />
      <Projects />
      <Contacts />
    </div>
  )
}

export default App
