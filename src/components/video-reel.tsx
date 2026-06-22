"use client";

import { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

export function VideoReel() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted(!muted);
  };

  return (
    <div className="relative rounded-2xl overflow-hidden group cursor-pointer bg-navy-800">
      <video
        ref={videoRef}
        className="w-full aspect-video object-cover"
        loop
        muted={muted}
        playsInline
        poster="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
        onClick={togglePlay}
      >
        <source
          src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-navy-950/40 group-hover:bg-navy-950/20 transition-all duration-500" />

      {!playing && (
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={togglePlay}
            className="w-20 h-20 rounded-full bg-gold-500/90 hover:bg-gold-400 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl shadow-gold-500/30"
          >
            <Play className="w-8 h-8 text-navy-950 ml-1" />
          </button>
        </div>
      )}

      <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        {playing && (
          <button
            onClick={togglePlay}
            className="w-10 h-10 rounded-full bg-navy-950/60 backdrop-blur-sm flex items-center justify-center hover:bg-navy-950/80 transition-colors"
          >
            <Pause className="w-4 h-4 text-cream-100" />
          </button>
        )}
        <button
          onClick={toggleMute}
          className="w-10 h-10 rounded-full bg-navy-950/60 backdrop-blur-sm flex items-center justify-center hover:bg-navy-950/80 transition-colors"
        >
          {muted ? (
            <VolumeX className="w-4 h-4 text-cream-100" />
          ) : (
            <Volume2 className="w-4 h-4 text-cream-100" />
          )}
        </button>
      </div>

      <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <p className="text-cream-100/70 text-xs bg-navy-950/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
          A glimpse into how I work
        </p>
      </div>
    </div>
  );
}
