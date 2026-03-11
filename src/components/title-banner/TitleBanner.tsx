import { Socials } from "../../types/Socials";

export function TitleBanner({ socials }: { socials: Socials }) {
    const socialLinks = [
        { href: "/Isaac_Abell_Resume.pdf", label: "Resume" },
        { href: socials.github, label: "GitHub" },
        { href: socials.linkedin, label: "LinkedIn" },
        { href: `mailto:${socials.email}`, label: "Email" }
    ];

    return (
        <div className="section-container" style={{ alignItems: 'flex-start', gap: '2rem' }}>
            <h1 className="hero-name" style={{
                fontSize: '12vw',
                fontWeight: 800,
                lineHeight: 0.85,
                margin: 0,
                letterSpacing: '-0.05em',
                textTransform: 'uppercase',
                color: '#ffffff'
            }}>
                Isaac<br />Abell
            </h1>

            <div style={{
                display: 'flex',
                gap: '2rem',
                flexWrap: 'wrap',
                marginTop: '1rem',
                borderTop: '1px solid rgba(255,255,255,0.2)',
                paddingTop: '1.5rem',
                width: '100%'
            }}>
                {socialLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: 'rgba(255,255,255,0.6)',
                            textDecoration: 'none',
                            fontSize: '1.2rem',
                            fontWeight: 500,
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            transition: 'color 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                    >
                        {link.label}
                    </a>
                ))}
            </div>
        </div>
    );
}