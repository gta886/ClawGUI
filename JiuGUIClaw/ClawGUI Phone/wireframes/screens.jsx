// Other screens — 3 variations each.
// History (记录), Inbox (外部收件), Settings (设置 - main), Channels, IME

// ========== HISTORY ==========
const HistoryV1_Timeline = () => (
  <Phone>
    <Title right={<span style={{ fontSize: 18 }}>＋</span>}>会话记录</Title>
    {/* segmented filter */}
    <div style={{ display: "flex", gap: 6, marginBottom: 14, fontSize: 11 }}>
      <div style={{ padding: "4px 10px", borderRadius: 99, background: "#2a2a2e", color: "#e8e8ea" }}>全部</div>
      <div style={{ padding: "4px 10px", borderRadius: 99, color: "#6a6a70" }}>今天</div>
      <div style={{ padding: "4px 10px", borderRadius: 99, color: "#6a6a70" }}>本周</div>
    </div>
    {/* timeline */}
    {[
      { t: "昨天 18:22", title: "发微信给张三", steps: "14 步 · 成功", ok: true },
      { t: "昨天 10:05", title: "识别图片文字", steps: "3 步 · 成功", ok: true },
      { t: "前天 21:30", title: "订明天 8 点闹钟", steps: "7 步 · 失败", ok: false },
    ].map((r, i) => (
      <div key={i} style={{ display: "flex", gap: 10, marginBottom: 12 }}>
        <div style={{ width: 2, background: "#2a2a2e", marginLeft: 4, position: "relative" }}>
          <div style={{ width: 8, height: 8, borderRadius: 99, background: r.ok ? "#4a8" : "#c84a3d",
            position: "absolute", left: -3, top: 4 }} />
        </div>
        <SketchBox style={{ flex: 1, padding: 10, borderColor: "#2a2a2e" }}>
          <div style={{ fontSize: 10, color: "#5a5a60", marginBottom: 4 }}>{r.t}</div>
          <div style={{ fontSize: 13, color: "#e8e8ea", marginBottom: 4 }}>{r.title}</div>
          <div style={{ fontSize: 10, color: "#6a6a70" }}>{r.steps}</div>
        </SketchBox>
      </div>
    ))}
    <TabBar active={1} />
  </Phone>
);

const HistoryV2_Cards = () => (
  <Phone>
    <Title right={<span style={{ fontSize: 12, color: "#6a6a70" }}>共 23 条</span>}>会话记录</Title>
    {[
      { title: "发微信给张三", preview: "让 AI 帮忙发了条消息…", tag: "成功", tagColor: "#4a8" },
      { title: "识别图片文字", preview: "识别截图中的 OCR 结果…", tag: "成功", tagColor: "#4a8" },
      { title: "订明天 8 点闹钟", preview: "Shizuku 权限缺失，中断…", tag: "失败", tagColor: "#c84a3d" },
    ].map((r, i) => (
      <SketchBox key={i} style={{ padding: 14, borderColor: "#2a2a2e", marginBottom: 10 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
          <div style={{ fontSize: 14, color: "#e8e8ea" }}>{r.title}</div>
          <div style={{ fontSize: 10, padding: "2px 8px", borderRadius: 99,
            background: `${r.tagColor}22`, color: r.tagColor }}>{r.tag}</div>
        </div>
        <div style={{ fontSize: 11, color: "#6a6a70", marginBottom: 6 }}>{r.preview}</div>
        <div style={{ fontSize: 10, color: "#5a5a60" }}>14 步 · 2 分 12 秒</div>
      </SketchBox>
    ))}
    <TabBar active={1} />
  </Phone>
);

const HistoryV3_Grouped = () => (
  <Phone>
    <Title size={26}>会话记录</Title>
    <div style={{ fontSize: 10, color: "#5a5a60", letterSpacing: 1, marginBottom: 8, marginTop: 4 }}>今天 · 4 条</div>
    {["识别图片", "发消息"].map((t, i) => (
      <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0",
        borderBottom: "1px solid #222" }}>
        <div>
          <div style={{ fontSize: 13, color: "#e8e8ea" }}>{t}</div>
          <div style={{ fontSize: 10, color: "#5a5a60", marginTop: 2 }}>14:22 · 3 步</div>
        </div>
        <div style={{ color: "#5a5a60" }}>›</div>
      </div>
    ))}
    <div style={{ fontSize: 10, color: "#5a5a60", letterSpacing: 1, marginBottom: 8, marginTop: 14 }}>昨天 · 7 条</div>
    {["闹钟", "查天气"].map((t, i) => (
      <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0",
        borderBottom: "1px solid #222" }}>
        <div>
          <div style={{ fontSize: 13, color: "#e8e8ea" }}>{t}</div>
          <div style={{ fontSize: 10, color: "#5a5a60", marginTop: 2 }}>21:30 · 7 步</div>
        </div>
        <div style={{ color: "#5a5a60" }}>›</div>
      </div>
    ))}
    <TabBar active={1} variant="iconsOnly" />
  </Phone>
);

