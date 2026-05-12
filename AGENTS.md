# AGENTS.md - FM24 ATP Generator Project Guidelines

## Git Workflow Rules

**IMPORTANT: Follow these rules strictly for all code changes:**

1. **NEVER use WORKTREES** - Always work in the main repository directory
2. **ALWAYS create a new branch** for every fix or feature:
   ```bash
   git checkout -b feat/feature-name    # For new features
   git checkout -b fix/bug-name         # For bug fixes
   git checkout -b chore/task-name      # For maintenance tasks
   ```
3. **NEVER merge to MAIN** until the changes are approved
4. **NEVER push to GitHub** until the changes are approved:
   - Create local commits on your feature branch
   - Wait for approval before merging and pushing
   - Only push after explicit approval

### Workflow Summary

```
1. Create new branch → 2. Make changes → 3. Create commits → 4. Ask for approval → 5. Merge locally → 6. Push to GitHub
```

## Execution Workflow

When implementing features or tasks, follow this workflow:

1. **Plan First**: Create an implementation plan under `_plans/YYYYMMDD_{feature-name}/`:
   1. Create folder: `_plans/YYYYMMDD_{feature-name}/`
      Under the folder, create the following files:
      1. Create `design.md` under the folder
      2. Create `implementation_plan.md`
      3. Create `task.md`
      4. Create `execution_report.md` (after job is completed)
   2. **Ideas Link Sync**: When creating a new plan under `_plans/YYYYMMDD_{feature-name}/`, also add the new `_plans/.../` directory to the relevant `_ideas/*_IDEAS_AND_STATUS.md` entry's `plans:` list in `_ideas/related_links_manifest.yaml` and run:
      ```bash
      python3 scripts/update_ideas_related_links.py --write
      ```

      - Do **NOT** manually edit generated related-links blocks inside `_ideas/*.md`; the manifest is the source of truth.
      - This ideas-link update is part of the planning deliverable and must be done before the plan is considered ready for review.
2. **Wait for Review**: Do NOT start implementation until user approves the plan
3. **Branch for Execution**: When approved:
   - Create a new branch: `feat/{feature-name}`
   - Commit all changes to that branch
   - Do NOT merge until user reviews and approves

## Commit Guidelines

- Use conventional commits: `feat:`, `fix:`, `docs:`, `refactor:`, etc.
- Keep commits atomic and focused
- Run lint/typecheck before committing if scripts exist

## Project Overview

**FM24 ATP Generator** is a single-page web application for creating custom `.atp` (attribute template) files for **Football Manager 2024**. Users can edit player attributes via a polished UI, apply presets from football legends, or build templates based on tactical roles.

## Technology Stack

| Component        | Technology     | Notes                         |
|------------------|----------------|-------------------------------|
| Language         | Vanilla JS     | ES6+, no transpilation        |
| Styling          | CSS3           | Custom stylesheet, no framework |
| Markup           | HTML5          | Single `index.html` entry     |
| Local Server     | Python 3       | `python3 -m http.server`      |
| Build Tool       | None           | No bundler or build step      |
| Package Manager  | None           | Zero dependencies             |

## Project Structure

```
fm-atp-generator/
├── index.html          # Application UI (single page)
├── app.js              # Core logic (~2,400 lines)
├── styles.css          # Custom stylesheet
├── atp_samples/        # Example generated templates
│   ├── atp_hidden.zip  # Hidden attribute samples
│   └── atp_visible.zip # Visible attribute samples
├── Makefile            # Convenience commands (serve, open, stop)
└── README.md           # Project documentation
```

## Development Commands

### Using Makefile

```bash
make serve  # Start local server on port 4173 (default)
make open   # Start server and open browser
make stop   # Stop the running server
make help   # Show available commands
```

### Manual Server

```bash
# Start server on default port
python3 -m http.server 4173

# Or specify a custom port
PORT=8080 make serve
```

### View in Browser

