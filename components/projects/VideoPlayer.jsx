"use client";

function getYouTubeId(url) {
  const match = url.match(/[?&]v=([^&]+)/) || url.match(/youtu\.be\/([^?]+)/);
  return match ? match[1] : null;
}

export default function VideoPlayer({ youtubeUrl }) {
  if (!youtubeUrl) return null;
  const videoId = getYouTubeId(youtubeUrl);
  if (!videoId) return null;

  return (
    <div className="mt-5">
      <p className="font-mono text-[11px] tracking-[0.1em] uppercase mb-3" style={{ color: "var(--text-3)" }}>
        Demo
      </p>
      <div className="relative w-full rounded-lg overflow-hidden border" style={{ aspectRatio: "16/9", borderColor: "var(--border-2)" }}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="Project Demo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    </div>
  );
}
