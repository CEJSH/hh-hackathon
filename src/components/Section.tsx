export default function Section({
  children,
  className,
  title,
}: {
  children: React.ReactNode;
  className?: string;
  title?: React.ReactNode;
}) {
  return (
    <section className={`p-[8px] py-[16px] ${className}`}>
      {title != null ? (
        <div className="txt-title text-base font-bold mb-[16px]">{title}</div>
      ) : null}
      {children}
    </section>
  );
}