Open [http://localhost:4173](http://localhost:4173) (or your chosen port) after starting the server.

## Code Conventions

### JavaScript (`app.js`)

- **Vanilla JS only** — No frameworks, no build tools, no bundlers
- **ES6+ features** — Use `const`/`let`, arrow functions, template literals, destructuring
- **State Management** — Simple global state object (`state`) tracking:
  - `baseBytes`: Original uploaded/preset bytes
  - `currentValues`: Current attribute values
  - `dirtyAttributes`: Set of modified attribute keys
- **Module Pattern** — Organize code into logical sections:
  - Constants & configuration (presets, roles, offsets)
  - State object
  - DOM helpers
  - Event handlers
  - Render functions
  - Export/import logic
- **Naming Conventions**:
  - `camelCase` for variables and functions
  - `UPPER_SNAKE_CASE` for constants and presets
  - `id` attributes: `camelCase` (e.g., `presetTypeSelect`, `exportButton`)
  - CSS classes: `kebab-case` (e.g., `control-band`, `attribute-grid`)

```javascript
// Example: Attribute offset constant
const ATTRIBUTE_OFFSETS = {
  acceleration: { offset: 0x00, mode: 'scaled' },
  aerialAbility: { offset: 0x01, mode: 'scaled' },
  // ...
};

// Example: State update
function updateAttribute(key, value) {
  state.currentValues[key] = clamp(value, 1, 20);
  state.dirtyAttributes.add(key);
  renderAttributes();
  updateMetrics();
}
```

### CSS (`styles.css`)

- **Custom properties** (CSS variables) for theming:
  ```css
  :root {
    --bg: #0f1115;
    --surface: #17191f;
    --accent: #6aa7ff;
    /* ... */
  }
  ```
- **BEM-like naming** for component classes:
  - Block: `.app-shell`, `.control-band`, `.attribute-grid`
  - Modifier: `.is-hidden`, `.is-active`
- **Responsive** — Mobile-first, adapts down to small widths

### HTML (`index.html`)

- **Semantic elements** — Use `<section>`, `<nav>`, `<header>`, `<main>`
- **Accessibility** — Include `aria-label`, proper `<label>` associations
- **No inline styles or scripts** — All styling in `styles.css`, all logic in `app.js`

## File Format Specification

The generated `.atp` files are **89-byte binary** attribute templates compatible with the Football Manager 2024 editor.

### Attribute Storage

- **Scaled** — FM value (1–20) multiplied by 5 (e.g., value 15 → byte `0x4B`)
- **Direct** — Raw byte value written as-is

### Byte Offsets

Attributes are stored at specific offsets within the 89-byte file. See `app.js` for the full `ATTRIBUTE_OFFSETS` mapping.

## Application Features

| Feature                  | Description                                                                    |
|--------------------------|--------------------------------------------------------------------------------|
| Player Presets           | 90+ legends (Pele, Maradona, Messi, Ronaldo, Yashin, Best, etc.) with Prime/Wonderkid/Veteran profiles |
| Role Focus               | 30+ tactical roles (Goalkeeper to Striker) with duty and quality level options |
| Custom Upload            | Load your own `.atp` file as a baseline template                               |
| Dual Player Blend        | Combine two player presets into a single averaged attribute set                |
| 48 Editable Attributes   | 35 Visible (Technical/Mental/Physical) + 13 Hidden (Personality/Consistency/etc.) |
| Smart Suggestions        | Auto-generates FM Editor recommendations for positions, roles, abilities, etc. |
| Byte Preview             | Inspect exact binary changes with hex dump visualization                       |
| Export Checklist         | Download editor suggestions as a text file                                     |

## Supported Tactical Roles

| Position                | Roles                                                                                          |
|-------------------------|------------------------------------------------------------------------------------------------|
| Goalkeeper              | Goalkeeper, Sweeper Keeper                                                                     |
| Centre-Back             | Central Defender, Wide Centre-Back, No-Nonsense Centre-Back, Libero, Ball Playing Defender    |
| Full-Back / Wing-Back   | Full-Back, Wing-Back, No-Nonsense Full-Back, Complete Wing-Back, Inverted Wing-Back, Inverted Full-Back |
| Defensive Midfield      | Defensive Midfielder, Anchor, Half-Back, Regista, Roaming Playmaker, Segundo Volante, Deep-Lying Playmaker |
| Central Midfield        | Central Midfielder, Ball-Winning Midfielder, Box-to-Box Midfielder, Mezzala, Carrilero, Advanced Playmaker |
| Wide Midfield / Attack  | Wide Midfielder, Defensive Winger, Wide Playmaker, Winger, Inverted Winger, Inside Forward, Wide Target Forward, Raumdeuter |
| Attacking Midfield      | Attacking Midfielder, Trequartista, Enganche, Shadow Striker                                   |
| Striker                 | Deep-Lying Forward, Advanced Forward, Target Forward, Poacher, Complete Forward, Pressing Forward, False Nine |

## Key Implementation Details

### State Object

```javascript
const state = {
  baseBytes: new Uint8Array(89),      // Original bytes from preset/upload
  currentValues: {},                  // Current attribute values (1-20)
  dirtyAttributes: new Set(),         // Keys of modified attributes
  presetType: 'custom',               // 'custom' | 'player' | 'role'
  selectedPlayers: { a: null, b: null },
  selectedRoles: { primary: null, secondary: null, third: null },
};
```

### Validation

- Real-time bounds checking: all attributes clamped to **1–20**
- Visual feedback on invalid inputs
- Export blocked if validation fails

### Export Flow

1. Start with `baseBytes`
2. Apply dirty attribute changes
3. Write scaled/direct values at correct offsets
4. Generate 89-byte `Uint8Array`
5. Trigger browser download as `.atp` file

## Testing

There is no formal test suite. Test manually by:

1. Starting the local server: `make serve`
2. Opening the app in a browser
3. Testing each preset type (Player, Role, Custom upload)
4. Verifying exported `.atp` files open correctly in FM24 Editor
5. Checking responsive layout at various screen widths

## Troubleshooting

| Issue                        | Solution                                                                    |
|------------------------------|-----------------------------------------------------------------------------|
| Port already in use          | Change port: `PORT=8080 make serve`                                         |
| Changes not reflecting       | Hard refresh browser (Ctrl/Cmd + Shift + R) or clear cache                  |
| Export file corrupted        | Ensure all attributes are within 1–20 range before exporting                |
| CORS errors                  | Use `make serve` (local server) instead of opening `index.html` directly    |
| Styles not loading           | Verify `styles.css` is in the same directory as `index.html`                |

## Useful Links

- [Football Manager 2024 Editor Guide](https://www.footballmanager.com/)
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [MDN Web Docs - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [MDN Web Docs - HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
