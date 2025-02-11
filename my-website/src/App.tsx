import { TitleBanner } from './components/title-banner'
import { Resume } from './components/resume'
import './App.css'

function App() {

  return (
    <>
      <TitleBanner/>
      <div className='items'>
        <Resume/>
      </div>
    </>
  )
}

export default App
