import { useState } from "react";
import { motion } from "framer-motion";

import './TitleBanner.css';

import githubLogo from '../../assets/github-svg.svg';
import linkedInLogo from '../../assets/linkedin-svg.svg';
import mailLogo from '../../assets/mail-svg.svg';

const colors = ["#CD1818", "#116D6E", "#C84B31", "#FFF4B7", "#810CA8", "#19376D"];

export function TitleBanner() {

    const [letterColors, setLetterColors] = useState(
        "Isaac Abell".split("").map(() => "aliceblue")
      );
    
      const handleHover = (index: number) => {
        setLetterColors((prevColors) => {
          const newColors = [...prevColors];
          newColors[index] = colors[Math.floor(Math.random() * colors.length)];
          return newColors;
        });
    
        setTimeout(() => {
          setLetterColors((prevColors) => {
            const fadedColors = [...prevColors];
            fadedColors[index] = "aliceblue";
            return fadedColors;
          });
        }, 3000);
      };
    return (
        <div className='title-banner'>
            <h1>
                {"Isaac Abell".split("").map((char, index) => (
                <motion.span
                    key={index}
                    style={{ color: letterColors[index], transition: "color 1s ease" }}
                    onMouseEnter={() => handleHover(index)}
                >
                    {char === " " ? " " : char}
                </motion.span>
                ))}
            </h1>
            <div className='title-info'>
                <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
                    <div>
                        <p className='resume-name'>Resume</p>
                    </div>
                </a>
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
                        <img className="icon" src={mailLogo} alt="Mail Logo" />
                    </div>
                </a>
            </div>
        </div>
    );
}