// ========== INBOX ==========
const InboxV1_List = () => (
  <Phone>
    <Title>外部收件</Title>
    <div style={{ display: "flex", gap: 6, marginBottom: 12, fontSize: 11 }}>
      <div style={{ padding: "4px 10px", borderRadius: 99, background: "#2a2a2e", color: "#e8e8ea" }}>全部</div>
      <div style={{ padding: "4px 10px", borderRadius: 99, color: "#6a6a70" }}>飞书</div>
      <div style={{ padding: "4px 10px", borderRadius: 99, color: "#6a6a70" }}>未处理</div>
    </div>
    {[1,2,3,4].map(i => (
      <SketchBox key={i} style={{ padding: 12, borderColor: "#2a2a2e", marginBottom: 8 }}>
        <div style={{ display: "flex", gap: 10 }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: "#2a2a2e", flexShrink: 0,
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>飞</div>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ fontSize: 12, color: "#e8e8ea" }}>@ClawBot</div>
              <div style={{ fontSize: 10, color: "#5a5a60" }}>14:22</div>
            </div>
            <Bar w="85%" mt={6} h={6} />
            <Bar w="60%" mt={4} h={6} color="#2a2a2e" />
          </div>
        </div>
      </SketchBox>
    ))}
    <TabBar active={2} />
  </Phone>
);

const InboxV2_Unified = () => (
  <Phone>
    <Title>外部收件</Title>
    {/* channel stats row */}
    <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
      {[{ n: "飞书", c: 3 }, { n: "微信", c: 0 }, { n: "钉钉", c: 1 }].map((ch, i) => (
        <SketchBox key={i} style={{ flex: 1, padding: "10px 8px", borderColor: "#2a2a2e", textAlign: "center" }}>
          <div style={{ fontSize: 18, color: "#e8e8ea" }}>{ch.c}</div>
          <div style={{ fontSize: 10, color: "#6a6a70", marginTop: 2 }}>{ch.n}</div>
        </SketchBox>
      ))}
    </div>
    {/* grouped messages */}
    <div style={{ fontSize: 10, color: "#5a5a60", letterSpacing: 1, marginBottom: 6 }}>飞书 · 3 条</div>
    {[1,2,3].map(i => (
      <div key={i} style={{ display: "flex", gap: 8, padding: "8px 0",
        borderBottom: i < 3 ? "1px solid #222" : "none" }}>
        <div style={{ width: 4, height: 4, borderRadius: 99, background: "#c84a3d", marginTop: 6 }} />
        <div style={{ flex: 1 }}>
          <Bar w="80%" h={7} />
          <Bar w="45%" h={6} mt={4} color="#2a2a2e" />
        </div>
        <div style={{ fontSize: 10, color: "#5a5a60" }}>14:2{i}</div>
      </div>
    ))}
    <TabBar active={2} variant="floating" />
  </Phone>
);

const InboxV3_Empty = () => (
  <Phone>
    <Title right={<span style={{ fontSize: 16, color: "#6a6a70" }}>⚙</span>}>外部收件</Title>
    {/* channels status bar */}
    <div style={{ display: "flex", justifyContent: "space-around", padding: "10px 0",
      background: "rgba(255,255,255,0.02)", borderRadius: 14, marginBottom: 14 }}>
      {[{ n: "飞书", on: false }, { n: "微信", on: false }, { n: "钉钉", on: false }].map((c, i) => (
        <div key={i} style={{ textAlign: "center" }}>
          <div style={{ width: 8, height: 8, borderRadius: 99, background: c.on ? "#4a8" : "#3a3a40",
            margin: "0 auto 4px" }} />
          <div style={{ fontSize: 10, color: "#6a6a70" }}>{c.n}</div>
        </div>
      ))}
    </div>
    <div style={{ textAlign: "center", marginTop: 90, color: "#6a6a70" }}>
      <div style={{ fontSize: 40, opacity: 0.3, marginBottom: 10 }}>✉</div>
      <div style={{ fontSize: 14, color: "#8a8a90", marginBottom: 6 }}>暂无外部消息</div>
      <div style={{ fontSize: 11, color: "#5a5a60", marginBottom: 16 }}>开启 Channel 以接收消息</div>
      <SketchBox style={{ display: "inline-block", padding: "6px 14px", borderColor: "#3a3a40", borderRadius: 99 }}>
        <span style={{ color: "#c84a3d", fontSize: 11 }}>+ 添加 Channel</span>
      </SketchBox>
    </div>
    <TabBar active={2} />
  </Phone>
);

