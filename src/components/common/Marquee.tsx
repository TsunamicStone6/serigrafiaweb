export function Marquee() {
  const items = [
    'Calacas Prints', 'Screen Printing', 'San Francisco',
    'Est. 2012', 'Custom Apparel', 'Mission District',
  ];
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="overflow-hidden bg-brand-red border-y border-white/10 py-3">
      <div className="animate-marquee inline-block whitespace-nowrap">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="px-7 text-[11px] font-black uppercase tracking-[0.2em] text-white after:content-['_✦_'] after:opacity-60"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
