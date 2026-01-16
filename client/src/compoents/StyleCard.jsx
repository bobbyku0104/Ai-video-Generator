export default function StyleCard({ title, active }) {
  return (
    <div
      className={`rounded-xl h-28 p-4 cursor-pointer border ${
        active
          ? "border-purple-500 bg-purple-900/30"
          : "border-white/10 bg-black/40"
      }`}
    >
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-gray-400 mt-2">Sample description</p>
    </div>
  );
}
