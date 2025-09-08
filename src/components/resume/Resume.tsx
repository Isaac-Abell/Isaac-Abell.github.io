import './Resume.css';
import resume from '/Isaac_Abell_Resume.pdf';
import resumePng from '../../assets/resume-png.png'

export function Resume() {
    return (
        <div className="resume-banner">
            <div className="resume-info">
                <div className="resume-link" onClick={() => window.open(resume, "_blank")}>
                    <h2 className='sub-title'>Resume</h2>
                    <img className="resume-image" src={resumePng} alt="Resume"/>
                </div>
            </div>
        </div>
    );
}
