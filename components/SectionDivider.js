export default function SectionDivider({ label }) {
  return (
    <div className="section-divider my-8 md:my-10">
      <span className="divider-pill">{label}</span>
    </div>
  );
}
