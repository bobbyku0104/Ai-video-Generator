export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6">
      <div className="flex items-center gap-2 text-xl font-semibold">
        <span className="bg-purple-600 w-8 h-8 rounded-lg flex items-center justify-center">
          A
        </span>
        Aura
      </div>
      <a href="#" className="text-gray-300 hover:text-white">
        Github
      </a>
    </nav>
  );
}
