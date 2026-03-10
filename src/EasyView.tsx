import { TitleBanner } from './components/title-banner';
import { Bio } from './components/bio';
import { Experience } from './components/experience';
import { Projects } from './components/projects';
import { socials, bioData, experiences, projects } from './data';

export function EasyView() {
    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            overflowY: 'auto',
            overflowX: 'hidden',
            backgroundColor: '#030303',
            color: 'white',
            zIndex: 5,
            paddingTop: '100px', // space for navbar
            paddingBottom: '100px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8rem'
        }}>
            <div style={{ width: '100%', maxWidth: '1200px', padding: '0 2rem' }}>
                <TitleBanner socials={socials} />
            </div>

            <div style={{ width: '100%', maxWidth: '800px', padding: '0 2rem' }} id="bio">
                <Bio bioData={bioData} />
            </div>

            <div style={{ width: '100%', maxWidth: '1000px', padding: '0 2rem' }} id="experience">
                <Experience experiences={experiences} />
            </div>

            <div style={{ width: '100%', maxWidth: '1200px', padding: '0 2rem' }} id="projects">
                <Projects projects={projects} />
            </div>
        </div>
    );
}
