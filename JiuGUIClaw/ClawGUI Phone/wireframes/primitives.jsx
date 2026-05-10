// Low-fi sketch primitives — shared across all wireframe variants.
// Everything here is meant to LOOK like a hand sketch but stay READABLE.

const SKETCH_FONT = "'Kalam', 'Caveat', 'Comic Sans MS', system-ui, sans-serif";
const MONO_FONT = "'JetBrains Mono', 'Courier New', monospace";

// Phone frame: 360x780 inner content area, dark-mode-ish neutral
const Phone = ({ children, bg = "#1a1a1d", label }) => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
    <div style={{
      width: 360, height: 780, borderRadius: 44, background: bg,
      border: "2px solid #222", padding: "14px 14px 0",
      boxShadow: "0 1px 0 rgba(255,255,255,0.04) inset, 0 20px 40px rgba(0,0,0,0.35)",
      position: "relative", overflow: "hidden",
      fontFamily: SKETCH_FONT,
    }}>
      {/* status bar */}
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        fontSize: 12, color: "#8a8a90", padding: "2px 14px 10px",
        fontFamily: MONO_FONT, letterSpacing: 0.5,
      }}>
        <span>3:04</span>
        <span style={{ display: "flex", gap: 6, alignItems: "center" }}>
          <span>✈</span><span>N</span><span>73%</span>
        </span>
      </div>
      <div style={{ position: "absolute", inset: "46px 0 0", padding: "0 16px", overflow: "hidden" }}>
        {children}
      </div>
    </div>
    {label && <div style={{ fontFamily: SKETCH_FONT, fontSize: 14, color: "#555" }}>{label}</div>}
  </div>
);

// Claw mark — a small decorative glyph (three slashes)
const Claw = ({ size = 14, color = "#c84a3d", style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" style={style}>
    <path d="M4 14 L9 4 M8 16 L13 6 M12 18 L17 8" stroke={color} strokeWidth="2"
      strokeLinecap="round" fill="none" />
  </svg>
);

// Claw cursor — the blinking cursor, but shaped as a tiny pincer
const ClawCursor = ({ size = 16, color = "#c84a3d" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" style={{ display: "inline-block", verticalAlign: "middle" }}>
    <path d="M12 22 L12 12 M12 12 L6 6 M12 12 L18 6 M6 6 L4 4 M18 6 L20 4"
      stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none" />
  </svg>
);

// Sketchy underline wave
const Squiggle = ({ width = 100, color = "#555" }) => (
  <svg width={width} height={6} viewBox={`0 0 ${width} 6`}>
    <path d={`M0 3 Q ${width/8} 0, ${width/4} 3 T ${width/2} 3 T ${width*3/4} 3 T ${width} 3`}
      stroke={color} strokeWidth="1" fill="none" />
  </svg>
);

// Hand-drawn rectangle border using SVG so it looks sketchy
const SketchBox = ({ children, style = {}, dashed = false, thick = false, color = "#444" }) => (
  <div style={{
    border: `${thick ? 2 : 1}px ${dashed ? "dashed" : "solid"} ${color}`,
    borderRadius: 14, padding: 12, position: "relative", ...style,
  }}>{children}</div>
);

// Placeholder bar (grey rectangle standing in for text)
const Bar = ({ w = "60%", h = 8, color = "#3a3a40", mt = 0, mb = 0 }) => (
  <div style={{ width: w, height: h, background: color, borderRadius: 2, marginTop: mt, marginBottom: mb }} />
);

// Tab bar — shared bottom chrome
const TabBar = ({ active = 0, variant = "standard" }) => {
  const tabs = [
    { label: "对话", icon: "💬" },
    { label: "记录", icon: "⏱" },
    { label: "收件", icon: "📥" },
    { label: "设置", icon: "⚙" },
  ];
  const baseStyle = {
    position: "absolute", left: 0, right: 0, bottom: 0,
    display: "flex", justifyContent: "space-around", alignItems: "center",
    paddingBottom: 22, paddingTop: 10,
  };
  if (variant === "floating") {
    return (
      <div style={{ position: "absolute", left: 16, right: 16, bottom: 20,
        display: "flex", justifyContent: "space-around", alignItems: "center",
        background: "rgba(255,255,255,0.04)", borderRadius: 24,
        backdropFilter: "blur(12px)", padding: "10px 4px",
        border: "1px solid rgba(255,255,255,0.06)",
      }}>
        {tabs.map((t, i) => (
          <div key={i} style={{ textAlign: "center", color: i === active ? "#e8e8ea" : "#6a6a70", fontSize: 10 }}>
            <div style={{ fontSize: 18 }}>{t.icon}</div>
            {i === active && <div style={{ marginTop: 2 }}>{t.label}</div>}
          </div>
        ))}
      </div>
    );
  }
  if (variant === "iconsOnly") {
    return (
      <div style={{ ...baseStyle, borderTop: "1px solid #2a2a2e" }}>
        {tabs.map((t, i) => (
          <div key={i} style={{ textAlign: "center", color: i === active ? "#e8e8ea" : "#5a5a60" }}>
            <div style={{ fontSize: 20 }}>{t.icon}</div>
            {i === active && <div style={{ width: 4, height: 4, background: "#c84a3d", borderRadius: 99, margin: "4px auto 0" }} />}
          </div>
        ))}
      </div>
    );
  }
  return (
    <div style={{ ...baseStyle, borderTop: "1px solid #2a2a2e" }}>
      {tabs.map((t, i) => (
        <div key={i} style={{ textAlign: "center", color: i === active ? "#e8e8ea" : "#6a6a70", fontSize: 10 }}>
          <div style={{ fontSize: 16, opacity: i === active ? 1 : 0.7 }}>{t.icon}</div>
          <div style={{ marginTop: 3, fontSize: 11 }}>{t.label}</div>
        </div>
      ))}
    </div>
  );
};

// Page title — big handwritten look
const Title = ({ children, size = 28, right }) => (
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
    <div style={{ fontSize: size, color: "#e8e8ea", fontWeight: 500 }}>{children}</div>
    {right && <div style={{ color: "#8a8a90" }}>{right}</div>}
  </div>
);

Object.assign(window, {
  SKETCH_FONT, MONO_FONT, Phone, Claw, ClawCursor, Squiggle, SketchBox, Bar, TabBar, Title,
});
