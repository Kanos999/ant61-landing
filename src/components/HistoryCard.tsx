export function HistoryCard({ card }: { card: any }) {
  return (
    <div className="max-w rounded-2xl bg-[#2e2f41] p-6 shadow-lg transition hover:scale-105">
      <p className="text-xl text-yellow-400">{card.date}</p>
      <p className="mt-2 text-neutral-300">{card.description}</p>
      <video src={card.media}></video>
    </div>
  );
}