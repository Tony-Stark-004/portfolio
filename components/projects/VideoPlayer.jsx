"use client";

// Always-visible video player — no toggle
export default function VideoPlayer({ src }) {
  return (
    <div className="mt-5">
      <p className="font-mono text-[11px] tracking-[0.1em] uppercase mb-3" style={{ color: "var(--text-3)" }}>
        Local Demo
      </p>
      <video
        controls
        preload="metadata"
        className="w-full rounded-lg border"
        style={{ borderColor: "var(--border-2)", background: "#000" }}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
