export default function KittyRibbon({ title, emoji = "🎀" }: { title: string; emoji?: string }) {
  return (
    <div className="kitty-ribbon text-white font-semibold text-sm shadow-pink" aria-hidden="true">
      <span>{title}</span>
      <span className="ml-2">{emoji}</span>
    </div>
  );
}
