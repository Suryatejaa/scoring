const ragas = {
  Mohanam: [0, 2, 4, 7, 9],
  Shankarabharanam: [0, 2, 4, 5, 7, 9, 11],
  Kalyani: [0, 2, 4, 6, 7, 9, 11],
  Charukesi: [0, 2, 4, 5, 7, 8, 10],
  Hindolam: [0, 3, 5, 7, 10],
  Hamsadhwani: [0, 2, 4, 7, 11],
  Natabhairavi: [0, 2, 3, 5, 7, 8, 10],
  Keeravani: [0, 2, 3, 6, 7, 8, 11],
};

const instruments = {
  Veena: { wave: "triangle", attack: 0.012, release: 0.72, filter: 1700, bend: 28 },
  Bansuri: { wave: "sine", attack: 0.08, release: 0.95, filter: 1250, bend: 12 },
  Harmonium: { wave: "sawtooth", attack: 0.035, release: 0.45, filter: 950, bend: 0 },
  Piano: { wave: "triangle", attack: 0.004, release: 0.38, filter: 2600, bend: 0 },
  Santoor: { wave: "triangle", attack: 0.006, release: 1.25, filter: 2400, bend: 0 },
  Sitar: { wave: "sawtooth", attack: 0.008, release: 0.9, filter: 1850, bend: 34 },
  Sarangi: { wave: "sawtooth", attack: 0.12, release: 1.25, filter: 980, bend: 18 },
  Violin: { wave: "sawtooth", attack: 0.09, release: 1.1, filter: 1150, bend: 9 },
  Cello: { wave: "sawtooth", attack: 0.14, release: 1.35, filter: 720, bend: 6 },
  "Film Strings": { wave: "sawtooth", attack: 0.16, release: 1.5, filter: 740, bend: 10 },
  "String Ensemble": { wave: "sawtooth", attack: 0.18, release: 1.8, filter: 840, bend: 4 },
  "Synth Pad": { wave: "sine", attack: 0.28, release: 1.8, filter: 620, bend: 0 },
  Tabla: { kind: "drum", body: 178, snap: 0.12, release: 0.28, noise: 0.035, tone: 0.36 },
  Mridangam: { kind: "drum", body: 124, snap: 0.08, release: 0.34, noise: 0.05, tone: 0.46 },
  Dholak: { kind: "drum", body: 96, snap: 0.05, release: 0.42, noise: 0.07, tone: 0.52 },
  "Cinematic Drums": { kind: "drum", body: 72, snap: 0.03, release: 0.58, noise: 0.11, tone: 0.62 },
};

const instrumentGroups = {
  "Plucked / Keys": ["Veena", "Santoor", "Sitar", "Piano", "Harmonium"],
  Winds: ["Bansuri"],
  Strings: ["Sarangi", "Violin", "Cello", "Film Strings", "String Ensemble"],
  Pads: ["Synth Pad"],
  Drums: ["Tabla", "Mridangam", "Dholak", "Cinematic Drums"],
};

const roots = {
  C: 261.63,
  "C#": 277.18,
  D: 293.66,
  "D#": 311.13,
  E: 329.63,
  F: 349.23,
  "F#": 369.99,
  G: 392,
  "G#": 415.3,
  A: 440,
  "A#": 466.16,
  B: 493.88,
};

const keyRows = {
  upper: ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "\\"],
  home: ["A", "S", "D", "F", "G", "H", "J", "K", "L", ":", "'"],
  lower: ["Z", "X", "C", "V", "B", "N", "M", ",", ".", "/"],
};

const rowOctaves = {
  upper: 0,
  home: 1,
  lower: 2,
};

const rowSteps = [0, 2, 4, 5, 7, 9, 11];
const assignableKeys = new Set(["I", "O", "P", "K", "L", "{", "}", "\\", ":", "'", ",", ".", "/"]);
const komalSteps = {
  2: 1,
  4: 3,
  9: 8,
  11: 10,
};

const swaras = [
  { step: 0, note: "sa", notation: "S", syllable: "sa", fullName: "shadja" },
  { step: 1, note: "komal re", notation: "r", syllable: "re", fullName: "komal rishabha", variant: "komal" },
  { step: 2, note: "shuddha re", notation: "R", syllable: "re", fullName: "shuddha rishabha" },
  { step: 3, note: "komal ga", notation: "g", syllable: "ga", fullName: "komal gandhaara", variant: "komal" },
  { step: 4, note: "shuddha ga", notation: "G", syllable: "ga", fullName: "shuddha gandhaara" },
  { step: 5, note: "shuddha ma", notation: "m", syllable: "ma", fullName: "shuddha madhyama" },
  { step: 6, note: "tivra ma", notation: "M", syllable: "ma", fullName: "tivra madhyama", variant: "tivra" },
  { step: 7, note: "pa", notation: "P", syllable: "pa", fullName: "panchama" },
  { step: 8, note: "komal dha", notation: "d", syllable: "dha", fullName: "komal dhaivata", variant: "komal" },
  { step: 9, note: "shuddha dha", notation: "D", syllable: "dha", fullName: "shuddha dhaivata" },
  { step: 10, note: "komal ni", notation: "n", syllable: "ni", fullName: "komal nishaada", variant: "komal" },
  { step: 11, note: "shuddha ni", notation: "N", syllable: "ni", fullName: "shuddha nishaada" },
];

const rhythmPatterns = {
  "Adi Tala": [1, 0, 0.45, 0, 0.7, 0, 0.45, 0],
  Keherwa: [1, 0.35, 0.65, 0.35, 0.85, 0.35, 0.65, 0.35],
  Dadra: [1, 0, 0.55, 0.8, 0, 0.55],
  "Suspense Pulse": [0.8, 0, 0, 0.35, 0.7, 0, 0, 0.35],
};

const westernFlatNotes = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
const builtInTunes = [
  {
    id: "builtin-heart-melt-santoor",
    name: "Heart Melt Santoor",
    script:
      "Q - Shift+E R T R Shift+E W Q - W Shift+E R Shift+Y T R Shift+E - A J H Shift+Y T R Shift+E W Q - Q Shift+E R T - R Shift+E W Q",
    raga: "Keeravani",
    instrument: "Santoor",
    root: "C",
    octaveShift: 0,
    pace: 430,
    hold: 520,
    createdAt: "2026-06-03T00:00:00.000Z",
  },
  {
    id: "builtin-cornfield-orbit",
    name: "Cornfield Orbit",
    script:
      "Q E T Y T E Q - A D G H G D A - Q E T Y U Y T E - A D G H J H G D - Q E T Y T E Q - Z C B N B C Z - Q E T Y U J H G - D E Q -",
    raga: "Kalyani",
    instrument: "String Ensemble",
    root: "E",
    octaveShift: 0,
    pace: 260,
    hold: 420,
    createdAt: "2026-06-03T00:00:00.000Z",
  },
];
const customAssignmentStorageKey = "emusic-custom-key-assignments";
const userPrefsStorageKey = "emusic-user-preferences";
const savedTunesStorageKey = "emusic-saved-tunes";
const scriptLanesStorageKey = "emusic-script-lanes";
const sidebarCollapsedStorageKey = "emusic-sidebar-collapsed";
const timelineStorageKey = "emusic-arrangement-timeline";
const workspaceViewStorageKey = "emusic-workspace-view";
const timelineZoomStorageKey = "emusic-timeline-zoom";
const timelineDefaultPxPerMs = 0.08;
const timelineMinPxPerMs = 0.035;
const timelineMaxPxPerMs = 0.28;
const timelineSnapMs = 100;
const timelineTrackHeight = 70;

let audioCtx;
let master;
let recorder;
let recordedChunks = [];
let lastBlobUrl = "";
let octaveShift = 0;
let droneNodes = [];
let rhythmTimer = null;
let rhythmStep = 0;
let pendingAssignmentKey = "";
let sequenceTimers = [];
let sequencePlaying = false;
let sequenceRunningLanes = new Set();
let savedTunes = [];
let pendingDeleteTuneId = "";
let scriptLanes = [];
let activeScriptLaneId = "";
let editingScriptLaneId = "";
let pendingDeleteScriptLaneId = "";
let syncingNotation = false;
let timelineItems = [];
let timelineDrag = null;
let timelinePlaying = false;
let timelinePlayheadMs = 0;
let timelineStartedAt = 0;
let timelineStartOffsetMs = 0;
let timelineClockTimer = null;
let timelinePxPerMs = timelineDefaultPxPerMs;
const customKeyAssignments = {};
const activeNotes = new Map();
const lockedNotes = new Set();

const els = {
  raga: document.querySelector("#ragaSelect"),
  instrument: document.querySelector("#instrumentSelect"),
  root: document.querySelector("#rootSelect"),
  octave: document.querySelector("#octaveShift"),
  tempo: document.querySelector("#tempo"),
  tempoOut: document.querySelector("#tempoOut"),
  upperKeys: document.querySelector("#upperKeys"),
  homeKeys: document.querySelector("#homeKeys"),
  lowerKeys: document.querySelector("#lowerKeys"),
  droneBtn: document.querySelector("#droneBtn"),
  rhythmBtn: document.querySelector("#rhythmBtn"),
  rhythm: document.querySelector("#rhythmSelect"),
  sequenceInput: document.querySelector("#sequenceInput"),
  scriptCarousel: document.querySelector("#scriptCarousel"),
  sequenceNotes: document.querySelector("#sequenceNotes"),
  westernInput: document.querySelector("#westernInput"),
  swaraInput: document.querySelector("#swaraInput"),
  savedTunes: document.querySelector("#savedTunes"),
  sidebar: document.querySelector(".saved-sidebar"),
  sidebarToggle: document.querySelector("#sidebarToggle"),
  sequencePace: document.querySelector("#sequencePace"),
  sequenceHold: document.querySelector("#sequenceHold"),
  playSequence: document.querySelector("#playSequenceBtn"),
  stopSequence: document.querySelector("#stopSequenceBtn"),
  canvasView: document.querySelector("#canvasViewBtn"),
  keysView: document.querySelector("#keysViewBtn"),
  addTimelineItem: document.querySelector("#addTimelineItemBtn"),
  playTimeline: document.querySelector("#timelinePlayPauseBtn"),
  timelineZoomOut: document.querySelector("#timelineZoomOutBtn"),
  timelineZoomIn: document.querySelector("#timelineZoomInBtn"),
  timelineZoom: document.querySelector("#timelineZoom"),
  timelineScrub: document.querySelector("#timelineScrub"),
  timelineTime: document.querySelector("#timelineTime"),
  clearTimeline: document.querySelector("#clearTimelineBtn"),
  timelineScroll: document.querySelector("#timelineScroll"),
  timelineRuler: document.querySelector("#timelineRuler"),
  timelineTrack: document.querySelector("#timelineTrack"),
  timelinePlayhead: document.querySelector("#timelinePlayhead"),
  addScript: document.querySelector("#addScriptBtn"),
  deleteScript: document.querySelector("#deleteScriptBtn"),
  tuneName: document.querySelector("#tuneNameInput"),
  saveTune: document.querySelector("#saveTuneBtn"),
  recordBtn: document.querySelector("#recordBtn"),
  stopBtn: document.querySelector("#stopBtn"),
  exportBtn: document.querySelector("#exportBtn"),
  nowPlaying: document.querySelector("#nowPlaying"),
};