// ========== SETTINGS MAIN ==========
const SettingsV1_Grouped = () => (
  <Phone>
    <Title>设置</Title>
    <div style={{ fontSize: 10, color: "#5a5a60", letterSpacing: 1, marginBottom: 6 }}>智能</div>
    <SketchBox style={{ padding: 0, borderColor: "#2a2a2e", marginBottom: 14 }}>
      {["AI 模型", "Trace 记录"].map((t, i) => (
        <div key={i} style={{ padding: "12px 14px",
          borderBottom: i === 0 ? "1px solid #222" : "none",
          display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 13, color: "#e8e8ea" }}>{t}</div>
            <div style={{ fontSize: 10, color: "#6a6a70", marginTop: 2 }}>
              {i === 0 ? "智谱 GLM · 2 个模型" : "已开启"}
            </div>
          </div>
          <div style={{ color: "#5a5a60" }}>›</div>
        </div>
      ))}
    </SketchBox>
    <div style={{ fontSize: 10, color: "#5a5a60", letterSpacing: 1, marginBottom: 6 }}>接入</div>
    <SketchBox style={{ padding: 0, borderColor: "#2a2a2e", marginBottom: 14 }}>
      {["Channels", "ClawGUI 输入法", "Shizuku"].map((t, i) => (
        <div key={i} style={{ padding: "12px 14px",
          borderBottom: i < 2 ? "1px solid #222" : "none",
          display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 13, color: "#e8e8ea" }}>{t}</div>
          <div style={{ fontSize: 10, color: i === 2 ? "#c84a3d" : "#6a6a70" }}>
            {i === 2 ? "未连接" : "›"}
          </div>
        </div>
      ))}
    </SketchBox>
    <TabBar active={3} />
  </Phone>
);

const SettingsV2_Tiles = () => (
  <Phone>
    <Title>设置</Title>
    {/* profile header card */}
    <SketchBox style={{ padding: 14, borderColor: "#2a2a2e", marginBottom: 14,
      display: "flex", alignItems: "center", gap: 12 }}>
      <div style={{ width: 44, height: 44, borderRadius: 22, background: "#2a2a2e",
        display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Claw size={20} />
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 13, color: "#e8e8ea" }}>ClawGUI v0.1.0</div>
        <div style={{ fontSize: 10, color: "#6a6a70", marginTop: 2 }}>Shizuku 未连接</div>
      </div>
      <div style={{ fontSize: 10, padding: "4px 10px", borderRadius: 99,
        background: "rgba(200,74,61,0.15)", color: "#c84a3d" }}>修复</div>
    </SketchBox>
    {/* 2-col tiles */}
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 10 }}>
      {[
        { i: "🧠", t: "AI 模型", s: "GLM" },
        { i: "💬", t: "Channels", s: "未启用" },
        { i: "⌨", t: "输入法", s: "未启用" },
        { i: "🛡", t: "Shizuku", s: "未连接" },
        { i: "📝", t: "Trace", s: "开启" },
        { i: "ⓘ", t: "关于", s: "v0.1.0" },
      ].map((it, i) => (
        <SketchBox key={i} style={{ padding: 12, borderColor: "#2a2a2e" }}>
          <div style={{ fontSize: 18, marginBottom: 6 }}>{it.i}</div>
          <div style={{ fontSize: 12, color: "#e8e8ea" }}>{it.t}</div>
          <div style={{ fontSize: 10, color: "#6a6a70", marginTop: 2 }}>{it.s}</div>
        </SketchBox>
      ))}
    </div>
    <TabBar active={3} variant="iconsOnly" />
  </Phone>
);

