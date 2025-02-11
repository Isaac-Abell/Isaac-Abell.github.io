import './TitleBanner.css';

import githubLogo from '../../assets/github-svg.svg';
import linkedInLogo from '../../assets/linkedin-svg.svg';
import mailLogo from '../../assets/mail-svg.svg';


export function TitleBanner() {
    return (
        <div className='title-banner'>
            <h1>Isaac Abell</h1>
            <div className='title-info'>
                <a href="https://github.com/Isaac-Abell" target="_blank" rel="noopener noreferrer">
                    <div>
                        <img className='icon' src={githubLogo} alt="GitHub Logo" />
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/Isaac-Abell" target="_blank" rel="noopener noreferrer">
                    <div>
                        <img className="icon" src={linkedInLogo} alt="LinkedIn Logo" />
                    </div>
                </a>
                <a href="mailto:isaacabell.1.0.0@gmail.com" target="_blank" rel="noopener noreferrer">
                    <div>
                        <img className="icon" src={mailLogo} alt="LinkedIn Logo" />
                    </div>
                </a>
            </div>
        </div>
    );
}