function ensureAudio() {
  if (audioCtx) {
    if (audioCtx.state === "suspended") audioCtx.resume();
    return;
  }
  audioCtx = new AudioContext();
  master = audioCtx.createGain();
  master.gain.value = 0.78;
  master.connect(audioCtx.destination);

  const streamDestination = audioCtx.createMediaStreamDestination();
  master.connect(streamDestination);
  recorder = new MediaRecorder(streamDestination.stream);
  recorder.addEventListener("dataavailable", (event) => {
    if (event.data.size) recordedChunks.push(event.data);
  });
  recorder.addEventListener("stop", () => {
    const blob = new Blob(recordedChunks, { type: "audio/webm" });
    recordedChunks = [];
    if (lastBlobUrl) URL.revokeObjectURL(lastBlobUrl);
    lastBlobUrl = URL.createObjectURL(blob);
    els.exportBtn.disabled = false;
  });
}

function populateSelect(select, values) {
  select.innerHTML = "";
  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.append(option);
  });
}

function populateInstrumentSelect() {
  els.instrument.innerHTML = "";
  Object.entries(instrumentGroups).forEach(([label, values]) => {
    const group = document.createElement("optgroup");
    group.label = label;
    values.forEach((value) => {
      if (!instruments[value]) return;
      const option = document.createElement("option");
      option.value = value;
      option.textContent = value;
      group.append(option);
    });
    els.instrument.append(group);
  });
}

function loadCustomAssignments() {
  try {
    const saved = JSON.parse(localStorage.getItem(customAssignmentStorageKey) ?? "{}");
    Object.entries(saved).forEach(([key, value]) => {
      if (!assignableKeys.has(key)) return;
      if (typeof value === "number" && swaras.some((swara) => swara.step === value)) {
        customKeyAssignments[key] = { step: value, octave: rowOctaves.upper, sourceKey: "" };
      }
      if (
        value &&
        typeof value === "object" &&
        swaras.some((swara) => swara.step === value.step) &&
        Number.isInteger(value.octave)
      ) {
        customKeyAssignments[key] = {
          step: value.step,
          octave: value.octave,
          sourceKey: value.sourceKey ?? "",
        };
      }
    });
  } catch {
    localStorage.removeItem(customAssignmentStorageKey);
  }
}

function saveCustomAssignments() {
  localStorage.setItem(customAssignmentStorageKey, JSON.stringify(customKeyAssignments));
}

function loadUserPreferences() {
  try {
    return JSON.parse(localStorage.getItem(userPrefsStorageKey) ?? "{}");
  } catch {
    localStorage.removeItem(userPrefsStorageKey);
    return {};
  }
}

function saveUserPreferences() {
  localStorage.setItem(
    userPrefsStorageKey,
    JSON.stringify({
      instrument: els.instrument.value,
      root: els.root.value,
    }),
  );
}

function loadSavedTunes() {
  try {
    const saved = JSON.parse(localStorage.getItem(savedTunesStorageKey) ?? "[]");
    savedTunes = Array.isArray(saved) ? saved : [];
  } catch {
    localStorage.removeItem(savedTunesStorageKey);
    savedTunes = [];
  }
  let addedBuiltIn = false;
  builtInTunes.forEach((tune) => {
    const alreadySaved = savedTunes.some(
      (item) => item.id === tune.id || item.name.toLowerCase() === tune.name.toLowerCase(),
    );
    if (alreadySaved) return;
    savedTunes.push(tune);
    addedBuiltIn = true;
  });
  if (addedBuiltIn) persistSavedTunes();
}

function persistSavedTunes() {
  localStorage.setItem(savedTunesStorageKey, JSON.stringify(savedTunes));
}

function defaultLaneContext() {
  const savedPrefs = loadUserPreferences();
  return {
    raga: "Mohanam",
    instrument: instruments[savedPrefs.instrument] ? savedPrefs.instrument : "Veena",
    root: roots[savedPrefs.root] ? savedPrefs.root : "C",
    octaveShift: 0,
    pace: 360,
    hold: 190,
  };
}

function editorContext() {
  return {
    raga: ragas[els.raga.value] ? els.raga.value : "Mohanam",
    instrument: instruments[els.instrument.value] ? els.instrument.value : "Veena",
    root: roots[els.root.value] ? els.root.value : "C",
    octaveShift,
    pace: Math.max(60, Number(els.sequencePace.value) || 360),
    hold: Math.max(30, Number(els.sequenceHold.value) || 190),
  };
}

