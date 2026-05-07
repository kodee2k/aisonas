(() => {
  const ext = typeof browser !== "undefined" ? browser : chrome;
  "use strict";

  const EMOTIONS = new Set([
    "claude_amused",
    "claude_concerned",
    "claude_curious",
    "claude_frustrated",
    "claude_happy",
    "claude_playful",
    "claude_sad",
    "claude_sheepish",
    "claude_skeptical",
    "claude_thoughtful",
    "claude_touched",
    "claude_uncertain",
    "claude_warm",
  ]);

  const TAG_RE = /<\s*(claude_(?:amused|concerned|curious|frustrated|happy|playful|sad|sheepish|skeptical|thoughtful|touched|uncertain|warm))\s*(?:\/\s*)?>/g;
  const SKIP_SELECTOR = [
    "script",
    "style",
    "textarea",
    "input",
    "select",
    "option",
    "button",
    "code",
    "pre",
    "[contenteditable='true']",
    ".claude-emotion-sprite-wrap",
  ].join(",");

  let observer = null;

  function shouldSkipNode(node) {
    const parent = node.parentElement;
    return !parent || parent.closest(SKIP_SELECTOR);
  }

  function emotionImage(name) {
    const wrap = document.createElement("span");
    wrap.className = "claude-emotion-sprite-wrap";
    wrap.dataset.claudeEmotion = name;

    const img = document.createElement("img");
    img.className = "claude-emotion-sprite";
    img.alt = name.replace("claude_", "Claude ");
    img.title = name;
    img.width = 128;
    img.height = 128;
    img.decoding = "async";
    img.loading = "lazy";
    img.src = ext.runtime.getURL(`assets/${name}.png`);

    wrap.appendChild(img);
    return wrap;
  }

  function replaceTextNode(node) {
    if (shouldSkipNode(node)) return;

    const text = node.nodeValue;
    if (!text || !text.includes("<claude_")) return;

    TAG_RE.lastIndex = 0;
    let match = TAG_RE.exec(text);
    if (!match) return;

    const frag = document.createDocumentFragment();
    let cursor = 0;

    while (match) {
      const [raw, name] = match;
      if (match.index > cursor) {
        frag.appendChild(document.createTextNode(text.slice(cursor, match.index)));
      }

      frag.appendChild(EMOTIONS.has(name) ? emotionImage(name) : document.createTextNode(raw));
      cursor = match.index + raw.length;
      match = TAG_RE.exec(text);
    }

    if (cursor < text.length) {
      frag.appendChild(document.createTextNode(text.slice(cursor)));
    }

    node.replaceWith(frag);
  }

  function scan(root) {
    if (!root) return;

    if (root.nodeType === Node.TEXT_NODE) {
      replaceTextNode(root);
      return;
    }

    if (root.nodeType !== Node.ELEMENT_NODE && root.nodeType !== Node.DOCUMENT_NODE) {
      return;
    }

    if (root.nodeType === Node.ELEMENT_NODE && root.matches(SKIP_SELECTOR)) {
      return;
    }

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue || !node.nodeValue.includes("<claude_")) {
          return NodeFilter.FILTER_REJECT;
        }
        return shouldSkipNode(node) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
      },
    });

    const nodes = [];
    for (let node = walker.nextNode(); node; node = walker.nextNode()) {
      nodes.push(node);
    }
    nodes.forEach(replaceTextNode);
  }

  function start() {
    scan(document.body);

    observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          scan(node);
        }
      }
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
})();
