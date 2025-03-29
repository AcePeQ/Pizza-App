function StatCard({
  statText,
  subText,
}: {
  statText: string;
  subText: string;
}) {
  return (
    <div className="max-w-78 w-full mx-auto px-8 py-6 text-center bg-stone-800 text-amber-50 rounded-2xl">
      <p className="font-bold text-4xl mb-1">{statText}</p>
      <p className="font-semibold text-xl">{subText}</p>
    </div>
  );
}

export default StatCard;
