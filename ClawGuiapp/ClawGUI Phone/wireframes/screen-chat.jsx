// Chat / 新会话 screen — 3 variations
// V1: Classic — clean ChatGPT-style, status pill top, tab bar at bottom, input pinned
// V2: Command palette — Raycast-feel: big centered input + suggestion cards
// V3: Floating dock — floating tab bar, softer glass-morphism hints

const ChatV1_Classic = () => (
  <Phone>
    <Title right={<span style={{ fontSize: 18 }}>＋</span>}>新会话</Title>
    {/* collapsed shizuku indicator */}
    <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 10px",
      background: "rgba(200,74,61,0.12)", borderRadius: 99, fontSize: 11, color: "#d88",
      marginBottom: 22, border: "1px solid rgba(200,74,61,0.25)" }}>
      <span style={{ width: 6, height: 6, background: "#c84a3d", borderRadius: 99 }} />
      Shizuku 未连接
    </div>
    {/* empty-state centered */}
    <div style={{ textAlign: "center", marginTop: 120, color: "#6a6a70" }}>
      <Claw size={28} style={{ marginBottom: 14, opacity: 0.5 }} />
      <div style={{ fontSize: 18, marginBottom: 6, color: "#8a8a90" }}>告诉 AI 你想做什么</div>
      <div style={{ fontSize: 12, color: "#5a5a60" }}>试试 "打开微信 发消息给小王"</div>
    </div>
    {/* input bar */}
    <div style={{ position: "absolute", left: 16, right: 16, bottom: 96,
      display: "flex", gap: 8, alignItems: "center" }}>
      <SketchBox style={{ flex: 1, padding: "10px 14px", borderRadius: 22, borderColor: "#3a3a40" }}>
        <div style={{ color: "#5a5a60", fontSize: 13 }}>输入指令…</div>
      </SketchBox>
      <div style={{ width: 40, height: 40, borderRadius: 20, background: "#2a2a2e",
        display: "flex", alignItems: "center", justifyContent: "center", color: "#6a6a70" }}>↑</div>
    </div>
    <TabBar active={0} />
  </Phone>
);

const ChatV2_Palette = () => (
  <Phone>
    {/* no big title - minimal top */}
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center",
      fontSize: 13, color: "#6a6a70", marginBottom: 28 }}>
      <span>· 新会话</span>
      <span>⋯</span>
    </div>
    {/* giant claw + prompt */}
    <div style={{ textAlign: "center", marginTop: 40 }}>
      <Claw size={48} style={{ opacity: 0.6 }} />
      <div style={{ fontSize: 24, color: "#e8e8ea", marginTop: 16 }}>你好</div>
      <div style={{ fontSize: 14, color: "#6a6a70", marginTop: 4 }}>我能帮你操作手机</div>
    </div>
    {/* large input */}
    <SketchBox style={{ marginTop: 28, padding: "16px 16px", borderRadius: 18, borderColor: "#3a3a40" }}>
      <div style={{ color: "#5a5a60", fontSize: 14 }}>输入指令<ClawCursor size={12} color="#c84a3d" /></div>
    </SketchBox>
    {/* suggestion cards */}
    <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ fontSize: 10, color: "#5a5a60", letterSpacing: 1, marginBottom: 2 }}>快捷指令</div>
      <SketchBox style={{ padding: "10px 12px", borderColor: "#2a2a2e", display: "flex", justifyContent: "space-between" }}>
        <span style={{ color: "#b0b0b5", fontSize: 13 }}>📷 识别这张图里的文字</span>
        <span style={{ color: "#5a5a60" }}>›</span>
      </SketchBox>
      <SketchBox style={{ padding: "10px 12px", borderColor: "#2a2a2e", display: "flex", justifyContent: "space-between" }}>
        <span style={{ color: "#b0b0b5", fontSize: 13 }}>💬 发微信给…</span>
        <span style={{ color: "#5a5a60" }}>›</span>
      </SketchBox>
      <SketchBox style={{ padding: "10px 12px", borderColor: "#2a2a2e", display: "flex", justifyContent: "space-between" }}>
        <span style={{ color: "#b0b0b5", fontSize: 13 }}>⚙️ 打开飞行模式</span>
        <span style={{ color: "#5a5a60" }}>›</span>
      </SketchBox>
    </div>
    <TabBar active={0} variant="iconsOnly" />
  </Phone>
);

const ChatV3_Floating = () => (
  <Phone>
    <Title right={<div style={{ display: "flex", gap: 12, fontSize: 16 }}><span>✎</span><span>＋</span></div>}>新会话</Title>
    {/* glass card banner */}
    <div style={{ background: "rgba(200,74,61,0.08)", borderRadius: 14,
      padding: "10px 14px", marginBottom: 16, border: "1px solid rgba(200,74,61,0.18)",
      display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <div>
        <div style={{ fontSize: 12, color: "#d88", marginBottom: 2 }}>Shizuku 未连接</div>
        <div style={{ fontSize: 10, color: "#886060" }}>点击授权以启用完整功能</div>
      </div>
      <div style={{ padding: "4px 10px", borderRadius: 12, background: "rgba(200,74,61,0.25)",
        color: "#fcc", fontSize: 11 }}>授权</div>
    </div>

    {/* recent conversations preview */}
    <div style={{ fontSize: 10, color: "#5a5a60", letterSpacing: 1, marginBottom: 8 }}>最近</div>
    <SketchBox style={{ padding: 12, borderColor: "#2a2a2e", marginBottom: 8 }}>
      <Bar w="70%" mb={6} />
      <Bar w="40%" color="#2a2a2e" />
    </SketchBox>
    <SketchBox style={{ padding: 12, borderColor: "#2a2a2e", marginBottom: 8 }}>
      <Bar w="55%" mb={6} />
      <Bar w="80%" color="#2a2a2e" />
    </SketchBox>

    <div style={{ textAlign: "center", marginTop: 40, color: "#6a6a70", fontSize: 13 }}>
      告诉 AI 你想做什么
    </div>

    {/* Floating input card above floating tabbar */}
    <div style={{ position: "absolute", left: 16, right: 16, bottom: 96,
      background: "rgba(40,40,44,0.7)", backdropFilter: "blur(14px)",
      borderRadius: 26, padding: "8px 8px 8px 16px",
      display: "flex", gap: 8, alignItems: "center",
      border: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ flex: 1, color: "#5a5a60", fontSize: 13 }}>输入指令…</div>
      <div style={{ width: 36, height: 36, borderRadius: 18, background: "#c84a3d",
        display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 14 }}>↑</div>
    </div>
    <TabBar active={0} variant="floating" />
  </Phone>
);

Object.assign(window, { ChatV1_Classic, ChatV2_Palette, ChatV3_Floating });