const SettingsV3_Clean = () => (
  <Phone>
    <Title>设置</Title>
    {[
      { t: "AI 模型", s: "智谱 GLM" },
      { t: "Channels", s: "未启用" },
      { t: "ClawGUI 输入法", s: "未启用" },
      { t: "Shizuku", s: "未连接", warn: true },
      { t: "Trace 记录", s: "已开启" },
      { t: "关于", s: "v0.1.0" },
    ].map((r, i) => (
      <div key={i} style={{ padding: "16px 0", borderBottom: "1px solid #1f1f22",
        display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: 14, color: "#e8e8ea" }}>{r.t}</div>
        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          <span style={{ fontSize: 11, color: r.warn ? "#c84a3d" : "#6a6a70" }}>{r.s}</span>
          <span style={{ color: "#4a4a50" }}>›</span>
        </div>
      </div>
    ))}
    <TabBar active={3} variant="floating" />
  </Phone>
);

// ========== CHANNELS DETAIL ==========
const ChannelsV1_Toggles = () => (
  <Phone>
    <Title size={22} right={<span style={{ fontSize: 16, color: "#6a6a70" }}>?</span>}>
      <span style={{ fontSize: 14, color: "#6a6a70", marginRight: 8 }}>←</span>
      Channels
    </Title>
    <div style={{ background: "rgba(230,190,80,0.08)", borderRadius: 10, padding: "8px 12px",
      fontSize: 11, color: "#d4a860", marginBottom: 14, border: "1px solid rgba(230,190,80,0.2)" }}>
      修改后需重启 app 才会生效
    </div>
    {["飞书", "微信", "钉钉"].map((c, i) => (
      <SketchBox key={i} style={{ padding: 14, borderColor: "#2a2a2e", marginBottom: 10 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
          <div>
            <div style={{ fontSize: 13, color: "#e8e8ea" }}>{c} Channel</div>
            <div style={{ fontSize: 10, color: "#6a6a70", marginTop: 2 }}>WS 长连接接收消息</div>
          </div>
          <div style={{ width: 36, height: 20, borderRadius: 10,
            background: i === 0 ? "#c84a3d" : "#2a2a2e", position: "relative" }}>
            <div style={{ width: 16, height: 16, borderRadius: 8, background: "#fff",
              position: "absolute", top: 2, left: i === 0 ? 18 : 2 }} />
          </div>
        </div>
        {i === 0 && (
          <>
            <Bar w="100%" h={30} color="#222" mt={4} />
            <Bar w="100%" h={30} color="#222" mt={6} />
          </>
        )}
      </SketchBox>
    ))}
    <TabBar active={3} />
  </Phone>
);

const ChannelsV2_Tabs = () => (
  <Phone>
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
      <span style={{ fontSize: 18, color: "#6a6a70" }}>←</span>
      <div style={{ fontSize: 22, color: "#e8e8ea" }}>Channels</div>
    </div>
    {/* tab row */}
    <div style={{ display: "flex", gap: 16, borderBottom: "1px solid #222", marginBottom: 14 }}>
      {["飞书", "微信", "钉钉"].map((t, i) => (
        <div key={i} style={{ padding: "8px 0", fontSize: 13,
          color: i === 0 ? "#e8e8ea" : "#6a6a70",
          borderBottom: i === 0 ? "2px solid #c84a3d" : "none" }}>{t}</div>
      ))}
    </div>
    {/* status pill */}
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: "10px 12px", background: "rgba(74,136,96,0.08)", borderRadius: 10, marginBottom: 14 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <div style={{ width: 6, height: 6, borderRadius: 99, background: "#4a8" }} />
        <span style={{ fontSize: 12, color: "#b0b0b5" }}>已启用 · 连接正常</span>
      </div>
      <div style={{ width: 30, height: 18, borderRadius: 9, background: "#4a8", position: "relative" }}>
        <div style={{ width: 14, height: 14, borderRadius: 7, background: "#fff",
          position: "absolute", top: 2, left: 14 }} />
      </div>
    </div>
    {[{ l: "App ID", v: "cli_a1b2c3d4" }, { l: "App Secret", v: "••••••••" }].map((f, i) => (
      <div key={i} style={{ marginBottom: 12 }}>
        <div style={{ fontSize: 10, color: "#5a5a60", marginBottom: 4 }}>{f.l}</div>
        <SketchBox style={{ padding: "10px 12px", borderColor: "#2a2a2e" }}>
          <span style={{ fontSize: 12, color: "#b0b0b5", fontFamily: MONO_FONT }}>{f.v}</span>
        </SketchBox>
      </div>
    ))}
    <TabBar active={3} variant="iconsOnly" />
  </Phone>
);

const ChannelsV3_StepCard = () => (
  <Phone>
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
      <span style={{ fontSize: 18, color: "#6a6a70" }}>←</span>
      <div style={{ fontSize: 22, color: "#e8e8ea" }}>飞书 Channel</div>
    </div>
    {/* Step indicator */}
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
      {[1,2,3].map(n => (
        <React.Fragment key={n}>
          <div style={{ width: 20, height: 20, borderRadius: 10,
            background: n === 1 ? "#c84a3d" : "#2a2a2e",
            color: n === 1 ? "#fff" : "#6a6a70", fontSize: 10,
            display: "flex", alignItems: "center", justifyContent: "center" }}>{n}</div>
          {n < 3 && <div style={{ flex: 1, height: 1, background: "#2a2a2e" }} />}
        </React.Fragment>
      ))}
    </div>
    <div style={{ fontSize: 13, color: "#e8e8ea", marginBottom: 4 }}>填写应用凭证</div>
    <div style={{ fontSize: 11, color: "#6a6a70", marginBottom: 14 }}>在飞书开放平台创建自建应用后获取</div>
    {["App ID", "App Secret", "加密 Key"].map((f, i) => (
      <div key={i} style={{ marginBottom: 10 }}>
        <SketchBox style={{ padding: "12px 14px", borderColor: "#2a2a2e" }}>
          <div style={{ fontSize: 10, color: "#5a5a60", marginBottom: 2 }}>{f}</div>
          <div style={{ fontSize: 12, color: "#4a4a50" }}>输入 {f}</div>
        </SketchBox>
      </div>
    ))}
    <div style={{ position: "absolute", left: 16, right: 16, bottom: 96, display: "flex", gap: 8 }}>
      <SketchBox style={{ flex: 1, padding: 12, textAlign: "center", borderColor: "#2a2a2e" }}>
        <span style={{ color: "#6a6a70", fontSize: 13 }}>跳过</span>
      </SketchBox>
      <div style={{ flex: 2, padding: 12, textAlign: "center", borderRadius: 14,
        background: "#c84a3d", color: "#fff", fontSize: 13 }}>下一步</div>
    </div>
    <TabBar active={3} />
  </Phone>
);

// ========== IME ==========
const ImeV1_Status = () => (
  <Phone>
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
      <span style={{ fontSize: 18, color: "#6a6a70" }}>←</span>
      <div style={{ fontSize: 22, color: "#e8e8ea" }}>ClawGUI 输入法</div>
    </div>
    <SketchBox style={{ padding: 16, borderColor: "#2a2a2e", marginBottom: 14 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
        <div style={{ fontSize: 12, color: "#6a6a70" }}>状态</div>
        <div style={{ fontSize: 11, color: "#c84a3d" }}>刷新 ↻</div>
      </div>
      <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 6 }}>
        <div style={{ width: 8, height: 8, borderRadius: 99, background: "#c84a3d" }} />
        <span style={{ fontSize: 14, color: "#e8e8ea" }}>未启用</span>
      </div>
      <div style={{ fontSize: 11, color: "#6a6a70", marginBottom: 12 }}>中文输入会回退到剪贴板粘贴</div>
      <div style={{ display: "flex", gap: 8 }}>
        <div style={{ flex: 1, padding: "10px 0", textAlign: "center", borderRadius: 10,
          background: "#c84a3d", color: "#fff", fontSize: 13 }}>一键启用</div>
        <SketchBox style={{ flex: 1, padding: "10px 0", textAlign: "center", borderColor: "#3a3a40" }}>
          <span style={{ color: "#e8e8ea", fontSize: 13 }}>系统设置</span>
        </SketchBox>
      </div>
    </SketchBox>
    <SketchBox style={{ padding: 12, borderColor: "#2a2a2e" }}>
      <div style={{ fontSize: 10, color: "#5a5a60", marginBottom: 4 }}>组件 ID</div>
      <div style={{ fontSize: 11, color: "#b0b0b5", fontFamily: MONO_FONT, wordBreak: "break-all" }}>
        com.clawgui.android/.core.ime.ClawguiIME
      </div>
    </SketchBox>
    <TabBar active={3} />
  </Phone>
);

const ImeV2_Preview = () => (
  <Phone>
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
      <span style={{ fontSize: 18, color: "#6a6a70" }}>←</span>
      <div style={{ fontSize: 22, color: "#e8e8ea" }}>ClawGUI 输入法</div>
    </div>
    {/* live preview of keyboard */}
    <div style={{ fontSize: 10, color: "#5a5a60", letterSpacing: 1, marginBottom: 6 }}>预览</div>
    <div style={{ background: "#0f0f11", borderRadius: 14, padding: 10, marginBottom: 14,
      border: "1px solid #222" }}>
      <Bar w="80%" h={6} mb={6} />
      {/* fake keyboard */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(10, 1fr)", gap: 3, marginTop: 10 }}>
        {Array.from({length: 30}).map((_,i) => (
          <div key={i} style={{ height: 18, background: "#2a2a2e", borderRadius: 3 }} />
        ))}
      </div>
      <div style={{ display: "flex", gap: 3, marginTop: 3 }}>
        <div style={{ flex: 1, height: 18, background: "#2a2a2e", borderRadius: 3 }} />
        <div style={{ flex: 4, height: 18, background: "#c84a3d", borderRadius: 3,
          display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, color: "#fff" }}>space</div>
        <div style={{ flex: 1, height: 18, background: "#2a2a2e", borderRadius: 3 }} />
      </div>
    </div>
    {/* toggle */}
    <SketchBox style={{ padding: 14, borderColor: "#2a2a2e", marginBottom: 10,
      display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div>
        <div style={{ fontSize: 13, color: "#e8e8ea" }}>设为默认输入法</div>
        <div style={{ fontSize: 10, color: "#6a6a70", marginTop: 2 }}>未启用</div>
      </div>
      <div style={{ width: 36, height: 20, borderRadius: 10, background: "#2a2a2e", position: "relative" }}>
        <div style={{ width: 16, height: 16, borderRadius: 8, background: "#fff",
          position: "absolute", top: 2, left: 2 }} />
      </div>
    </SketchBox>
    <SketchBox style={{ padding: 14, borderColor: "#2a2a2e",
      display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div style={{ fontSize: 13, color: "#e8e8ea" }}>使用 Shizuku 自动授权</div>
      <div style={{ color: "#5a5a60" }}>›</div>
    </SketchBox>
    <TabBar active={3} variant="iconsOnly" />
  </Phone>
);

const ImeV3_Walkthrough = () => (
  <Phone>
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
      <span style={{ fontSize: 18, color: "#6a6a70" }}>←</span>
      <div style={{ fontSize: 22, color: "#e8e8ea" }}>启用输入法</div>
    </div>
    {[
      { n: 1, t: "添加输入法", d: "去「语言和输入法」中勾选 ClawGUI", done: true },
      { n: 2, t: "设为默认", d: "在输入法选择器中切换为 ClawGUI", done: false },
      { n: 3, t: "授予权限", d: "允许读取剪贴板以支持完整功能", done: false },
    ].map((s, i) => (
      <SketchBox key={i} style={{ padding: 14, borderColor: s.done ? "#4a8" : "#2a2a2e",
        marginBottom: 10, display: "flex", gap: 12,
        background: s.done ? "rgba(74,136,96,0.05)" : "transparent" }}>
        <div style={{ width: 26, height: 26, borderRadius: 13, flexShrink: 0,
          background: s.done ? "#4a8" : "#2a2a2e",
          color: "#fff", fontSize: 12,
          display: "flex", alignItems: "center", justifyContent: "center" }}>
          {s.done ? "✓" : s.n}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, color: "#e8e8ea", marginBottom: 2 }}>{s.t}</div>
          <div style={{ fontSize: 11, color: "#6a6a70" }}>{s.d}</div>
          {!s.done && i === 1 && (
            <div style={{ display: "inline-block", marginTop: 8, padding: "4px 10px",
              borderRadius: 12, background: "#c84a3d", color: "#fff", fontSize: 11 }}>去设置</div>
          )}
        </div>
      </SketchBox>
    ))}
    <TabBar active={3} variant="floating" />
  </Phone>
);

Object.assign(window, {
  HistoryV1_Timeline, HistoryV2_Cards, HistoryV3_Grouped,
  InboxV1_List, InboxV2_Unified, InboxV3_Empty,
  SettingsV1_Grouped, SettingsV2_Tiles, SettingsV3_Clean,
  ChannelsV1_Toggles, ChannelsV2_Tabs, ChannelsV3_StepCard,
  ImeV1_Status, ImeV2_Preview, ImeV3_Walkthrough,
});
