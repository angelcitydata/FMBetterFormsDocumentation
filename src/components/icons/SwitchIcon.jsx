export function SwitchIcon(props) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      {/* Switch track (off state) */}
      <rect
        x="2"
        y="7"
        width="12"
        height="6"
        rx="3"
        ry="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        strokeWidth="1.5"
      />
      
      {/* Switch thumb (left position - off) */}
      <circle
        cx="5"
        cy="10"
        r="2"
        fill="currentColor"
      />
    </svg>
  )
}
