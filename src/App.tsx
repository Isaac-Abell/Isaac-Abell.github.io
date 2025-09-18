import { TitleBanner } from './components/title-banner'
import { Projects } from './components/projects'
import { Experience } from './components/experience'
import { Bio } from './components/bio'
import { socials, projects, experiences, bioData } from './data'
import headshot from './assets/headshot.png';

import './App.css'

function App() {
  return (
    <>
      <div className="header-container">
        <img src={headshot} alt="Headshot" className="bio-headshot" />
        <TitleBanner socials={socials}/>
      </div>

      <Bio bioData={bioData}/>
      <div className='items'>
        <Experience experiences={experiences}/>
        <Projects projects={projects}/>
      </div>
    </>
  )
}

export default App