export function GrainSvg({ size = 26 }: { size?: number }) {
  return (
    <svg viewBox="0 0 40 40" width={size} height={size} aria-hidden="true">
      <circle cx="20" cy="20" r="18" fill="none" stroke="#3c4a3b" strokeWidth="1.3" />
      <circle cx="20" cy="20" r="11" fill="none" stroke="#221e19" strokeWidth="1" />
      <circle cx="20" cy="20" r="4" fill="#3c4a3b" />
    </svg>
  );
}
