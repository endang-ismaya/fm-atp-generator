# FM24 ATP Generator

A single-page web application for creating custom `.atp` (attribute template) files for **Football Manager 2024**. Edit player attributes with a polished interface, apply presets from football legends, or build templates based on tactical roles.

---

## Features

- **Player Presets** — Choose from 10 built-in legends (Maldini, Messi, Ronaldo, Haaland, Mbappé, De Bruyne, van Dijk, Neuer, Zidane-Scholes Hybrid) with Prime, Wonderkid, and Veteran profiles
- **Role Focus** — Generate templates for 30+ tactical roles (Goalkeeper to Striker) with duty and quality level options
- **Custom Upload** — Load your own `.atp` file as a baseline template
- **Dual Player Blend** — Combine two player presets into a single averaged attribute set
- **48 Editable Attributes** —
  - 35 **Visible**: Technical, Mental, and Physical
  - 13 **Hidden**: Personality traits, Consistency, Injury Proneness, etc.
- **Smart Suggestions** — Auto-generates FM Editor recommendations for positions, roles, abilities, reputation, height/weight, and traits
- **Byte Preview** — Inspect exact binary changes with hex dump visualization
- **Export Checklist** — Download editor suggestions as a text file

---

## How to Use

1. Open `index.html` in any modern browser (or serve via local server)
2. Choose a preset mode:
   - **Player Preset** — Select one or two players, then click *Apply Player*
   - **Role Focus** — Pick roles, duty, and level, then click *Apply Role*
   - **Custom .atp** — Upload your own `.atp` file
3. Adjust individual attributes using the steppers or bulk controls
4. Review the *Editor Suggestions* tab for manual FM Editor settings
5. Click **Export .atp** to download your custom template

---

## File Format

The generated `.atp` files are **89-byte binary** attribute templates compatible with the Football Manager 2024 editor. Attributes are stored at specific byte offsets using either:

- **Scaled** — FM value (1–20) multiplied by 5
- **Direct** — Raw byte value

---

## File Structure

```
fm-atp-generator/
├── index.html          # Application UI
├── app.js              # Core logic (~2,400 lines)
├── styles.css          # Stylesheet
└── atp_samples/        # Example generated templates
    ├── Erling Haaland.atp
    ├── Lamine Yamal.atp
    └── Zidane-Scholes Hybrid Prime - FM24.atp
```

No build step or dependencies required — works entirely in the browser.

---

## Supported Roles

| Position | Roles |
|----------|-------|
| Goalkeeper | Goalkeeper, Sweeper Keeper |
| Centre-Back | Central Defender, Wide Centre-Back, No-Nonsense Centre-Back, Libero, Ball Playing Defender |
| Full-Back / Wing-Back | Full-Back, Wing-Back, No-Nonsense Full-Back, Complete Wing-Back, Inverted Wing-Back, Inverted Full-Back |
| Defensive Midfield | Defensive Midfielder, Anchor, Half-Back, Regista, Roaming Playmaker, Segundo Volante, Deep-Lying Playmaker |
| Central Midfield | Central Midfielder, Ball-Winning Midfielder, Box-to-Box Midfielder, Mezzala, Carrilero, Advanced Playmaker |
| Wide Midfield / Attack | Wide Midfielder, Defensive Winger, Wide Playmaker, Winger, Inverted Winger, Inside Forward, Wide Target Forward, Raumdeuter |
| Attacking Midfield | Attacking Midfielder, Trequartista, Enganche, Shadow Striker |
| Striker | Deep-Lying Forward, Advanced Forward, Target Forward, Poacher, Complete Forward, Pressing Forward, False Nine |

---

## Technical Details

- **Pure Vanilla JS** — No frameworks or build tools
- **State Management** — Simple global state object tracking base bytes, current values, and dirty attributes
- **Validation** — Real-time bounds checking (1–20) with visual feedback
- **Responsive Design** — Adapts down to mobile widths

---

## License

Open source — feel free to modify and distribute.
