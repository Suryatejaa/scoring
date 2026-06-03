# Indian BGM Keyboard

Indian BGM Keyboard is a browser-based scoring workstation for Indian music-focused short film background scores, RR cues, and emotional motif drafting. It combines a swara-first keyboard, editable notation, saved tune library, and a layered arrangement timeline.

## Features

- Swara keyboard layout with Sa-first rows for clear Indian music mapping.
- Full octave coverage with shuddha, komal, and tivra variants.
- Assignable keyboard keys for custom swara duplicates and alternate raga workflows.
- Script input for automatic playback with adjustable pace and hold timing.
- Editable Western and swara notation views that convert back into playable key scripts.
- Multiple script lanes with inline rename and inline delete confirmation.
- Saved tune library with load, edit, delete, and persistence in local storage.
- Layered video-editor-style sequence timeline with draggable clips, zoom, scrub, and play/pause.
- Per-script raga, instrument, root shruti, octave, pace, and hold settings.
- Instrument groups for plucked/keys, winds, strings, pads, and drums.
- Tanpura drone, rhythm loop presets, cue trigger buttons, and browser audio recording/export.

## Getting Started

This is a static web app. No build step is required.

Open `index.html` in a browser, or serve the folder with any local static server.

Example:

```bash
python3 -m http.server 4173
```

Then open:

```text
http://localhost:4173/
```

## Core Workflow

1. Choose raga, instrument, root shruti, octave, pace, and hold.
2. Type or play a key script.
3. Review or edit the generated Western and swara notation.
4. Save useful tunes into the library.
5. Add scripts to the sequence timeline.
6. Drag clips horizontally for timing and vertically for layers.
7. Use the timeline playhead, zoom controls, and spacebar playback to arrange the cue.

## Keyboard Script Notes

- Spaces separate notes.
- `-` creates a rest.
- `Shift+R`, `Shift+G`, `Shift+D`, and `Shift+N` access komal variants.
- `Alt+M` or `Option+M` accesses tivra ma.
- `@pace/hold` can override timing for a note.
- `*2`, `*3`, etc. repeat a note token.

Example:

```text
P { I I*2 F O I F O I A I I
```

## Project Structure

```text
.
├── index.html
├── styles.css
├── app.js
└── README.md
```

## Storage

The app stores user preferences, saved tunes, script lanes, custom key assignments, sidebar state, workspace view, timeline clips, and timeline zoom in browser `localStorage`.

## Status

V1 prototype for Indian short film scoring workflows.
