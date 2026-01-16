
import { Play, FileVideo, Download, Share2 } from "lucide-react";

export default function VideoOutput() {
  return (
    <div className="max-w-5xl mx-auto mt-20 mb-20 group relative overflow-hidden bg-zinc-900/50 border border-white/10 rounded-3xl h-[500px] flex flex-col justify-center items-center transition-all hover:border-white/20">
      {/* Decorative Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Animated Play Button */}
        <div className="relative group/button cursor-pointer">
          <div className="absolute -inset-4 bg-white/5 rounded-full blur-xl group-hover/button:bg-white/10 transition-all" />
          <div className="w-24 h-24 rounded-full border border-white/30 bg-white/5 backdrop-blur-md flex items-center justify-center text-white transition-transform duration-300 group-hover/button:scale-110 group-hover/button:border-white shadow-2xl">
            <Play className="fill-white ml-1" size={32} />
          </div>
        </div>

        {/* Text Details */}
        <div className="mt-8 text-center">
          <h3 className="text-2xl font-medium tracking-tight text-white">
            Video Generated!
          </h3>
          <div className="mt-3 flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-zinc-400">
            <FileVideo size={14} />
            <span className="text-xs font-mono uppercase tracking-wider">
              example-cinematic.mp4
            </span>
          </div>
        </div>

        {/* Action Toolbar (Reveals on Hover) */}
        <div className="mt-10 flex gap-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <button className="flex items-center gap-2 px-6 py-2.5 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition-colors">
            <Download size={18} />
            Download
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-zinc-800 text-white border border-white/10 rounded-full font-medium hover:bg-zinc-700 transition-colors">
            <Share2 size={18} />
            Share
          </button>
        </div>
      </div>

      {/* Subtle Corner Accents */}
      <div className="absolute top-6 left-6 text-[10px] text-zinc-500 font-mono tracking-widest uppercase">
        Output / 01
      </div>
     
    </div>
  );
}







