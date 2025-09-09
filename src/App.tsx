import { TitleBanner } from './components/title-banner'
import { Projects } from './components/projects'
import { Experience } from './components/experience'
import { Bio } from './components/bio'
import { socials, projects, experiences, bioData } from './data'
import './App.css'

function App() {

  return (
    <>
      <TitleBanner socials={socials}/>
      <Bio bioData={bioData}/>
      <div className='items'>
        <Experience experiences={experiences}/>
        <Projects projects={projects}/>
      </div>
    </>
  )
}

export default App
