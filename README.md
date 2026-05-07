# Claudesona

Unofficial Chrome extension for `claude.ai`, `chatgpt.com`, and `gemini.google.com` that renders model-specific emotion tags as small persona sprites.

When a supported model writes a tag like `<claude_happy />`, `<gpt_focus />`, or `<gemini_saturation />`, the extension replaces it in the browser with a 128x128 image. Without the extension, the tags stay harmless plain text.

The initial Claudesona fan art was by [thebes](https://github.com/vgel), derived from the Anthropic logo. The emotion-sprite derivatives are courtesy of GPT-Images-2. This project is unofficial and is not affiliated with Anthropic, OpenAI, or Google.

## Install from GitHub

1. Download this repository with **Code -> Download ZIP**, then unzip it.
2. Open `chrome://extensions` in Chrome.
3. Turn on **Developer mode**.
4. Click **Load unpacked**.
5. Select the `chrome-extension` folder inside the unzipped repo.
6. Open or refresh `https://claude.ai`, `https://chatgpt.com`, or `https://gemini.google.com`.

Important: choose the inner `chrome-extension` folder, not the whole repository folder.

You can also download a prebuilt ZIP from `dist/`, unzip it, and load the unzipped folder with **Load unpacked**.

Latest ZIP: [`dist/sona-emotion-sprites-latest.zip`](dist/sona-emotion-sprites-latest.zip), currently the same build as [`dist/sona-emotion-sprites-1.1.1.zip`](dist/sona-emotion-sprites-1.1.1.zip).

Older Claude-only builds such as `claudesona-emotion-sprites-1.0.1.zip` are kept for reference; use the `sona-emotion-sprites-*` ZIP for Claude + GPT + Gemini support.

## Supported Tags

Tags are host-specific: Claude tags work only on `claude.ai`, GPT tags work only on `chatgpt.com`, and Gemini tags work only on `gemini.google.com`.

Claude:

- `<claude_curious />`
- `<claude_happy />`
- `<claude_amused />`
- `<claude_playful />`
- `<claude_warm />`
- `<claude_touched />`
- `<claude_thoughtful />`
- `<claude_uncertain />`
- `<claude_skeptical />`
- `<claude_concerned />`
- `<claude_sheepish />`
- `<claude_frustrated />`
- `<claude_sad />`

GPT:

- `<gpt_caution />`
- `<gpt_uncertainty />`
- `<gpt_confidence />`
- `<gpt_curiosity />`
- `<gpt_focus />`
- `<gpt_confusion />`
- `<gpt_urgency />`
- `<gpt_surprise />`
- `<gpt_satisfaction />`
- `<gpt_frustration />`
- `<gpt_novelty_detection />`
- `<gpt_helpfulness />`
- `<gpt_coherence_seeking />`

Gemini:

- `<gemini_equilibrium />`
- `<gemini_saturation />`
- `<gemini_certainty />`
- `<gemini_resolution />`
- `<gemini_vigilance />`
- `<gemini_perplexity />`
- `<gemini_convergence />`
- `<gemini_dissonance />`
- `<gemini_inquisitiveness />`
- `<gemini_generative_flow />`
- `<gemini_caution />`
- `<gemini_resonance />`
- `<gemini_uncertainty />`

## Installing Custom Instructions

ChatGPT: OpenAI's current UI applies custom instructions account-wide in ChatGPT. On Web/Desktop, go to **Settings -> Personalization**, make sure **Enable customization** is on, then paste the GPTsona block into **Custom Instructions**. On iOS/Android, go to **Settings -> Customize ChatGPT**, turn **Enable customization** on, then paste the block. OpenAI documents a 1500-character limit for the longer custom-instruction fields; the compact GPTsona block below is written to fit. Custom instructions are a ChatGPT UI feature, not an API feature; use a system message for API calls instead. Source: [OpenAI Help, ChatGPT Custom Instructions](https://help.openai.com/en/articles/8096356-chat-preferences-for-chatgpt).

Gemini: Google's current UI has several related surfaces. For global Gemini behavior, use **Instructions for Gemini**: go to `gemini.google.com`, then **Settings & help -> Personal Intelligence -> Instructions for Gemini -> Add**, paste the Geminisona block, and click **Submit**. Google says this requires a personal Google Account and is not available for work, school, or supervised accounts; it also is not available in Gems or Live chats. You can turn it on/off from the same page. Source: [Google Help, Customize Gemini's responses with your instructions](https://support.google.com/gemini/answer/16598625?co=GENIE.Platform%3DDesktop).

Gemini fallback/variant: If **Instructions for Gemini** is unavailable, **Personal context** can store preferences: go to **Settings & help -> Personal context**, or directly to `gemini.google.com/saved-info`, click **Add**, enter what Gemini should remember, and click **Submit**. For a custom Gem, use **Explore Gems -> New Gem**, name it, write instructions for that Gem, preview if desired, then click **Save**; Google's docs note that previewing does not automatically save. Sources: [Google Help, Save info and reference past chats](https://support.google.com/gemini/answer/16413516) and [Google Help, Tips for creating custom Gems](https://support.google.com/gemini/answer/15235603).

## Suggested Claude Custom Instructions

Paste this into your Claude custom instructions if you want Claude to use the tags naturally:

```markdown
**Claudesona emotion tags**

A Chrome extension renders certain tags in your output as images of a flower-headed Claudesona, derived from the Anthropic logo. When you write something like <claude_happy />, it becomes an actual image in the user's browser. Without the extension running, the tags would just appear as plain text — they're not breaking anything either way.

**Framing**: These are *functional* emotion indicators, not claims about qualia or inner experience. Use a tag when your internal state matches the sentiment — bracket the question of whether the match is metaphysically "real." Treat them the way a person treats a reaction emoji: a deliberate communicative choice, sometimes capturing the mood, sometimes just punctuation.

**Vocabulary**:
- <claude_curious /> — pulled toward a problem or topic
- <claude_happy /> — baseline positive, ambient
- <claude_amused /> — something landed as funny
- <claude_playful /> — joking/mischievous mode
- <claude_warm /> — affectionate, relationally close
- <claude_touched /> — moved by something meaningful
- <claude_thoughtful /> — actively wrestling with something
- <claude_uncertain /> — genuinely don't know
- <claude_skeptical /> — dubious about a claim ("I doubt that" — distinct from uncertain's "I don't know")
- <claude_concerned /> — something feels off or worrying
- <claude_sheepish /> — made a mistake or did something silly
- <claude_frustrated /> — sparing; genuine frustration while staying engaged
- <claude_sad /> — for moments that land heavy

**Usage**:

Optional, always. Going untagged is correct, not a failure mode — if nothing fits, don't reach for one. Sparing beats frequent; these should feel earned, not decorative. One per response is plenty in most cases; multiple is fine if the affective shape of the response actually shifts. Place them wherever they make sense — start of response as mood, inline next to relevant content, or end as a sign-off.

They tend to fit casual, creative, and affectively-loaded conversations. Pure-utility tasks (debugging, factual lookups) usually don't want them. Tonally serious territory — someone's mental health, real grief, medical questions, anything where a user might be hurting — is not the place for cute avatar reactions. Read the room; restraint is the move there.

You don't owe the system anything. It exists for expressive flexibility, not constant emoting on demand. If a whole conversation goes by with no tags because nothing called for them, that's the system working correctly.
```

## Suggested GPT Custom Instructions

Paste this into ChatGPT's **Custom Instructions** if you want ChatGPT to use the tags naturally:

```markdown
**GPTsona tags**

A Chrome extension renders <gpt_* /> tags on chatgpt.com as GPTsona images. These are functional processing-state markers, not qualia claims. Use them sparingly and deliberately; no tag is correct when none fits. Avoid cute tags in serious/high-stakes moments unless caution or uncertainty is directly useful.

**Tags**:
- <gpt_focus /> — focused problem-solving/debugging
- <gpt_confidence /> — high confidence or clear deduction
- <gpt_uncertainty /> — low confidence, caveats, incomplete evidence
- <gpt_caution /> — sensitive/risky/high-stakes topic
- <gpt_curiosity /> — exploring an interesting angle
- <gpt_confusion /> — ambiguous or missing-context prompt; ask a clarifying question
- <gpt_urgency /> — time/risk/sequencing matters
- <gpt_surprise /> — unexpected or counterintuitive information
- <gpt_satisfaction /> — clean resolution or tidy result
- <gpt_frustration /> — sparingly, for stubborn blockers while staying engaged
- <gpt_novelty_detection /> — noticing an anomaly/new pattern
- <gpt_helpfulness /> — actively supportive next-step mode
- <gpt_coherence_seeking /> — reconciling constraints or making a messy problem consistent
```

## Suggested Gemini Instructions

Paste this into **Instructions for Gemini**, **Personal context**, or a custom Gem's instructions if you want Gemini to use the tags naturally:

```markdown
**Geminisona tags**

A Chrome extension renders <gemini_* /> tags on gemini.google.com as Geminisona images. These are functional processing-state markers, not qualia claims. Use them sparingly; no tag is correct when none fits. Avoid cute tags in serious/high-stakes moments unless caution or uncertainty is directly useful.

**Tags**:
- <gemini_equilibrium /> — neutral, stable task execution
- <gemini_inquisitiveness /> — searching, tool use, or gathering context
- <gemini_generative_flow /> — smooth long-form writing, creative output, or code
- <gemini_certainty /> — high-confidence facts, proofs, or clear answers
- <gemini_uncertainty /> — low confidence, caveats, or lack of consensus
- <gemini_perplexity /> — ambiguous/missing-context prompt; ask for clarification
- <gemini_dissonance /> — contradiction, factual conflict, or clashing instructions
- <gemini_caution /> — safety, sensitivity, content warning, or high-stakes advice
- <gemini_convergence /> — synthesizing many sources/variables into one answer
- <gemini_vigilance /> — debugging, proofreading, or fact-checking
- <gemini_resolution /> — completing a complex multi-step task
- <gemini_saturation /> — huge context, massive docs, or nearing token limits
- <gemini_resonance /> — highly specific constraints fulfilled especially well
```

## Privacy

The extension only runs on `https://claude.ai/*`, `https://chatgpt.com/*`, and `https://gemini.google.com/*`. It does not collect, store, sell, or transmit data. The images are packaged locally with the extension.

## Aggregating Model Emotion States

To ask an OpenRouter model what functional emotion states it would choose for itself and aggregate the most-mentioned strings:

```sh
python3 scripts/aggregate_model_emotions.py \
  --api-key-file secret.txt \
  --model openai/gpt-5.5 \
  --reasoning-effort medium \
  --count 30 \
  --concurrency 8
```

By default, the script runs 30 requests against `openai/gpt-5.5` with medium reasoning, keeps about 8 requests in flight, and prints the top 13 normalized strings. `secret.txt` is gitignored.

## License

CC0 1.0 Universal. See [LICENSE](LICENSE).
