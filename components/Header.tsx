export default function Header({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <header className="mb-10">
      <h1 className="text-4xl font-black tracking-tighter">{title}</h1>
      {subtitle && <p className="text-sm text-slate-500 mt-2">{subtitle}</p>}
    </header>
  );
}
