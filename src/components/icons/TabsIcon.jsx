export function TabsIcon(props) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      {/* Tab headers */}
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.5 5.5h4v3h-4v-3Z"
      />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.5 5.5h4v3h-4v-3Z"
      />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 5.5h4v3h-4v-3Z"
      />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.5 5.5h3v3h-3v-3Z"
      />
      {/* Content area */}
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.5 8.5v6a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-6h-15Z"
      />
      {/* Content lines */}
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.5 11.5h9M5.5 13.5h6"
      />
    </svg>
  )
}
