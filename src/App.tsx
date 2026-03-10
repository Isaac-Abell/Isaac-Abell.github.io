import { useState, Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { Scene } from './components/Scene';
import { EasyView } from './EasyView';
import './App.css';

export type Section = 'home' | 'bio' | 'experience' | 'projects';

function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [isEasyMode, setIsEasyMode] = useState(false);
  const [showGuiltTrip, setShowGuiltTrip] = useState(false);

  // Sync scroll in Easy Mode when navbar clicked
  useEffect(() => {
    if (isEasyMode && activeSection !== 'home') {
      const el = document.getElementById(activeSection);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (isEasyMode && activeSection === 'home') {
      const container = document.getElementById('easy-view-container');
      if (container) container.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeSection, isEasyMode]);

  return (
    <>
      <div className="ui-overlay">
        <nav className="navbar">
          <div className="nav-brand" onClick={() => setActiveSection('home')}>
            Isaac Abell
          </div>
          <div className="nav-links">
            <button
              className={`nav-link ${activeSection === 'bio' ? 'active' : ''}`}
              onClick={() => setActiveSection('bio')}
            >
              Bio
            </button>
            <button
              className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
              onClick={() => setActiveSection('experience')}
            >
              Experience
            </button>
            <button
              className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={() => setActiveSection('projects')}
            >
              Projects
            </button>

            <div style={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.2)' }} />

            {!isEasyMode ? (
              <button
                className="nav-link"
                style={{ color: '#ffaaaa' }}
                onClick={() => setShowGuiltTrip(true)}
              >
                Easy View (2D)
              </button>
            ) : (
              <button
                className="nav-link"
                style={{ color: '#aaffaa' }}
                onClick={() => setIsEasyMode(false)}
              >
                Back to 3D UX
              </button>
            )}
          </div>
        </nav>
      </div>

      {showGuiltTrip && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
          background: 'rgba(0,0,0,0.8)', zIndex: 100, display: 'flex',
          justifyContent: 'center', alignItems: 'center', backdropFilter: 'blur(5px)'
        }}>
          <div style={{
            background: '#111', padding: '3rem', borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.1)', maxWidth: '500px',
            textAlign: 'center', color: 'white', fontFamily: 'Inter'
          }}>
            <h2 style={{ marginBottom: '1rem' }}>Really?</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', lineHeight: 1.5 }}>
              Do you have any idea how long it took to vibe code this? (not long, it's vibe coding) And you'd rather scroll on a generic website?
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <button onClick={() => setShowGuiltTrip(false)} style={{
                padding: '0.8rem 1.5rem', background: 'var(--text-primary)', color: 'black',
                border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 600
              }}>
                Stay in 3D.
              </button>
              <button onClick={() => { setIsEasyMode(true); setShowGuiltTrip(false); }} style={{
                padding: '0.8rem 1.5rem', background: 'transparent', color: 'white',
                border: '1px solid rgba(255,255,255,0.2)', borderRadius: '4px', cursor: 'pointer'
              }}>
                It's ugly, I hate it, and I hate you.
              </button>
            </div>
          </div>
        </div>
      )}

      {!isEasyMode && (
        <div className="canvas-container">
          <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
            <color attach="background" args={['#030303']} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

            <Suspense fallback={null}>
              <Scene activeSection={activeSection} />
            </Suspense>
          </Canvas>
        </div>
      )}

      {isEasyMode && <EasyView />}
    </>
  );
}

export default App;