export function RadioGroupIcon(props) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      {/* First radio button (unselected) */}
      <circle
        cx="5"
        cy="6"
        r="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        strokeWidth="1.5"
      />
      
      {/* Second radio button (selected) */}
      <circle
        cx="5"
        cy="14"
        r="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        strokeWidth="1.5"
      />
      <circle
        cx="5"
        cy="14"
        r="1.5"
        fill="currentColor"
      />
      
      {/* Labels */}
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 6h6M9 14h6"
        strokeWidth="1.5"
      />
    </svg>
  )
}