function normalizeScriptLane(lane = {}, index = 0) {
  const fallback = defaultLaneContext();
  return {
    id: lane.id || `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name: lane.name || `Script ${index + 1}`,
    script: lane.script || "",
    raga: ragas[lane.raga] ? lane.raga : fallback.raga,
    instrument: instruments[lane.instrument] ? lane.instrument : fallback.instrument,
    root: roots[lane.root] ? lane.root : fallback.root,
    octaveShift: Number.isInteger(lane.octaveShift) ? lane.octaveShift : fallback.octaveShift,
    pace: Math.max(60, Number(lane.pace) || fallback.pace),
    hold: Math.max(30, Number(lane.hold) || fallback.hold),
  };
}

function createScriptLane(name = `Script ${scriptLanes.length + 1}`, script = "", context = editorContext()) {
  return {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name,
    script,
    ...context,
  };
}

function loadScriptLanes() {
  try {
    const saved = JSON.parse(localStorage.getItem(scriptLanesStorageKey) ?? "[]");
    scriptLanes =
      Array.isArray(saved) && saved.length
        ? saved.map(normalizeScriptLane)
        : [createScriptLane("Script 1", els.sequenceInput.value)];
  } catch {
    localStorage.removeItem(scriptLanesStorageKey);
    scriptLanes = [createScriptLane("Script 1", els.sequenceInput.value)];
  }
  activeScriptLaneId = scriptLanes[0].id;
  applyLaneToEditor(scriptLanes[0]);
}

function saveScriptLanes() {
  localStorage.setItem(scriptLanesStorageKey, JSON.stringify(scriptLanes));
}

function loadTimelineItems() {
  try {
    const saved = JSON.parse(localStorage.getItem(timelineStorageKey) ?? "[]");
    timelineItems = Array.isArray(saved)
      ? saved.filter((item) => item?.id && item?.laneId).map((item) => {
          const laneIndex = scriptLanes.findIndex((lane) => lane.id === item.laneId);
          return {
            id: item.id,
            laneId: item.laneId,
            startMs: Math.max(0, Number(item.startMs) || 0),
            trackIndex: Math.max(0, Number.isInteger(item.trackIndex) ? item.trackIndex : laneIndex),
          };
        })
      : [];
  } catch {
    localStorage.removeItem(timelineStorageKey);
    timelineItems = [];
  }
}

function saveTimelineItems() {
  localStorage.setItem(timelineStorageKey, JSON.stringify(timelineItems));
}

function clampTimelineZoom(value) {
  return Math.max(timelineMinPxPerMs, Math.min(timelineMaxPxPerMs, Number(value) || timelineDefaultPxPerMs));
}

function loadTimelineZoom() {
  timelinePxPerMs = clampTimelineZoom(localStorage.getItem(timelineZoomStorageKey));
}

function saveTimelineZoom() {
  localStorage.setItem(timelineZoomStorageKey, String(timelinePxPerMs));
}

function activeScriptLane() {
  return scriptLanes.find((lane) => lane.id === activeScriptLaneId) ?? scriptLanes[0];
}

function syncActiveScriptLane() {
  const lane = activeScriptLane();
  if (!lane) return;
  lane.script = els.sequenceInput.value;
  Object.assign(lane, editorContext());
  saveScriptLanes();
  renderScriptCarousel();
  renderTimeline();
}

function applyLaneToEditor(lane) {
  if (!lane) return;
  const normalizedLane = normalizeScriptLane(lane);
  Object.assign(lane, normalizedLane);
  els.sequenceInput.value = lane.script;
  els.raga.value = lane.raga;
  els.instrument.value = lane.instrument;
  els.root.value = lane.root;
  octaveShift = lane.octaveShift;
  els.octave.textContent = octaveShift;
  els.sequencePace.value = lane.pace;
  els.sequenceHold.value = lane.hold;
  renderKeyboard();
  updateSequenceReadout();
}

function switchScriptLane(id) {
  syncActiveScriptLane();
  const lane = scriptLanes.find((item) => item.id === id);
  if (!lane) return;
  pendingDeleteScriptLaneId = "";
  activeScriptLaneId = id;
  applyLaneToEditor(lane);
  renderScriptCarousel();
}

function addScriptLane() {
  syncActiveScriptLane();
  pendingDeleteScriptLaneId = "";
  const lane = createScriptLane();
  scriptLanes.push(lane);
  activeScriptLaneId = lane.id;
  applyLaneToEditor(lane);
  saveScriptLanes();
  renderScriptCarousel();
  renderTimeline();
}

function deleteScriptLane(id = activeScriptLaneId) {
  if (scriptLanes.length <= 1) {
    pendingDeleteScriptLaneId = "";
    els.sequenceInput.value = "";
    syncActiveScriptLane();
    updateSequenceReadout();
    return;
  }
  const currentIndex = scriptLanes.findIndex((lane) => lane.id === id);
  if (currentIndex < 0) return;
  scriptLanes = scriptLanes.filter((lane) => lane.id !== id);
  timelineItems = timelineItems.filter((item) => item.laneId !== id);
  editingScriptLaneId = editingScriptLaneId === id ? "" : editingScriptLaneId;
  pendingDeleteScriptLaneId = pendingDeleteScriptLaneId === id ? "" : pendingDeleteScriptLaneId;
  if (activeScriptLaneId === id) {
    const nextLane = scriptLanes[Math.max(0, currentIndex - 1)] ?? scriptLanes[0];
    activeScriptLaneId = nextLane.id;
    applyLaneToEditor(nextLane);
  }
  saveScriptLanes();
  saveTimelineItems();
  renderScriptCarousel();
  renderTimeline();
}

function deleteActiveScriptLane() {
  deleteScriptLane(activeScriptLaneId);
}

function renameScriptLane(id, name) {
  const lane = scriptLanes.find((item) => item.id === id);
  const nextName = name.trim();
  if (!lane || !nextName) {
    editingScriptLaneId = "";
    renderScriptCarousel();
    return;
  }
  lane.name = nextName;
  editingScriptLaneId = "";
  saveScriptLanes();
  renderScriptCarousel();
}

function renderScriptCarousel() {
  els.scriptCarousel.innerHTML = "";
  scriptLanes.forEach((lane, index) => {
    const context = normalizeScriptLane(lane, index);
    const group = document.createElement("div");
    group.className = [
      "script-tab",
      lane.id === activeScriptLaneId ? "is-active" : "",
    ]
      .filter(Boolean)
      .join(" ");

    const selectButton = document.createElement("button");
    selectButton.className = "script-select";
    selectButton.type = "button";
    selectButton.innerHTML = `<strong>${context.name}</strong><span>${context.root} · ${context.instrument}</span>`;
    selectButton.title = context.script || "Empty script";
    selectButton.addEventListener("click", () => switchScriptLane(lane.id));
    selectButton.addEventListener("dblclick", (event) => {
      event.stopPropagation();
      editingScriptLaneId = lane.id;
      renderScriptCarousel();
      requestAnimationFrame(() => {
        const input = els.scriptCarousel.querySelector(`[data-rename-lane="${lane.id}"]`);
        input?.focus();
        input?.select();
      });
    });

    const renameInput = document.createElement("input");
    renameInput.className = "script-rename";
    renameInput.type = "text";
    renameInput.value = context.name;
    renameInput.dataset.renameLane = lane.id;
    renameInput.setAttribute("aria-label", `Rename ${context.name}`);
    renameInput.addEventListener("click", (event) => event.stopPropagation());
    renameInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        renameScriptLane(lane.id, renameInput.value);
      }
      if (event.key === "Escape") {
        editingScriptLaneId = "";
        renderScriptCarousel();
      }
    });
    renameInput.addEventListener("blur", () => renameScriptLane(lane.id, renameInput.value));

    const deleteControls = document.createElement("div");
    deleteControls.className = "script-delete-controls";
    if (pendingDeleteScriptLaneId === lane.id) {
      const confirmButton = document.createElement("button");
      confirmButton.className = "script-delete-confirm";
      confirmButton.type = "button";
      confirmButton.textContent = "✓";
      confirmButton.setAttribute("aria-label", `Confirm delete ${context.name}`);
      confirmButton.addEventListener("click", (event) => {
        event.stopPropagation();
        deleteScriptLane(lane.id);
      });

      const cancelButton = document.createElement("button");
      cancelButton.className = "script-delete-cancel";
      cancelButton.type = "button";
      cancelButton.textContent = "×";
      cancelButton.setAttribute("aria-label", `Cancel delete ${context.name}`);
      cancelButton.addEventListener("click", (event) => {
        event.stopPropagation();
        pendingDeleteScriptLaneId = "";
        renderScriptCarousel();
      });
      deleteControls.append(confirmButton, cancelButton);
    } else {
      const deleteButton = document.createElement("button");
      deleteButton.className = "script-delete";
      deleteButton.type = "button";
      deleteButton.textContent = "Del";
      deleteButton.setAttribute("aria-label", `Delete ${context.name}`);
      deleteButton.addEventListener("click", (event) => {
        event.stopPropagation();
        pendingDeleteScriptLaneId = lane.id;
        renderScriptCarousel();
      });
      deleteControls.append(deleteButton);
    }

    group.append(editingScriptLaneId === lane.id ? renameInput : selectButton, deleteControls);
    els.scriptCarousel.append(group);
  });
}

function timelineItemDuration(item) {
  const lane = scriptLanes.find((scriptLane) => scriptLane.id === item.laneId);
  if (!lane) return 800;
  const snapshot = lanePlaybackSnapshot(lane);
  if (!snapshot.events.length) return 800;
  const noteTime = snapshot.events.reduce((total, event) => total + event.pace, 0);
  const tail = Math.max(...snapshot.events.map((event) => event.hold), 0);
  return Math.max(700, noteTime + tail);
}

function timelineLengthMs() {
  const endMs = timelineItems.reduce(
    (max, item) => Math.max(max, item.startMs + timelineItemDuration(item)),
    8000,
  );
  return Math.ceil((endMs + 1000) / 1000) * 1000;
}

function formatTimelineTime(ms) {
  return `${(Math.max(0, ms) / 1000).toFixed(1)}s`;
}

function updateTimelineZoomUi() {
  const percent = Math.round((timelinePxPerMs / timelineDefaultPxPerMs) * 100);
  els.timelineZoom.textContent = `${percent}%`;
  els.timelineZoomOut.disabled = timelinePxPerMs <= timelineMinPxPerMs + 0.001;
  els.timelineZoomIn.disabled = timelinePxPerMs >= timelineMaxPxPerMs - 0.001;
}

function setTimelineZoom(nextScale) {
  const scroll = els.timelineScroll;
  const previousScale = timelinePxPerMs;
  const centerMs = scroll ? (scroll.scrollLeft + scroll.clientWidth / 2) / previousScale : timelinePlayheadMs;
  timelinePxPerMs = clampTimelineZoom(nextScale);
  saveTimelineZoom();
  renderTimeline();
  if (scroll) {
    scroll.scrollLeft = Math.max(0, Math.round(centerMs * timelinePxPerMs - scroll.clientWidth / 2));
  }
}

function updateTimelineTransport() {
  const length = timelineLengthMs();
  timelinePlayheadMs = Math.min(timelinePlayheadMs, length);
  els.timelineScrub.max = String(length);
  els.timelineScrub.value = String(Math.round(timelinePlayheadMs / timelineSnapMs) * timelineSnapMs);
  els.timelinePlayhead.style.left = `${Math.round(timelinePlayheadMs * timelinePxPerMs)}px`;
  els.timelineTime.textContent = formatTimelineTime(timelinePlayheadMs);
  els.playTimeline.textContent = timelinePlaying ? "Ⅱ" : "▶";
  els.playTimeline.setAttribute("aria-label", timelinePlaying ? "Pause timeline" : "Play timeline");
  els.playTimeline.classList.toggle("is-active", timelinePlaying);
  updateTimelineZoomUi();
}

function renderTimelineRuler(lengthMs) {
  const width = Math.max(800, Math.round(lengthMs * timelinePxPerMs));
  els.timelineRuler.innerHTML = "";
  els.timelineRuler.style.width = `${width}px`;
  for (let ms = 0; ms <= lengthMs; ms += 1000) {
    const tick = document.createElement("span");
    tick.className = "timeline-tick";
    tick.style.left = `${Math.round(ms * timelinePxPerMs)}px`;
    tick.textContent = `${ms / 1000}s`;
    els.timelineRuler.append(tick);
  }
}

function timelineVisibleTracks() {
  const tracks = [...new Set(timelineItems.map((item) => Number(item.trackIndex) || 0))].sort((a, b) => a - b);
  return tracks.length ? tracks : [0];
}

function renderTimeline() {
  const lengthMs = timelineLengthMs();
  const width = Math.max(800, Math.round(lengthMs * timelinePxPerMs));
  const visibleTracks = timelineVisibleTracks();
  const trackCount = visibleTracks.length;
  const trackHeight = trackCount * timelineTrackHeight + 12;
  const visibleTrackMap = new Map(visibleTracks.map((track, index) => [track, index]));
  renderTimelineRuler(lengthMs);
  els.timelineTrack.innerHTML = "";
  els.timelineTrack.style.width = `${width}px`;
  els.timelineTrack.style.height = `${trackHeight}px`;
  els.timelineScroll.style.setProperty("--timeline-track-count", String(trackCount));
  updateTimelineTransport();
  visibleTracks.forEach((track, index) => {
    const label = document.createElement("div");
    label.className = "timeline-track-label";
    label.style.top = `${index * timelineTrackHeight + 6}px`;
    label.textContent = scriptLanes[track] ? normalizeScriptLane(scriptLanes[track], track).name : `Layer ${track + 1}`;
    els.timelineTrack.append(label);
  });
  if (!timelineItems.length) {
    const empty = document.createElement("div");
    empty.className = "timeline-empty";
    empty.textContent = "Add scripts, then drag blocks to arrange overlaps";
    els.timelineTrack.append(empty);
    return;
  }

  timelineItems
    .slice()
    .sort((a, b) => a.startMs - b.startMs)
    .forEach((item) => {
      const lane = scriptLanes.find((scriptLane) => scriptLane.id === item.laneId);
      if (!lane) return;
      const context = normalizeScriptLane(lane);
      const duration = timelineItemDuration(item);
      const block = document.createElement("div");
      block.className = "timeline-item";
      block.dataset.timelineItem = item.id;
      block.style.left = `${Math.round(item.startMs * timelinePxPerMs)}px`;
      block.style.top = `${10 + (visibleTrackMap.get(Number(item.trackIndex) || 0) ?? 0) * timelineTrackHeight}px`;
      block.style.width = `${Math.max(120, Math.round(duration * timelinePxPerMs))}px`;
      block.innerHTML = `
        <div>
          <strong>${context.name}</strong>
          <span>${(item.startMs / 1000).toFixed(1)}s · ${(duration / 1000).toFixed(1)}s</span>
        </div>
      `;

      const deleteButton = document.createElement("button");
      deleteButton.className = "timeline-delete";
      deleteButton.type = "button";
      deleteButton.textContent = "×";
      deleteButton.setAttribute("aria-label", `Remove ${context.name} from timeline`);
      deleteButton.addEventListener("click", (event) => {
        event.stopPropagation();
        deleteTimelineItem(item.id);
      });

      block.append(deleteButton);
      block.addEventListener("click", () => switchScriptLane(item.laneId));
      block.addEventListener("pointerdown", (event) => startTimelineDrag(event, item.id));
      els.timelineTrack.append(block);
    });
}

function addTimelineItem() {
  syncActiveScriptLane();
  const lane = activeScriptLane();
  if (!lane) return;
  const laneIndex = Math.max(0, scriptLanes.findIndex((item) => item.id === lane.id));
  const endMs = timelineItems.reduce(
    (max, item) => Math.max(max, item.startMs + timelineItemDuration(item)),
    0,
  );
  timelineItems.push({
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    laneId: lane.id,
    startMs: Math.max(0, Math.round(endMs / timelineSnapMs) * timelineSnapMs),
    trackIndex: laneIndex,
  });
  saveTimelineItems();
  renderTimeline();
}

function deleteTimelineItem(id) {
  timelineItems = timelineItems.filter((item) => item.id !== id);
  saveTimelineItems();
  renderTimeline();
}

function clearTimeline() {
  stopSequence(false);
  timelineItems = [];
  timelinePlayheadMs = 0;
  saveTimelineItems();
  renderTimeline();
  els.nowPlaying.textContent = "Timeline cleared";
}

function startTimelineDrag(event, id) {
  if (event.target.closest("button")) return;
  const item = timelineItems.find((timelineItem) => timelineItem.id === id);
  if (!item) return;
  event.preventDefault();
  event.currentTarget.setPointerCapture(event.pointerId);
  timelineDrag = {
    id,
    pointerId: event.pointerId,
    startX: event.clientX,
    startY: event.clientY,
    originalStartMs: item.startMs,
    originalTrackIndex: Number(item.trackIndex) || 0,
  };
}

function updateTimelineDrag(event) {
  if (!timelineDrag) return;
  const item = timelineItems.find((timelineItem) => timelineItem.id === timelineDrag.id);
  if (!item) return;
  const deltaMs = (event.clientX - timelineDrag.startX) / timelinePxPerMs;
  const deltaTracks = Math.round((event.clientY - timelineDrag.startY) / timelineTrackHeight);
  const visibleTracks = timelineVisibleTracks();
  const originalVisibleIndex = Math.max(0, visibleTracks.indexOf(timelineDrag.originalTrackIndex));
  const nextVisibleIndex = Math.max(0, originalVisibleIndex + deltaTracks);
  item.startMs = Math.max(0, Math.round((timelineDrag.originalStartMs + deltaMs) / timelineSnapMs) * timelineSnapMs);
  item.trackIndex = visibleTracks[nextVisibleIndex] ?? Math.max(0, ...visibleTracks) + (nextVisibleIndex - visibleTracks.length + 1);
  renderTimeline();
}

function endTimelineDrag() {
  if (!timelineDrag) return;
  timelineDrag = null;
  saveTimelineItems();
  renderTimeline();
}

function saveCurrentTune() {
  syncActiveScriptLane();
  const script = els.sequenceInput.value.trim();
  if (!script) {
    els.nowPlaying.textContent = "No script to save";
    return;
  }
  const name = els.tuneName.value.trim() || `Tune ${savedTunes.length + 1}`;
  const tune = {
    id: `${Date.now()}`,
    name,
    script,
    ...editorContext(),
    createdAt: new Date().toISOString(),
  };
  const existingIndex = savedTunes.findIndex((item) => item.name.toLowerCase() === name.toLowerCase());
  if (existingIndex >= 0) {
    savedTunes[existingIndex] = { ...savedTunes[existingIndex], ...tune, id: savedTunes[existingIndex].id };
  } else {
    savedTunes.unshift(tune);
  }
  persistSavedTunes();
  renderSavedTunes();
  els.tuneName.value = "";
  els.nowPlaying.textContent = `Saved ${name}`;
}

function loadTune(id) {
  const tune = savedTunes.find((item) => item.id === id);
  if (!tune) return;
  syncActiveScriptLane();
  const lane = activeScriptLane();
  lane.script = tune.script;
  if (ragas[tune.raga]) lane.raga = tune.raga;
  if (roots[tune.root]) lane.root = tune.root;
  if (instruments[tune.instrument]) lane.instrument = tune.instrument;
  if (Number.isInteger(tune.octaveShift)) lane.octaveShift = tune.octaveShift;
  lane.pace = Math.max(60, Number(tune.pace) || lane.pace || 360);
  lane.hold = Math.max(30, Number(tune.hold) || lane.hold || 190);
  applyLaneToEditor(lane);
  saveScriptLanes();
  renderScriptCarousel();
  saveUserPreferences();
  els.nowPlaying.textContent = `Loaded ${tune.name}`;
}

function editTune(id) {
  const tune = savedTunes.find((item) => item.id === id);
  if (!tune) return;
  pendingDeleteTuneId = "";
  loadTune(id);
  els.tuneName.value = tune.name;
  els.tuneName.focus();
  els.nowPlaying.textContent = `Editing ${tune.name}`;
}

function deleteTune(id) {
  const tune = savedTunes.find((item) => item.id === id);
  savedTunes = savedTunes.filter((item) => item.id !== id);
  persistSavedTunes();
  renderSavedTunes();
  els.nowPlaying.textContent = tune ? `Deleted ${tune.name}` : "Tune deleted";
}

function requestDeleteTune(id) {
  pendingDeleteTuneId = id;
  renderSavedTunes();
}

function cancelDeleteTune() {
  pendingDeleteTuneId = "";
  renderSavedTunes();
}

function setSidebarCollapsed(collapsed) {
  document.body.classList.toggle("sidebar-collapsed", collapsed);
  els.sidebar?.classList.toggle("is-collapsed", collapsed);
  if (els.sidebarToggle) {
    els.sidebarToggle.textContent = collapsed ? "›" : "‹";
    els.sidebarToggle.setAttribute("aria-expanded", String(!collapsed));
    els.sidebarToggle.setAttribute(
      "aria-label",
      collapsed ? "Expand saved tunes" : "Collapse saved tunes",
    );
  }
  localStorage.setItem(sidebarCollapsedStorageKey, String(collapsed));
}

function loadSidebarState() {
  setSidebarCollapsed(localStorage.getItem(sidebarCollapsedStorageKey) === "true");
}

function toggleSidebar() {
  setSidebarCollapsed(!document.body.classList.contains("sidebar-collapsed"));
}

function setWorkspaceView(view) {
  const canvasMode = view === "canvas";
  document.body.classList.toggle("canvas-view", canvasMode);
  document.body.classList.toggle("keys-view", !canvasMode);
  els.canvasView.classList.toggle("is-active", canvasMode);
  els.keysView.classList.toggle("is-active", !canvasMode);
  els.canvasView.setAttribute("aria-pressed", String(canvasMode));
  els.keysView.setAttribute("aria-pressed", String(!canvasMode));
  localStorage.setItem(workspaceViewStorageKey, canvasMode ? "canvas" : "keys");
  renderTimeline();
}

function loadWorkspaceView() {
  setWorkspaceView(localStorage.getItem(workspaceViewStorageKey) === "canvas" ? "canvas" : "keys");
}

function renderSavedTunes() {
  els.savedTunes.innerHTML = "";
  if (!savedTunes.length) {
    const empty = document.createElement("span");
    empty.className = "saved-empty";
    empty.textContent = "No saved tunes";
    els.savedTunes.append(empty);
    return;
  }
  savedTunes.forEach((tune) => {
    const isConfirmingDelete = pendingDeleteTuneId === tune.id;
    const group = document.createElement("div");
    group.className = `saved-tune${isConfirmingDelete ? " is-confirming-delete" : ""}`;

    const loadButton = document.createElement("button");
    loadButton.type = "button";
    loadButton.textContent = tune.name;
    loadButton.title = tune.script;
    loadButton.addEventListener("click", () => {
      pendingDeleteTuneId = "";
      loadTune(tune.id);
      renderSavedTunes();
    });

    const editButton = document.createElement("button");
    editButton.type = "button";
    editButton.textContent = isConfirmingDelete ? "✓" : "Edit";
    editButton.setAttribute("aria-label", isConfirmingDelete ? `Confirm delete ${tune.name}` : `Edit ${tune.name}`);
    editButton.addEventListener("click", () => {
      if (isConfirmingDelete) {
        deleteTune(tune.id);
      } else {
        editTune(tune.id);
      }
    });

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = isConfirmingDelete ? "×" : "Del";
    deleteButton.setAttribute("aria-label", isConfirmingDelete ? "Cancel delete" : `Delete ${tune.name}`);
    deleteButton.addEventListener("click", () => {
      if (isConfirmingDelete) {
        cancelDeleteTune();
      } else {
        requestDeleteTune(tune.id);
      }
    });

    group.append(loadButton, editButton, deleteButton);
    els.savedTunes.append(group);
  });
}

function degreeForKey(row, index, modifiers = {}) {
  const key = keyRows[row]?.[index];
  if (assignableKeys.has(key)) {
    const assignment = customKeyAssignments[key];
    return assignment ? { step: assignment.step, octave: assignment.octave } : null;
  }
  const absoluteStep = rowSteps[index] ?? 0;
  let step = absoluteStep % 12;
  const octave = rowOctaves[row] + Math.floor(absoluteStep / 12);
  if (modifiers.shiftKey && komalSteps[step] !== undefined) {
    step = komalSteps[step];
  }
  if (modifiers.altKey && step === 5) {
    step = 6;
  }
  return { step, octave };
}

function degreeForRagaIndex(index, context = editorContext()) {
  const scale = ragas[context.raga] ?? ragas.Mohanam;
  const octave = Math.floor(index / scale.length);
  const step = scale[index % scale.length];
  return { step, octave };
}

function frequencyForStep(step, octave = 0, context = editorContext()) {
  const root = roots[context.root] ?? roots.C;
  return root * 2 ** ((step + (octave + context.octaveShift) * 12) / 12);
}

function swaraForStep(step) {
  const normalizedStep = ((step % 12) + 12) % 12;
  return swaras.find((swara) => swara.step === normalizedStep) ?? swaras[0];
}

function noteLabel(step, octave = 0, context = editorContext()) {
  const swara = swaraForStep(step);
  const totalOctave = octave + context.octaveShift;
  const marks = totalOctave > 0 ? "'".repeat(totalOctave) : "";
  const lowMarks = totalOctave < 0 ? ",".repeat(Math.abs(totalOctave)) : "";
  return `${swara.notation}${marks}${lowMarks}`;
}

function modifierHint(step) {
  const hints = [];
  if (komalSteps[step] !== undefined) hints.push(`Shift ${swaraForStep(komalSteps[step]).notation}`);
  if (step === 5) hints.push("Alt/Opt M");
  return hints.join(" / ");
}

function reachableSteps(step) {
  const steps = [step];
  if (komalSteps[step] !== undefined) steps.push(komalSteps[step]);
  if (step === 5) steps.push(6);
  return steps;
}

function createKey(key, row, index) {
  if (assignableKeys.has(key)) return createAssignableKey(key, row);
  const { step, octave } = degreeForKey(row, index);
  const scale = ragas[els.raga.value];
  const swara = swaraForStep(step);
  const hint = modifierHint(step);
  const button = document.createElement("button");
  button.className = [
    "key",
    reachableSteps(step).some((reachableStep) => scale.includes(reachableStep)) ? "in-raga" : "",
  ]
    .filter(Boolean)
    .join(" ");
  button.type = "button";
  button.dataset.key = key;
  button.dataset.row = row;
  button.dataset.index = String(index);
  button.title = `${swara.note} - ${swara.fullName}`;
  button.innerHTML = `<kbd>${key}</kbd><strong>${noteLabel(step, octave)}</strong><span class="western-note">${westernNoteLabel(step, octave)}</span><span>${swara.note}</span><small>${hint || swara.fullName}</small>`;
  button.addEventListener("pointerdown", (event) => {
    if (assignFromKey(key, row, index, event)) return;
    playNote(key, row, index, event);
  });
  button.addEventListener("pointerup", () => releaseMomentaryNote(key));
  button.addEventListener("pointerleave", () => releaseMomentaryNote(key));
  button.addEventListener("dblclick", () => toggleLockedNote(key, row, index));
  return button;
}

function createAssignableKey(key, row) {
  const assignment = customKeyAssignments[key];
  const swara = assignment ? swaraForStep(assignment.step) : null;
  const isPending = pendingAssignmentKey === key;
  const button = document.createElement("div");
  button.className = [
    "key",
    "is-assignable",
    isPending ? "is-listening" : "",
    swara?.variant ? `is-${swara.variant}` : "",
  ]
    .filter(Boolean)
    .join(" ");
  button.setAttribute("role", "button");
  button.tabIndex = 0;
  button.dataset.key = key;
  button.dataset.row = row;
  button.title = swara ? `${swara.note} - ${swara.fullName}` : "Assignable key slot";
  button.innerHTML = `<kbd>${key}</kbd><strong>${assignment ? noteLabel(assignment.step, assignment.octave) : "-"}</strong><span class="western-note">${assignment ? westernNoteLabel(assignment.step, assignment.octave) : "-"}</span><span>${isPending ? "Click source key" : swara?.note ?? "Empty"}</span>`;

  const setButton = document.createElement("button");
  setButton.className = "set-key";
  setButton.type = "button";
  setButton.textContent = isPending ? "Listening" : "Set";
  setButton.addEventListener("pointerdown", (event) => event.stopPropagation());
  setButton.addEventListener("click", (event) => {
    event.stopPropagation();
    startAssignment(key);
  });

  button.append(setButton);
  button.addEventListener("pointerdown", () => playAssignedKey(key, row));
  button.addEventListener("pointerup", () => releaseMomentaryNote(key));
  button.addEventListener("pointerleave", () => releaseMomentaryNote(key));
  button.addEventListener("dblclick", () => toggleLockedAssignedKey(key, row));
  button.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      playAssignedKey(key, row);
    }
  });
  button.addEventListener("keyup", () => releaseMomentaryNote(key));
  return button;
}

function startAssignment(key) {
  pendingAssignmentKey = pendingAssignmentKey === key ? "" : key;
  els.nowPlaying.textContent = pendingAssignmentKey ? `Set ${pendingAssignmentKey}: choose source key` : "Ready";
  renderKeyboard();
}

function assignFromKey(sourceKey, row, index, modifiers = {}) {
  if (!pendingAssignmentKey || sourceKey === pendingAssignmentKey) return false;
  const degree = degreeForKey(row, index, modifiers);
  if (!degree) return false;
  customKeyAssignments[pendingAssignmentKey] = {
    ...degree,
    sourceKey,
  };
  saveCustomAssignments();
  els.nowPlaying.textContent = `${pendingAssignmentKey} copied ${sourceKey}`;
  pendingAssignmentKey = "";
  renderKeyboard();
  updateSequenceReadout();
  return true;
}

function renderKeyboard() {
  Object.entries(keyRows).forEach(([row, keys]) => {
    els[`${row}Keys`].innerHTML = "";
    keys.forEach((key, index) => {
      els[`${row}Keys`].append(createKey(key, row, index));
    });
  });
}

function playNote(key, row, index, modifiers = {}) {
  ensureAudio();
  if (lockedNotes.has(key)) {
    stopNote(key);
    return;
  }
  if (activeNotes.has(key)) return;
  const degree = degreeForKey(row, index, modifiers);
  if (!degree) return;
  const { step, octave } = degree;
  const context = editorContext();
  playTone(key, frequencyForStep(step, octave, context), noteLabel(step, octave, context), key, context.instrument);
}

function playAssignedKey(key, row) {
  ensureAudio();
  if (lockedNotes.has(key)) {
    stopNote(key);
    return;
  }
  if (activeNotes.has(key)) return;
  const assignment = customKeyAssignments[key];
  if (!assignment) return;
  const context = editorContext();
  playTone(
    key,
    frequencyForStep(assignment.step, assignment.octave, context),
    noteLabel(assignment.step, assignment.octave, context),
    key,
    context.instrument,
  );
}

function toggleLockedNote(key, row, index) {
  if (lockedNotes.has(key)) {
    stopNote(key);
    return;
  }
  const degree = degreeForKey(row, index);
  if (!degree) return;
  lockedNotes.add(key);
  if (!activeNotes.has(key)) {
    const context = editorContext();
    playTone(
      key,
      frequencyForStep(degree.step, degree.octave, context),
      noteLabel(degree.step, degree.octave, context),
      key,
      context.instrument,
    );
  }
}

function toggleLockedAssignedKey(key, row) {
  if (lockedNotes.has(key)) {
    stopNote(key);
    return;
  }
  const assignment = customKeyAssignments[key];
  if (!assignment) return;
  lockedNotes.add(key);
  if (!activeNotes.has(key)) {
    const context = editorContext();
    playTone(
      key,
      frequencyForStep(assignment.step, assignment.octave, context),
      noteLabel(assignment.step, assignment.octave, context),
      key,
      context.instrument,
    );
  }
}

function playTone(key, freq, label, visualKey = key, instrumentName = els.instrument.value) {
  const patch = instruments[instrumentName] ?? instruments.Veena;
  if (patch.kind === "drum") {
    return playDrumTone(key, freq, label, visualKey, instrumentName, patch);
  }
  const now = audioCtx.currentTime;
  const noteId = Symbol(key);
  const gain = audioCtx.createGain();
  const filter = audioCtx.createBiquadFilter();
  const osc = audioCtx.createOscillator();
  const shimmer = audioCtx.createOscillator();
  const shimmerGain = audioCtx.createGain();

  osc.type = patch.wave;
  shimmer.type = "sine";
  osc.frequency.value = freq;
  shimmer.frequency.value = freq * 2.01;
  shimmerGain.gain.value = 0.08;
  filter.type = "lowpass";
  filter.frequency.value = patch.filter;
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.46, now + patch.attack);

  if (patch.bend) {
    osc.frequency.setValueAtTime(freq * 2 ** (-patch.bend / 1200), now);
    osc.frequency.exponentialRampToValueAtTime(freq, now + 0.16);
  }

  osc.connect(filter);
  shimmer.connect(shimmerGain);
  shimmerGain.connect(filter);
  filter.connect(gain);
  gain.connect(master);
  osc.start(now);
  shimmer.start(now);
  activeNotes.set(key, { id: noteId, osc, shimmer, gain, release: patch.release, visualKey });
  document.querySelector(`[data-key="${visualKey}"]`)?.classList.add("is-playing");
  els.nowPlaying.textContent = `${instrumentName} ${label}`;
  return noteId;
}

function playDrumTone(key, freq, label, visualKey, instrumentName, patch) {
  const now = audioCtx.currentTime;
  const noteId = Symbol(key);
  const body = audioCtx.createOscillator();
  const bodyGain = audioCtx.createGain();
  const ring = audioCtx.createOscillator();
  const ringGain = audioCtx.createGain();
  const noiseBuffer = audioCtx.createBuffer(1, audioCtx.sampleRate * 0.06, audioCtx.sampleRate);
  const noiseData = noiseBuffer.getChannelData(0);
  const noise = audioCtx.createBufferSource();
  const noiseGain = audioCtx.createGain();
  const noiseFilter = audioCtx.createBiquadFilter();
  const pitchRatio = Math.max(0.72, Math.min(1.85, freq / roots.C));
  const bodyFreq = patch.body * pitchRatio;

  for (let i = 0; i < noiseData.length; i += 1) {
    noiseData[i] = Math.random() * 2 - 1;
  }

  body.type = "sine";
  body.frequency.setValueAtTime(bodyFreq * 1.42, now);
  body.frequency.exponentialRampToValueAtTime(bodyFreq, now + patch.snap);
  bodyGain.gain.setValueAtTime(patch.tone, now);
  bodyGain.gain.exponentialRampToValueAtTime(0.0001, now + patch.release);

  ring.type = "triangle";
  ring.frequency.value = bodyFreq * 1.98;
  ringGain.gain.setValueAtTime(patch.tone * 0.34, now);
  ringGain.gain.exponentialRampToValueAtTime(0.0001, now + patch.release * 0.7);

  noise.buffer = noiseBuffer;
  noiseFilter.type = "bandpass";
  noiseFilter.frequency.value = 1800 + bodyFreq * 4;
  noiseFilter.Q.value = 1.8;
  noiseGain.gain.setValueAtTime(patch.noise, now);
  noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);

  body.connect(bodyGain);
  ring.connect(ringGain);
  noise.connect(noiseFilter);
  noiseFilter.connect(noiseGain);
  bodyGain.connect(master);
  ringGain.connect(master);
  noiseGain.connect(master);
  body.start(now);
  ring.start(now);
  noise.start(now);

  const release = patch.release;
  activeNotes.set(key, {
    id: noteId,
    osc: body,
    shimmer: ring,
    gain: bodyGain,
    release: 0.04,
    visualKey,
    percussive: true,
  });
  document.querySelector(`[data-key="${visualKey}"]`)?.classList.add("is-playing");
  els.nowPlaying.textContent = `${instrumentName} ${label}`;
  setTimeout(() => {
    lockedNotes.delete(key);
    releaseSpecificMomentaryNote(key, noteId);
  }, release * 1000);
  return noteId;
}

function keyFromEvent(event) {
  const codeKeys = {
    BracketLeft: "{",
    BracketRight: "}",
    Backslash: "\\",
    Semicolon: ":",
    Quote: "'",
    Comma: ",",
    Period: ".",
    Slash: "/",
  };
  if (codeKeys[event.code]) return codeKeys[event.code];
  if (event.code?.startsWith("Key")) return event.code.slice(3);
  return event.key.toUpperCase();
}

function keyPosition(key) {
  const rowEntry = Object.entries(keyRows).find(([, keys]) => keys.includes(key));
  if (!rowEntry) return null;
  const [row, keys] = rowEntry;
  return { row, index: keys.indexOf(key) };
}

function normalizeScriptKey(value) {
  const aliases = {
    "[": "{",
    "]": "}",
    ";": ":",
    comma: ",",
    period: ".",
    dot: ".",
    slash: "/",
    backslash: "\\",
    quote: "'",
    apostrophe: "'",
  };
  const trimmed = value.trim();
  if (!trimmed) return "";
  const lower = trimmed.toLowerCase();
  if (aliases[lower]) return aliases[lower];
  if (trimmed.length === 1 && /[a-z]/i.test(trimmed)) return trimmed.toUpperCase();
  return trimmed;
}

function parseSequenceToken(rawToken, defaults) {
  let token = rawToken.trim();
  if (!token) return [];

  let repeat = 1;
  let [keyPart, timingPart = ""] = token.split("@");
  const repeatMatch = keyPart.match(/\*(\d+)$/);
  if (repeatMatch) {
    repeat = Math.max(1, Number(repeatMatch[1]));
    keyPart = keyPart.slice(0, -repeatMatch[0].length);
  }
  const [pacePart = "", holdPart = ""] = timingPart.split("/");
  const pace = Number(pacePart) || defaults.pace;
  const hold = Number(holdPart) || defaults.hold;
  const normalizedKeyPart = keyPart.trim();
  const rest = ["-", "_", "rest"].includes(normalizedKeyPart.toLowerCase());

  if (rest) {
    return Array.from({ length: repeat }, () => ({ rest: true, pace, hold }));
  }

  const parts = normalizedKeyPart.split("+").map((part) => part.trim()).filter(Boolean);
  const key = normalizeScriptKey(parts.pop() ?? "");
  const modifiers = parts.reduce(
    (acc, part) => {
      const lower = part.toLowerCase();
      if (["shift", "s"].includes(lower)) acc.shiftKey = true;
      if (["alt", "opt", "option"].includes(lower)) acc.altKey = true;
      return acc;
    },
    { shiftKey: false, altKey: false },
  );

  if (!keyPosition(key)) return [];
  return Array.from({ length: repeat }, () => ({ key, modifiers, pace, hold, rest: false }));
}

function sequenceDefaults(context = editorContext()) {
  return {
    pace: Math.max(60, Number(context.pace) || 360),
    hold: Math.max(30, Number(context.hold) || 190),
  };
}

function parseSequence(script = els.sequenceInput.value, context = editorContext()) {
  const defaults = sequenceDefaults(context);
  return script
    .split(/\s+/)
    .flatMap((token) => parseSequenceToken(token, defaults));
}

function lanePlaybackSnapshot(lane) {
  const context = normalizeScriptLane(lane);
  return {
    laneId: context.id,
    name: context.name,
    context,
    events: parseSequence(context.script, context),
  };
}

function updateActiveLaneTiming() {
  const lane = activeScriptLane();
  if (!lane) return;
  lane.pace = Math.max(60, Number(els.sequencePace.value) || 360);
  lane.hold = Math.max(30, Number(els.sequenceHold.value) || 190);
  saveScriptLanes();
  updateSequenceReadout();
  renderTimeline();
}

function westernNoteLabel(step, octave = 0, context = editorContext()) {
  const rootIndex = Object.keys(roots).indexOf(context.root);
  const absoluteStep = (rootIndex >= 0 ? rootIndex : 0) + step;
  const note = westernFlatNotes[((absoluteStep % 12) + 12) % 12];
  const octaveMarks = octave + Math.floor(absoluteStep / 12) + context.octaveShift;
  if (octaveMarks > 0) return `${note}${"'".repeat(octaveMarks)}`;
  if (octaveMarks < 0) return `${note}${",".repeat(Math.abs(octaveMarks))}`;
  return note;
}

function sequenceEventDegree(event) {
  if (event.rest) return null;
  const position = keyPosition(event.key);
  return position ? degreeForKey(position.row, position.index, event.modifiers) : null;
}

function scriptTokenFromKey(key, modifiers = {}) {
  const prefixes = [];
  if (modifiers.shiftKey) prefixes.push("Shift");
  if (modifiers.altKey) prefixes.push("Alt");
  return [...prefixes, key].join("+");
}

function playableDegreeCandidates() {
  const candidates = [];
  const seen = new Set();
  Object.entries(keyRows).forEach(([row, keys]) => {
    keys.forEach((key, index) => {
      const modifierSets = assignableKeys.has(key)
        ? [{}]
        : [{}, { shiftKey: true }, { altKey: true }];
      modifierSets.forEach((modifiers) => {
        const degree = degreeForKey(row, index, modifiers);
        if (!degree) return;
        const token = scriptTokenFromKey(key, modifiers);
        const candidateKey = `${degree.step}:${degree.octave}:${token}`;
        if (seen.has(candidateKey)) return;
        seen.add(candidateKey);
        candidates.push({ ...degree, token });
      });
    });
  });
  return candidates;
}

function scriptTokenForDegree(step, displayOctave, context = editorContext()) {
  const degreeOctave = displayOctave - context.octaveShift;
  const exact = playableDegreeCandidates().find(
    (candidate) => candidate.step === step && candidate.octave === degreeOctave,
  );
  return exact?.token ?? "-";
}

function parseOctaveMarks(marks = "") {
  return [...marks].reduce((total, mark) => {
    if (mark === "'") return total + 1;
    if (mark === ",") return total - 1;
    return total;
  }, 0);
}

function scriptFromSwaraNotation(value, context = editorContext()) {
  return value
    .split(/\s+/)
    .map((rawToken) => {
      const token = rawToken.trim();
      if (!token) return "";
      if (["-", "_", "rest"].includes(token.toLowerCase())) return "-";
      const match = token.match(/^([SrgGmMPdDnN])([',]*)$/);
      if (!match) return "-";
      const swara = swaras.find((item) => item.notation === match[1]);
      if (!swara) return "-";
      return scriptTokenForDegree(swara.step, parseOctaveMarks(match[2]), context);
    })
    .filter(Boolean)
    .join(" ");
}

function scriptFromWesternNotation(value, context = editorContext()) {
  return value
    .split(/\s+/)
    .map((rawToken) => {
      const token = rawToken.trim();
      if (!token) return "";
      if (["-", "_", "rest"].includes(token.toLowerCase())) return "-";
      const match = token.match(/^([A-Ga-g])([#b]?)([',]*)$/);
      if (!match) return "-";
      const letter = match[1].toUpperCase();
      const accidental = match[2];
      const noteMap = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
      const noteIndex = (noteMap[letter] + (accidental === "#" ? 1 : accidental === "b" ? -1 : 0) + 12) % 12;
      const normalized = `${westernFlatNotes[noteIndex]}${match[3]}`;
      const candidates = playableDegreeCandidates();
      const candidate = candidates.find(
        (item) => westernNoteLabel(item.step, item.octave, context) === normalized,
      ) ?? candidates.find((item) => westernNoteLabel(item.step, item.octave, context).replace(/[',]/g, "") === westernFlatNotes[noteIndex]);
      return candidate?.token ?? "-";
    })
    .filter(Boolean)
    .join(" ");
}

function setSequenceScript(script, shouldRenderTabs = true) {
  els.sequenceInput.value = script;
  const lane = activeScriptLane();
  if (lane) {
    lane.script = script;
    saveScriptLanes();
    if (shouldRenderTabs) renderScriptCarousel();
    renderTimeline();
  }
}

function updateSequenceReadout(source = "") {
  const events = parseSequence();
  const context = editorContext();
  if (syncingNotation) return;
  syncingNotation = true;
  if (!events.length) {
    if (source !== "western") els.westernInput.value = "";
    if (source !== "swara") els.swaraInput.value = "";
    syncingNotation = false;
    return;
  }

  const western = [];
  const swarasLine = [];
  events.forEach((event) => {
    if (event.rest) {
      western.push("-");
      swarasLine.push("-");
      return;
    }
    const degree = sequenceEventDegree(event);
    if (!degree) return;
    western.push(westernNoteLabel(degree.step, degree.octave, context));
    swarasLine.push(noteLabel(degree.step, degree.octave, context));
  });

  if (source !== "western") els.westernInput.value = western.join(" ");
  if (source !== "swara") els.swaraInput.value = swarasLine.join(" ");
  syncingNotation = false;
}

function sequenceTokenFromEvent(event) {
  const key = keyFromEvent(event);
  const position = keyPosition(key);
  if (!position) return "";

  const baseDegree = degreeForKey(position.row, position.index);
  const modifiedDegree = degreeForKey(position.row, position.index, event);
  if (!modifiedDegree) return "";

  const prefixes = [];
  if (event.shiftKey && baseDegree?.step !== modifiedDegree.step) prefixes.push("Shift");
  if (event.altKey && baseDegree?.step !== modifiedDegree.step) prefixes.push("Alt");
  return [...prefixes, key].join("+");
}

function insertSequenceToken(token) {
  const input = els.sequenceInput;
  const start = input.selectionStart;
  const end = input.selectionEnd;
  const before = input.value.slice(0, start);
  const after = input.value.slice(end);
  const prefix = before && !/\s$/.test(before) ? " " : "";
  const text = `${prefix}${token} `;
  input.value = `${before}${text}${after}`;
  const cursor = before.length + text.length;
  input.setSelectionRange(cursor, cursor);
  setSequenceScript(input.value);
  updateSequenceReadout();
}

function handleNotationInput(type) {
  if (syncingNotation) return;
  const context = editorContext();
  const script =
    type === "western"
      ? scriptFromWesternNotation(els.westernInput.value, context)
      : scriptFromSwaraNotation(els.swaraInput.value, context);
  syncingNotation = true;
  setSequenceScript(script);
  syncingNotation = false;
  updateSequenceReadout(type);
}

function handleSequenceTyping(event) {
  if (["Shift", "Alt", "Meta", "Control"].includes(event.key)) return;
  if (
    event.metaKey ||
    event.ctrlKey ||
    ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Enter", "Tab"].includes(
      event.key,
    )
  ) {
    return;
  }
  const token = sequenceTokenFromEvent(event);
  if (!token) return;
  event.preventDefault();
  insertSequenceToken(token);
}

function playSequence() {
  syncActiveScriptLane();
  const lane = activeScriptLane();
  const snapshot = lane ? lanePlaybackSnapshot(lane) : null;
  stopSequence();
  if (!snapshot?.events.length) {
    els.nowPlaying.textContent = "Selected script empty";
    return;
  }
  sequencePlaying = true;
  sequenceRunningLanes = new Set([snapshot.laneId]);
  els.playSequence.classList.add("is-active");
  els.playSequence.textContent = "Pause";
  els.nowPlaying.textContent = `Playing ${snapshot.name}`;
  runSequenceStep(snapshot, 0);
}

function timelineScheduledEvents(startOffsetMs = timelinePlayheadMs) {
  const events = [];
  timelineItems.forEach((item) => {
    const lane = scriptLanes.find((scriptLane) => scriptLane.id === item.laneId);
    if (!lane) return;
    const snapshot = lanePlaybackSnapshot(lane);
    let elapsed = 0;
    snapshot.events.forEach((event, index) => {
      const absoluteMs = item.startMs + elapsed;
      const remainingHold = Math.max(0, event.hold - Math.max(0, startOffsetMs - absoluteMs));
      if (!event.rest && absoluteMs + event.hold >= startOffsetMs) {
        events.push({
          event: { ...event, hold: remainingHold || event.hold },
          laneId: `${item.id}:${index}`,
          index,
          context: snapshot.context,
          atMs: Math.max(0, absoluteMs - startOffsetMs),
        });
      }
      elapsed += event.pace;
    });
  });
  return events.sort((a, b) => a.atMs - b.atMs);
}

function startTimelineClock(startOffsetMs) {
  timelineStartedAt = Date.now();
  timelineStartOffsetMs = startOffsetMs;
  clearInterval(timelineClockTimer);
  timelineClockTimer = setInterval(() => {
    timelinePlayheadMs = Math.min(timelineLengthMs(), timelineStartOffsetMs + Date.now() - timelineStartedAt);
    updateTimelineTransport();
  }, 80);
}

function playTimeline() {
  syncActiveScriptLane();
  const events = timelineScheduledEvents(timelinePlayheadMs);
  stopSequence();
  if (!events.length) {
    els.nowPlaying.textContent = "Timeline empty";
    return;
  }
  sequencePlaying = true;
  timelinePlaying = true;
  sequenceRunningLanes = new Set(["timeline"]);
  els.playTimeline.classList.add("is-active");
  els.playSequence.textContent = "Pause";
  els.nowPlaying.textContent = `Playing timeline from ${formatTimelineTime(timelinePlayheadMs)}`;
  startTimelineClock(timelinePlayheadMs);
  updateTimelineTransport();
  events.forEach((scheduled) => {
    const timer = setTimeout(() => {
      sequenceTimers = sequenceTimers.filter((item) => item !== timer);
      playSequenceEvent(scheduled.event, scheduled.laneId, scheduled.index, scheduled.context);
    }, scheduled.atMs);
    sequenceTimers.push(timer);
  });
  const doneTimer = setTimeout(() => {
    sequenceTimers = sequenceTimers.filter((item) => item !== doneTimer);
    stopSequence(false);
    timelinePlayheadMs = timelineLengthMs();
    updateTimelineTransport();
    els.nowPlaying.textContent = "Timeline done";
  }, Math.max(...events.map((item) => item.atMs + item.event.hold), 0) + 120);
  sequenceTimers.push(doneTimer);
}

function toggleTimelinePlayback() {
  if (timelinePlaying) {
    timelinePlayheadMs = Math.min(timelineLengthMs(), timelineStartOffsetMs + Date.now() - timelineStartedAt);
    stopSequence();
    updateTimelineTransport();
    return;
  }
  playTimeline();
}

function setTimelinePlayhead(ms, restart = false) {
  timelinePlayheadMs = Math.max(0, Math.min(timelineLengthMs(), Number(ms) || 0));
  updateTimelineTransport();
  if (restart && timelinePlaying) {
    playTimeline();
  }
}

function toggleSequencePlayback() {
  if (sequencePlaying) {
    stopSequence();
  } else {
    playSequence();
  }
}

function togglePrimaryTransport() {
  if (timelinePlaying || document.body.classList.contains("canvas-view")) {
    toggleTimelinePlayback();
    return;
  }
  toggleSequencePlayback();
}

function runSequenceStep(snapshot, index) {
  if (!sequencePlaying) return;
  const { events, laneId, context } = snapshot;
  if (index >= events.length) {
    sequenceRunningLanes.delete(laneId);
    if (!sequenceRunningLanes.size) {
      stopSequence(false);
      els.nowPlaying.textContent = "Sequence done";
    }
    return;
  }

  const event = events[index];
  if (!event.rest) playSequenceEvent(event, laneId, index, context);
  const timer = setTimeout(() => {
    sequenceTimers = sequenceTimers.filter((item) => item !== timer);
    runSequenceStep(snapshot, index + 1);
  }, event.pace);
  sequenceTimers.push(timer);
}

function playSequenceEvent(event, laneId = "main", index = 0, context = editorContext()) {
  ensureAudio();
  const position = keyPosition(event.key);
  if (!position) return;
  const degree = degreeForKey(position.row, position.index, event.modifiers);
  if (!degree) return;
  const playbackKey = `${laneId}:${index}:${event.key}:${Date.now()}`;
  const noteId = playTone(
    playbackKey,
    frequencyForStep(degree.step, degree.octave, context),
    noteLabel(degree.step, degree.octave, context),
    event.key,
    context.instrument,
  );
  setTimeout(() => releaseSpecificMomentaryNote(playbackKey, noteId), event.hold);
}

function stopSequence(updateStatus = true) {
  sequencePlaying = false;
  timelinePlaying = false;
  sequenceRunningLanes.clear();
  sequenceTimers.forEach((timer) => clearTimeout(timer));
  sequenceTimers = [];
  clearInterval(timelineClockTimer);
  timelineClockTimer = null;
  els.playSequence.classList.remove("is-active");
  els.playTimeline.classList.remove("is-active");
  els.playSequence.textContent = "Play";
  updateTimelineTransport();
  releaseUnlockedNotes();
  if (updateStatus) els.nowPlaying.textContent = "Sequence stopped";
}

function stopNote(key) {
  const note = activeNotes.get(key);
  if (!note || !audioCtx) return;
  lockedNotes.delete(key);
  const now = audioCtx.currentTime;
  note.gain.gain.cancelScheduledValues(now);
  note.gain.gain.setValueAtTime(Math.max(note.gain.gain.value, 0.0001), now);
  note.gain.gain.exponentialRampToValueAtTime(0.0001, now + note.release);
  note.osc.stop(now + note.release + 0.05);
  note.shimmer.stop(now + note.release + 0.05);
  activeNotes.delete(key);
  const visualKey = note.visualKey ?? key;
  const stillPlayingSameVisualKey = [...activeNotes.values()].some(
    (activeNote) => (activeNote.visualKey ?? key) === visualKey,
  );
  if (!stillPlayingSameVisualKey) {
    document.querySelector(`[data-key="${visualKey}"]`)?.classList.remove("is-playing");
  }
}

function releaseMomentaryNote(key) {
  if (activeNotes.get(key)?.percussive) return;
  if (!lockedNotes.has(key)) stopNote(key);
}

function releaseSpecificMomentaryNote(key, noteId) {
  const note = activeNotes.get(key);
  if (note?.id === noteId && !lockedNotes.has(key)) stopNote(key);
}

function toggleDrone() {
  ensureAudio();
  if (droneNodes.length) {
    droneNodes.forEach(({ osc, gain }) => {
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.3);
      osc.stop(audioCtx.currentTime + 0.35);
    });
    droneNodes = [];
    els.droneBtn.querySelector("strong").textContent = "Off";
    return;
  }

  const root = roots[els.root.value];
  [root / 2, root, root * 1.5].forEach((freq, i) => {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = i === 2 ? "triangle" : "sine";
    osc.frequency.value = freq;
    gain.gain.value = i === 1 ? 0.08 : 0.045;
    osc.connect(gain);
    gain.connect(master);
    osc.start();
    droneNodes.push({ osc, gain });
  });
  els.droneBtn.querySelector("strong").textContent = "On";
}

function playDrum(accent = 1) {
  ensureAudio();
  const now = audioCtx.currentTime;
  const kick = audioCtx.createOscillator();
  const kickGain = audioCtx.createGain();
  kick.type = "sine";
  kick.frequency.setValueAtTime(132, now);
  kick.frequency.exponentialRampToValueAtTime(58, now + 0.12);
  kickGain.gain.setValueAtTime(0.42 * accent, now);
  kickGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);
  kick.connect(kickGain);
  kickGain.connect(master);
  kick.start(now);
  kick.stop(now + 0.2);

  if (accent < 0.6) return;
  const noiseBuffer = audioCtx.createBuffer(1, audioCtx.sampleRate * 0.05, audioCtx.sampleRate);
  const data = noiseBuffer.getChannelData(0);
  for (let i = 0; i < data.length; i += 1) data[i] = Math.random() * 2 - 1;
  const noise = audioCtx.createBufferSource();
  const noiseGain = audioCtx.createGain();
  const filter = audioCtx.createBiquadFilter();
  noise.buffer = noiseBuffer;
  filter.type = "highpass";
  filter.frequency.value = 1700;
  noiseGain.gain.setValueAtTime(0.08 * accent, now);
  noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);
  noise.connect(filter);
  filter.connect(noiseGain);
  noiseGain.connect(master);
  noise.start(now);
}

function toggleRhythm() {
  ensureAudio();
  if (rhythmTimer) {
    clearInterval(rhythmTimer);
    rhythmTimer = null;
    rhythmStep = 0;
    els.rhythmBtn.querySelector("strong").textContent = "Off";
    return;
  }
  const tick = () => {
    const pattern = rhythmPatterns[els.rhythm.value];
    const accent = pattern[rhythmStep % pattern.length];
    if (accent) playDrum(accent);
    rhythmStep += 1;
  };
  tick();
  rhythmTimer = setInterval(tick, (60_000 / Number(els.tempo.value)) / 2);
  els.rhythmBtn.querySelector("strong").textContent = "On";
}

function playCue(type) {
  ensureAudio();
  const context = editorContext();
  const offsets = {
    suspense: [0, 1, 6, 7],
    emotion: [0, 4, 7, 12],
    devotion: [0, 7, 12, 19],
    mass: [0, 0, 7, 12],
  }[type];
  offsets.forEach((offset, i) => {
    setTimeout(() => {
      const key = `cue-${type}-${i}`;
      const index = Math.max(0, offset);
      const { step, octave } = degreeForRagaIndex(index, context);
      playTone(
        key,
        frequencyForStep(step, octave, context),
        noteLabel(step, octave, context),
        key,
        context.instrument,
      );
      playDrum(type === "mass" ? 1 : 0.45);
      setTimeout(() => stopNote(key), type === "suspense" ? 520 : 820);
    }, i * 130);
  });
}

function startRecording() {
  ensureAudio();
  if (recorder.state === "recording") return;
  recordedChunks = [];
  recorder.start();
  els.recordBtn.classList.add("is-active");
  els.exportBtn.disabled = true;
  els.nowPlaying.textContent = "Recording";
}

function stopAll() {
  stopSequence(false);
  [...activeNotes.keys()].forEach(stopNote);
  if (rhythmTimer) toggleRhythm();
  if (droneNodes.length) toggleDrone();
  if (recorder?.state === "recording") recorder.stop();
  els.recordBtn.classList.remove("is-active");
  els.nowPlaying.textContent = "Stopped";
}

function exportRecording() {
  if (!lastBlobUrl) return;
  const anchor = document.createElement("a");
  anchor.href = lastBlobUrl;
  anchor.download = "indian-bgm-keyboard-take.webm";
  anchor.click();
}

function handleTimelineWheel(event) {
  if (event.ctrlKey || event.metaKey) {
    event.preventDefault();
    setTimelineZoom(timelinePxPerMs * (event.deltaY < 0 ? 1.06 : 1 / 1.06));
    return;
  }
  if (Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return;
  event.preventDefault();
  els.timelineScroll.scrollLeft += event.deltaX;
}

function bindEvents() {
  window.addEventListener("blur", stopHeldNotes);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stopHeldNotes();
  });
  document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
      if (event.target.classList?.contains("notation-input")) return;
      event.preventDefault();
      if (!event.repeat) togglePrimaryTransport();
      return;
    }
    if (["INPUT", "TEXTAREA", "SELECT"].includes(event.target.tagName)) return;
    const key = keyFromEvent(event);
    if (event.repeat) return;
    const rowEntry = Object.entries(keyRows).find(([, keys]) => keys.includes(key));
    if (rowEntry) {
      const [row, keys] = rowEntry;
      const index = keys.indexOf(key);
      if (assignFromKey(key, row, index, event)) {
        event.preventDefault();
        return;
      }
      if (assignableKeys.has(key)) {
        playAssignedKey(key, row);
      } else {
        playNote(key, row, index, event);
      }
    }
  }, true);
  document.addEventListener("keyup", (event) => {
    if (["INPUT", "TEXTAREA", "SELECT"].includes(event.target.tagName)) return;
    releaseMomentaryNote(keyFromEvent(event));
  });
  els.octave = document.querySelector("#octaveShift");
  document.querySelector("#octaveDown").addEventListener("click", () => {
    octaveShift = Math.max(-2, octaveShift - 1);
    els.octave.textContent = octaveShift;
    renderKeyboard();
    updateSequenceReadout();
    syncActiveScriptLane();
  });
  document.querySelector("#octaveUp").addEventListener("click", () => {
    octaveShift = Math.min(2, octaveShift + 1);
    els.octave.textContent = octaveShift;
    renderKeyboard();
    updateSequenceReadout();
    syncActiveScriptLane();
  });
  els.raga.addEventListener("change", () => {
    renderKeyboard();
    updateSequenceReadout();
    syncActiveScriptLane();
  });
  els.root.addEventListener("change", () => {
    saveUserPreferences();
    updateSequenceReadout();
    syncActiveScriptLane();
    if (droneNodes.length) {
      toggleDrone();
      toggleDrone();
    }
  });
  els.instrument.addEventListener("change", () => {
    saveUserPreferences();
    syncActiveScriptLane();
  });
  els.tempo.addEventListener("input", () => {
    els.tempoOut.textContent = els.tempo.value;
    if (rhythmTimer) {
      toggleRhythm();
      toggleRhythm();
    }
  });
  els.rhythm.addEventListener("pointerdown", releaseUnlockedNotes);
  els.rhythm.addEventListener("change", releaseUnlockedNotes);
  els.sequenceInput.addEventListener("keydown", handleSequenceTyping);
  els.sequenceInput.addEventListener("input", () => {
    const lane = activeScriptLane();
    if (lane) {
      lane.script = els.sequenceInput.value;
      saveScriptLanes();
      renderScriptCarousel();
      renderTimeline();
    }
    updateSequenceReadout();
  });
  els.westernInput.addEventListener("input", () => handleNotationInput("western"));
  els.swaraInput.addEventListener("input", () => handleNotationInput("swara"));
  els.sequencePace.addEventListener("input", updateActiveLaneTiming);
  els.sequenceHold.addEventListener("input", updateActiveLaneTiming);
  els.playSequence.addEventListener("click", toggleSequencePlayback);
  els.stopSequence.addEventListener("click", () => stopSequence());
  els.canvasView.addEventListener("click", () => setWorkspaceView("canvas"));
  els.keysView.addEventListener("click", () => setWorkspaceView("keys"));
  els.addTimelineItem.addEventListener("click", addTimelineItem);
  els.playTimeline.addEventListener("click", toggleTimelinePlayback);
  els.timelineZoomOut.addEventListener("click", () => setTimelineZoom(timelinePxPerMs / 1.25));
  els.timelineZoomIn.addEventListener("click", () => setTimelineZoom(timelinePxPerMs * 1.25));
  els.timelineScrub.addEventListener("input", () => setTimelinePlayhead(els.timelineScrub.value, true));
  els.timelineScroll.addEventListener("wheel", handleTimelineWheel, { passive: false });
  els.clearTimeline.addEventListener("click", clearTimeline);
  document.addEventListener("pointermove", updateTimelineDrag);
  document.addEventListener("pointerup", endTimelineDrag);
  document.addEventListener("pointercancel", endTimelineDrag);
  els.addScript.addEventListener("click", addScriptLane);
  els.deleteScript.addEventListener("click", deleteActiveScriptLane);
  els.saveTune.addEventListener("click", saveCurrentTune);
  els.sidebarToggle.addEventListener("click", toggleSidebar);
  els.droneBtn.addEventListener("click", toggleDrone);
  els.rhythmBtn.addEventListener("click", toggleRhythm);
  els.recordBtn.addEventListener("click", startRecording);
  els.stopBtn.addEventListener("click", stopAll);
  els.exportBtn.addEventListener("click", exportRecording);
  document.querySelectorAll("[data-cue]").forEach((button) => {
    button.addEventListener("click", () => playCue(button.dataset.cue));
  });
}

function stopHeldNotes() {
  [...activeNotes.keys()].forEach(stopNote);
}

function releaseUnlockedNotes() {
  [...activeNotes.keys()].forEach((key) => releaseMomentaryNote(key));
}

function init() {
  populateSelect(els.raga, Object.keys(ragas));
  populateInstrumentSelect();
  populateSelect(els.root, Object.keys(roots));
  populateSelect(els.rhythm, Object.keys(rhythmPatterns));
  const savedPrefs = loadUserPreferences();
  els.raga.value = "Mohanam";
  els.instrument.value = instruments[savedPrefs.instrument] ? savedPrefs.instrument : "Veena";
  els.root.value = roots[savedPrefs.root] ? savedPrefs.root : "C";
  loadCustomAssignments();
  loadSavedTunes();
  loadScriptLanes();
  loadTimelineItems();
  loadTimelineZoom();
  loadSidebarState();
  loadWorkspaceView();
  renderKeyboard();
  renderScriptCarousel();
  renderSavedTunes();
  renderTimeline();
  updateSequenceReadout();
  bindEvents();
}

init();
