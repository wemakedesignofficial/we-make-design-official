export default function RotatingBadge() {
  return (
    <div className="rotating-badge" role="img" aria-label="Let's build together">
      <svg viewBox="0 0 132 132" aria-hidden="true">
        <defs><path id="badge-circle" d="M 66,66 m -49,0 a 49,49 0 1,1 98,0 a 49,49 0 1,1 -98,0" /></defs>
        <circle cx="66" cy="66" r="63" fill="#d4f53c" />
        <text><textPath href="#badge-circle">LET&apos;S BUILD TOGETHER · LET&apos;S BUILD TOGETHER · </textPath></text>
      </svg>
      <span aria-hidden="true">✳</span>
    </div>
  );
}
