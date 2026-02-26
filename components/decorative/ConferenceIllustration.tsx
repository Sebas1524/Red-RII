
export default function ConferenceIllustration({
    style,
    colorScheme = "purple",
}: {
    style?: React.CSSProperties;
    colorScheme?: "purple" | "blue";
}) {
    const primary = colorScheme === "purple" ? "rgba(254,199,4," : "rgba(255,255,255,";
    const secondary = "rgba(255,255,255,";

    return (
        <svg
            viewBox="0 0 600 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "100%", ...style }}
        >

            <rect
                x="150"
                y="120"
                width="300"
                height="180"
                rx="12"
                fill={`${secondary}0.06)`}
                stroke={`${secondary}0.12)`}
                strokeWidth="1"
            />


            <rect
                x="180"
                y="140"
                width="240"
                height="100"
                rx="6"
                fill={`${secondary}0.04)`}
                stroke={`${secondary}0.1)`}
                strokeWidth="1"
            />


            <rect x="200" y="165" width="120" height="4" rx="2" fill={`${primary}0.2)`} />
            <rect x="200" y="180" width="80" height="3" rx="1.5" fill={`${secondary}0.1)`} />
            <rect x="200" y="190" width="100" height="3" rx="1.5" fill={`${secondary}0.08)`} />
            <rect x="200" y="200" width="60" height="3" rx="1.5" fill={`${secondary}0.08)`} />


            <polyline
                points="340,210 360,195 380,200 400,180"
                stroke={`${primary}0.3)`}
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
            />


            <rect
                x="270"
                y="260"
                width="60"
                height="40"
                rx="4"
                fill={`${secondary}0.08)`}
                stroke={`${secondary}0.15)`}
                strokeWidth="1"
            />


            <circle cx="300" cy="235" r="12" fill={`${secondary}0.12)`} />
            <path
                d="M285 265 Q300 250 315 265"
                fill={`${secondary}0.1)`}
            />


            {[180, 220, 260, 300, 340, 380, 420].map((x, i) => (
                <g key={`r1-${i}`}>
                    <circle cx={x} cy="345" r="6" fill={`${secondary}0.08)`} />
                    <rect x={x - 8} y="355" width="16" height="10" rx="3" fill={`${secondary}0.05)`} />
                </g>
            ))}


            {[160, 200, 240, 280, 320, 360, 400, 440].map((x, i) => (
                <g key={`r2-${i}`}>
                    <circle cx={x} cy="385" r="5" fill={`${secondary}0.06)`} />
                    <rect x={x - 7} y="393" width="14" height="8" rx="3" fill={`${secondary}0.04)`} />
                </g>
            ))}


            {[140, 180, 220, 260, 300, 340, 380, 420, 460].map((x, i) => (
                <g key={`r3-${i}`}>
                    <circle cx={x} cy="420" r="4" fill={`${secondary}0.04)`} />
                    <rect x={x - 6} y="427" width="12" height="7" rx="2" fill={`${secondary}0.03)`} />
                </g>
            ))}


            <circle cx="200" cy="100" r="4" fill={`${primary}0.25)`} />
            <circle cx="300" cy="95" r="5" fill={`${primary}0.3)`} />
            <circle cx="400" cy="100" r="4" fill={`${primary}0.25)`} />


            <polygon
                points="300,95 250,200 350,200"
                fill={`${primary}0.03)`}
            />
            <polygon
                points="200,100 170,200 230,200"
                fill={`${primary}0.02)`}
            />
            <polygon
                points="400,100 370,200 430,200"
                fill={`${primary}0.02)`}
            />


            <circle cx="80" cy="150" r="30" fill={`${primary}0.04)`} />
            <circle cx="520" cy="180" r="25" fill={`${primary}0.04)`} />
            <circle cx="550" cy="400" r="20" fill={`${primary}0.03)`} />
        </svg>
    );
}
