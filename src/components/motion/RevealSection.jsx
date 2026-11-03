export default function RevealSection({
  id,
  className = "",
  children,
}) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
}
