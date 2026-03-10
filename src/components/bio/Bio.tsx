import type { Bio as BioType } from '../../types/Bio';

export function Bio({ bioData }: { bioData: BioType }) {
    return (
        <section className="section-container" style={{ maxWidth: '800px' }}>
            <h2 className="section-title" style={{
                fontSize: '4rem',
                fontWeight: 600,
                margin: 0,
                letterSpacing: '-0.03em',
                color: '#ffffff'
            }}>
                About Me
            </h2>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                fontSize: '1.2rem',
                lineHeight: 1.8,
                color: 'rgba(255,255,255,0.7)',
                fontWeight: 300
            }}>
                {bioData.paragraphs?.map((p, i) => <p key={i} style={{ margin: 0 }}>{p}</p>)}
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '2rem',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                paddingTop: '3rem',
                marginTop: '1rem'
            }}>
                {bioData.highlights?.map((h, i) => (
                    <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <span style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>
                            {h.label}
                        </span>
                        <span style={{ fontSize: '1.4rem', fontWeight: 500, color: '#ffffff' }}>
                            {h.value}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}