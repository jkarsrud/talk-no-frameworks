import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";

import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";

const Deck = new Reveal({ plugins: [Markdown] });

Deck.initialize();
