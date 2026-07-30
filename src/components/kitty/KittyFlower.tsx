export default function KittyFlower({ text }: { text?: string }) {
  return (
    <div className="kitty-flower text-xs py-2" aria-hidden="true">
      {text && <span>{text}</span>}
    </div>
  );
}
