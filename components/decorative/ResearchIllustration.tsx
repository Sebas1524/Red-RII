
export default function ResearchIllustration({ style }: { style?: React.CSSProperties }) {
    return (
        <svg
            viewBox="0 0 900 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "auto", ...style }}
        >

            <g transform="translate(100, 80)">
                <path
                    d="M0 20 Q50 0 100 15 L100 120 Q50 105 0 125 Z"
                    fill="rgba(0,0,73,0.06)"
                    stroke="rgba(0,0,73,0.12)"
                    strokeWidth="1"
                />
                <path
                    d="M100 15 Q150 0 200 20 L200 125 Q150 105 100 120 Z"
                    fill="rgba(0,0,73,0.04)"
                    stroke="rgba(0,0,73,0.12)"
                    strokeWidth="1"
                />

                <line x1="20" y1="45" x2="80" y2="38" stroke="rgba(0,0,73,0.08)" strokeWidth="1" />
                <line x1="20" y1="60" x2="80" y2="53" stroke="rgba(0,0,73,0.08)" strokeWidth="1" />
                <line x1="20" y1="75" x2="80" y2="68" stroke="rgba(0,0,73,0.08)" strokeWidth="1" />
                <line x1="120" y1="38" x2="180" y2="45" stroke="rgba(0,0,73,0.08)" strokeWidth="1" />
                <line x1="120" y1="53" x2="180" y2="60" stroke="rgba(0,0,73,0.08)" strokeWidth="1" />
                <line x1="120" y1="68" x2="180" y2="75" stroke="rgba(0,0,73,0.08)" strokeWidth="1" />
            </g>


            <g transform="translate(380, 60)">
                <circle cx="60" cy="60" r="8" fill="rgba(0,0,73,0.1)" stroke="rgba(0,0,73,0.2)" strokeWidth="1.5" />
                <circle cx="120" cy="30" r="6" fill="rgba(0,0,73,0.08)" stroke="rgba(0,0,73,0.15)" strokeWidth="1" />
                <circle cx="140" cy="90" r="7" fill="rgba(0,0,73,0.08)" stroke="rgba(0,0,73,0.15)" strokeWidth="1" />
                <circle cx="20" cy="100" r="5" fill="rgba(0,0,73,0.06)" stroke="rgba(0,0,73,0.12)" strokeWidth="1" />
                <circle cx="180" cy="60" r="5" fill="rgba(0,0,73,0.06)" stroke="rgba(0,0,73,0.12)" strokeWidth="1" />
                <line x1="60" y1="60" x2="120" y2="30" stroke="rgba(0,0,73,0.12)" strokeWidth="1" />
                <line x1="60" y1="60" x2="140" y2="90" stroke="rgba(0,0,73,0.12)" strokeWidth="1" />
                <line x1="60" y1="60" x2="20" y2="100" stroke="rgba(0,0,73,0.12)" strokeWidth="1" />
                <line x1="120" y1="30" x2="180" y2="60" stroke="rgba(0,0,73,0.12)" strokeWidth="1" />
                <line x1="140" y1="90" x2="180" y2="60" stroke="rgba(0,0,73,0.12)" strokeWidth="1" />
            </g>


            <g transform="translate(650, 70)">
                <circle cx="60" cy="60" r="50" fill="rgba(0,0,73,0.04)" stroke="rgba(0,0,73,0.12)" strokeWidth="1.5" />
                <ellipse cx="60" cy="60" rx="20" ry="50" fill="none" stroke="rgba(0,0,73,0.08)" strokeWidth="1" />
                <line x1="10" y1="60" x2="110" y2="60" stroke="rgba(0,0,73,0.08)" strokeWidth="1" />
                <ellipse cx="60" cy="40" rx="40" ry="12" fill="none" stroke="rgba(0,0,73,0.06)" strokeWidth="1" />
                <ellipse cx="60" cy="80" rx="40" ry="12" fill="none" stroke="rgba(0,0,73,0.06)" strokeWidth="1" />

                <path
                    d="M45 35 Q55 30 65 38 Q70 45 60 48 Q50 46 45 35"
                    fill="rgba(0,0,73,0.08)"
                />
                <path
                    d="M55 60 Q65 55 75 65 Q70 80 58 75 Q52 68 55 60"
                    fill="rgba(0,0,73,0.06)"
                />
            </g>


            <line x1="300" y1="150" x2="380" y2="130" stroke="rgba(0,0,73,0.08)" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="570" y1="130" x2="650" y2="130" stroke="rgba(0,0,73,0.08)" strokeWidth="1" strokeDasharray="4 4" />


            <circle cx="340" cy="100" r="3" fill="rgba(0,0,73,0.06)" />
            <circle cx="620" cy="100" r="3" fill="rgba(0,0,73,0.06)" />
            <circle cx="340" cy="200" r="2" fill="rgba(0,0,73,0.05)" />
            <circle cx="620" cy="200" r="2" fill="rgba(0,0,73,0.05)" />
        </svg>
    );
}
