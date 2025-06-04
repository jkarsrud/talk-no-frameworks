import "./assets/fonts.css";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";
import "reveal.js/plugin/highlight/monokai.css";
import "./style.css";

import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";
import SpeakerNotes from "reveal.js/plugin/notes/notes.esm.js";
import Highlight from "reveal.js/plugin/highlight/highlight.esm.js";
import Zoom from "reveal.js/plugin/zoom/zoom.esm.js";

const Deck = new Reveal({ plugins: [Markdown, SpeakerNotes, Highlight, Zoom] });

Deck.initialize({
  controls: true,
  progress: false,
  hash: true,
  width: 1920,
  height: 1080,
  margin: 0,

  markdown: {
    gfm: true,
  },
});
