import { useEffect } from 'react';
import { TitleBanner } from './components/title-banner'
import { Projects } from './components/projects'
import { Experience } from './components/experience'
import { Bio } from './components/bio'
import { socials, projects, experiences, bioData } from './data'
import headshot from './assets/headshot.png';

import './App.css'

function App() {
  useEffect(() => {
    // Create particle system
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    document.body.appendChild(particlesContainer);

    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      const size = Math.random() * 3 + 1;
      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * window.innerHeight;
      const duration = Math.random() * 20 + 10;
      const delay = Math.random() * 5;
      
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${startX}px`;
      particle.style.top = `${startY}px`;
      particle.style.animation = `float-particle ${duration}s ${delay}s infinite ease-in-out`;
      
      particlesContainer.appendChild(particle);
    }

    // Add float animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float-particle {
        0%, 100% {
          transform: translate(0, 0);
          opacity: 0;
        }
        10%, 90% {
          opacity: 1;
        }
        25% {
          transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
        }
        50% {
          transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px);
        }
        75% {
          transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.body.removeChild(particlesContainer);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      <div className="header-container">
        <img src={headshot} alt="Headshot" className="bio-headshot" />
        <TitleBanner socials={socials}/>
      </div>

      <div className='items'>
        <Bio bioData={bioData}/>
        <Experience experiences={experiences}/>
        <Projects projects={projects}/>
      </div>
    </>
  )
}

export default App