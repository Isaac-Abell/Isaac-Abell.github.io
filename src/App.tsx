import { TitleBanner } from './components/title-banner'
import { Projects } from './components/projects'
import { Experience } from './components/experience'
import './App.css'

function App() {

  return (
    <>
      <TitleBanner/>
      <div className='items'>
        <Experience/>
        <Projects/>
      </div>
    </>
  )
}

export default App
