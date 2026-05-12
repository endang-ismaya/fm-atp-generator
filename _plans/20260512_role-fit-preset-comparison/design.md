# Role Fit Score and Preset Comparison Design

## Goal

Add two analysis-oriented features to the FM24 ATP Generator without changing the exported `.atp` file format:

- Role Fit Score: show how closely the current attribute values match tactical role targets.
- Preset Comparison: show the difference between current values and a selected player preset/profile or role target.

The feature should make the app feel more analytical while staying in the existing vanilla HTML/CSS/JS architecture.

## User Experience

### Role Fit Score

Add a compact analysis area near the existing summary metrics or inside a new tab/panel. It should show:

- Best matching tactical roles ranked by fit percentage.
- The currently selected role focus score when role mode is active.
- A small list of strongest matches and biggest gaps for the top role.

Suggested display:

```text
Best Role Fits
Advanced Forward     91%
Poacher              88%
Inside Forward       82%

Top match strengths: Finishing, Off the Ball, Pace
Main gaps: Composure -2, First Touch -3
```

### Preset Comparison

Add comparison controls to let the user choose a comparison target:

- Player preset and profile.
- Existing role target, duty, and level.

Show:

- Overall similarity percentage.
- Category deltas for Technical, Mental, Physical, and Hidden.
- Attribute deltas sorted by impact.
- Highlight positive, negative, and equal deltas clearly.

The comparison should be read-only. It should not mutate the current template unless the user explicitly applies a preset using existing controls.

## Scoring Model

### Role Fit Score

Use existing role target generation:

```js
buildRoleTargetValues(roleKey, "none", "none", dutyKey, levelKey)
```

For each visible attribute relevant to the role/duty:

- Calculate absolute difference between current value and target.
- Convert to score with `1 - diff / 19`.
- Weight primary role boost attributes more than generic duty attributes.
- Clamp final score to `0-100`.

Hidden attributes can be included lightly for professionalism, pressure, consistency, important matches, and versatility because they already influence role relevance in `getRoleRelevantAttributes`.

### Preset Similarity

Compare all mapped attributes unless the UI offers a visible/hidden filter later.

Suggested similarity:

```text
similarity = 100 - averageAbsoluteDelta / 19 * 100
```

Also surface raw deltas because they are more useful than a single percentage.

## Interface Placement

Recommended implementation:

- Add a new `Analysis` tab after `Editor Suggestions`.
- Keep the tab layout consistent with the current panels.
- Add one analysis grid containing:
  - Best Role Fits card.
  - Compare Against card.
  - Attribute Delta card/table.

This avoids crowding the top toolbar and keeps the existing export flow unchanged.

## Data and State

Add analysis state:

```js
analysis: {
  compareType: "player",
  comparePlayer: "maldini",
  compareProfile: "prime",
  compareRole: "advancedForward",
  compareDuty: "attack",
  compareLevel: "good"
}
```

This can live in the existing global `state` object.

## Accessibility

- Use native `select` controls for comparison choices.
- Keep table/card text readable on mobile.
- Avoid color-only meaning for deltas by including `+`, `-`, and `0` signs in text.

## Non-Goals

- No machine learning or external data.
- No changes to `.atp` binary encoding.
- No package manager, bundler, or framework.
- No automatic application of comparison targets.

