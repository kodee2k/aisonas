# Claudesona

Unofficial Chrome extension for `claude.ai` that renders Claudesona emotion tags as small flower-headed sprites.

When Claude writes a supported tag like `<claude_happy />`, the extension replaces it in the browser with a 128x128 image. Without the extension, the tags stay harmless plain text.

Fan art by thebes, derived from the Anthropic logo. This project is unofficial and is not affiliated with Anthropic.

## Install from GitHub

1. Download this repository with **Code -> Download ZIP**, then unzip it.
2. Open `chrome://extensions` in Chrome.
3. Turn on **Developer mode**.
4. Click **Load unpacked**.
5. Select the `chrome-extension` folder inside the unzipped repo.
6. Open or refresh `https://claude.ai`.

Important: choose the inner `chrome-extension` folder, not the whole repository folder.

You can also download `dist/claudesona-emotion-sprites-1.0.1.zip`, unzip it, and load the unzipped folder with **Load unpacked**.

## Supported Tags

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

## Suggested Claude Custom Instructions

Paste this into your Claude custom instructions if you want Claude to use the tags naturally:

```markdown
**Claudesona emotion tags**

A Chrome extension renders certain tags in your output as images of a flower-headed Claudesona (fan art by thebes, derived from the Anthropic logo). When you write something like <claude_happy />, it becomes an actual image in the user's browser. Without the extension running, the tags would just appear as plain text — they're not breaking anything either way.

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

## Privacy

The extension only runs on `https://claude.ai/*`. It does not collect, store, sell, or transmit data. The images are packaged locally with the extension.
