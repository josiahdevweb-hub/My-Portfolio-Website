export function HandDrawnUnderline({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full ${className}`}
      preserveAspectRatio="none"
    >
      <path
        d="M2 8.5C20 3 40 5.5 60 4.5C80 3.5 100 7 120 5C140 3 160 6.5 180 4C190 3 195 5 198 6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        style={{ filter: "url(#roughen)" }}
      />
      <defs>
        <filter id="roughen">
          <feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" />
        </filter>
      </defs>
    </svg>
  );
}

export function HandDrawnCircle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
    >
      <path
        d="M60 10C30 8 12 30 10 55C8 80 25 105 55 108C85 111 108 90 110 60C112 30 90 12 60 10Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
        strokeDasharray="4 6"
      />
    </svg>
  );
}

export function HandDrawnArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
    >
      <path
        d="M2 15C10 14 20 16 30 13C40 10 48 12 55 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M48 8L56 14L49 21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function ScribbleHighlight({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute -inset-x-2 -inset-y-1 ${className}`}
      preserveAspectRatio="none"
    >
      <path
        d="M8 30C30 10 60 5 100 8C140 11 170 6 192 12C195 20 190 28 170 30C140 33 100 35 60 32C30 30 10 35 8 30Z"
        fill="currentColor"
        opacity="0.1"
      />
    </svg>
  );
}
