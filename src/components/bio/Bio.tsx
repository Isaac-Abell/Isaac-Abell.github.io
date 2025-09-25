import './Bio.css';
import type { Bio } from '../../types/Bio';

export function Bio({ bioData }: { bioData: Bio }) {
    return (
        <section className="bio-container">
            <h2 className="sub-title">About Me</h2>
            <div className="bio-content">
                <div className="bio-card">
                    {bioData.paragraphs.length > 0 && (
                        <div className="bio-text">
                            {bioData.paragraphs.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    )}
                    {bioData.highlights.length > 0 && (
                        <div className="bio-highlights">
                            {bioData.highlights.map((highlight, index) => (
                                <div key={index} className="highlight-item">
                                    <h4>{highlight.label}</h4>
                                    <span>{highlight.value}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}