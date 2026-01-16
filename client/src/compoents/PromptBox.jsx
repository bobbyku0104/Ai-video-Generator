import StyleCard from "./StyleCard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function PromptBox() {

  const navigate = useNavigate();
  const [activeStyle, setActiveStyle] = useState("Cinematic");

  const styles = [
    { title: "Cinematic" },
    { title: "3D Animation" },
    { title: "Realistic" },
    { title: "Cyberpunk" },
  ];

  return (
    <div
      className="
      max-w-5xl mx-auto mt-12 lg:mt-20
      bg-gradient-to-br from-white/10 via-white/5 to-white/0
      backdrop-blur-xl border border-white/10
      rounded-3xl p-6 sm:p-8
      shadow-[0_0_40px_rgba(168,85,247,0.15)]
      mb-10
    "
    >
      {/* Header */}
      <div className="flex justify-between text-sm text-gray-300 mb-4">
        <span className="flex items-center gap-2">✨ Video Prompt</span>
        <span>52 / 500</span>
      </div>

      {/* Textarea */}
  
      <textarea
        placeholder="Describe your video..."
        className="
    w-full h-36
    bg-black/50
    border border-white/10
    rounded-2xl
    p-4
    text-white
    text-sm sm:text-base
    leading-relaxed
    resize-none
    overflow-y-auto
    focus:outline-none
    focus:ring-2 focus:ring-purple-500/40
    hide-scrollbar
  "
      />

      {/* Styles */}
      <h3 className="mt-8 mb-4 font-semibold text-white/90">Select Style</h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {styles.map((style) => (
          <div
            key={style.title}
            onClick={() => setActiveStyle(style.title)}
            className="transition hover:scale-[1.02] active:scale-95"
          >
            <StyleCard
              title={style.title}
              active={activeStyle === style.title}
            />
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-end mt-8">
        <button
        onClick={()=>navigate("/video")}
          className="
          bg-gradient-to-r from-purple-600 to-purple-500
          hover:from-purple-500 hover:to-purple-400
          px-6 py-3
          rounded-2xl
          font-medium
          text-white
          shadow-lg shadow-purple-500/30
          transition

        "
        >
          🎥 Generate Video
        </button>
      </div>
    </div>
  );
}
