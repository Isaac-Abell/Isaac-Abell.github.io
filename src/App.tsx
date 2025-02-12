import { TitleBanner } from './components/title-banner'
import { Resume } from './components/resume'
import { Projects } from './components/projects'
import { Experience } from './components/experience'
import './App.css'

function App() {

  return (
    <>
      <TitleBanner/>
      <div className='items'>
        <Projects/>
        <Experience/>
      </div>
    </>
  )
}

export default App
