import './Resume.css';
import resume from '/Resume.pdf';
import resumePng from '../../assets/resume-png.png'

export function Resume() {
    return (
        <div className="resume-banner">
            <div className="resume-info">
                <div className="resume-link" onClick={() => window.open(resume, "_blank")}>
                    <p>Resume</p>
                    <img className="resume-image" src={resumePng} alt="Resume"/>
                </div>
            </div>
        </div>
    );
}
