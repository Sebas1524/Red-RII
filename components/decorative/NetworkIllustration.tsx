
export default function NetworkIllustration({ style }: { style?: React.CSSProperties }) {
    return (
        <svg
            viewBox="0 0 800 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "100%", ...style }}
        >

            <g opacity="0.3" stroke="rgba(255,255,255,0.4)" strokeWidth="1">
                <line x1="100" y1="200" x2="300" y2="150" />
                <line x1="300" y1="150" x2="500" y2="200" />
                <line x1="500" y1="200" x2="700" y2="180" />
                <line x1="300" y1="150" x2="400" y2="350" />
                <line x1="100" y1="200" x2="200" y2="400" />
                <line x1="400" y1="350" x2="600" y2="400" />
                <line x1="200" y1="400" x2="400" y2="350" />
                <line x1="500" y1="200" x2="600" y2="400" />
                <line x1="700" y1="180" x2="650" y2="350" />
                <line x1="600" y1="400" x2="650" y2="350" />
                <line x1="150" y1="100" x2="300" y2="150" />
                <line x1="150" y1="100" x2="100" y2="200" />
                <line x1="350" y1="500" x2="400" y2="350" />
                <line x1="350" y1="500" x2="200" y2="400" />
                <line x1="700" y1="450" x2="600" y2="400" />
                <line x1="700" y1="450" x2="650" y2="350" />
                <line x1="250" y1="280" x2="300" y2="150" />
                <line x1="250" y1="280" x2="400" y2="350" />
                <line x1="550" y1="300" x2="500" y2="200" />
                <line x1="550" y1="300" x2="600" y2="400" />
            </g>


            <g>

                <circle cx="300" cy="150" r="12" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                <circle cx="300" cy="150" r="5" fill="rgba(255,255,255,0.5)" />

                <circle cx="500" cy="200" r="14" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                <circle cx="500" cy="200" r="6" fill="rgba(255,255,255,0.5)" />

                <circle cx="400" cy="350" r="16" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.25)" strokeWidth="2" />
                <circle cx="400" cy="350" r="7" fill="rgba(255,255,255,0.4)" />


                <circle cx="100" cy="200" r="10" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
                <circle cx="100" cy="200" r="4" fill="rgba(255,255,255,0.4)" />

                <circle cx="700" cy="180" r="10" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
                <circle cx="700" cy="180" r="4" fill="rgba(255,255,255,0.4)" />

                <circle cx="200" cy="400" r="10" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
                <circle cx="200" cy="400" r="4" fill="rgba(255,255,255,0.4)" />

                <circle cx="600" cy="400" r="11" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
                <circle cx="600" cy="400" r="4" fill="rgba(255,255,255,0.4)" />


                <circle cx="150" cy="100" r="6" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                <circle cx="150" cy="100" r="2.5" fill="rgba(255,255,255,0.3)" />

                <circle cx="650" cy="350" r="8" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                <circle cx="650" cy="350" r="3" fill="rgba(255,255,255,0.3)" />

                <circle cx="350" cy="500" r="7" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                <circle cx="350" cy="500" r="2.5" fill="rgba(255,255,255,0.3)" />

                <circle cx="700" cy="450" r="6" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                <circle cx="700" cy="450" r="2.5" fill="rgba(255,255,255,0.3)" />

                <circle cx="250" cy="280" r="7" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                <circle cx="250" cy="280" r="2.5" fill="rgba(255,255,255,0.3)" />

                <circle cx="550" cy="300" r="7" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                <circle cx="550" cy="300" r="2.5" fill="rgba(255,255,255,0.3)" />
            </g>


            <defs>
                <radialGradient id="nodeGlow">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </radialGradient>
            </defs>
            <circle cx="400" cy="350" r="40" fill="url(#nodeGlow)" />
            <circle cx="300" cy="150" r="30" fill="url(#nodeGlow)" />
            <circle cx="500" cy="200" r="35" fill="url(#nodeGlow)" />
        </svg>
    );
}
