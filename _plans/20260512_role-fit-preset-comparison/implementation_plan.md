# Implementation Plan

## Phase 1: Structure

1. Add an `Analysis` tab and panel in `index.html`.
2. Add comparison controls:
   - comparison type select
   - player/profile selects
   - role/duty/level selects
3. Add containers for best role fits, summary metrics, and attribute deltas.

## Phase 2: Analysis Helpers

1. Add helper functions for:
   - building single-role target values
   - finding role relevant attributes
   - scoring current values against role targets
   - ranking top role fits
   - building comparison target values
   - calculating category summaries and attribute deltas
2. Reuse existing data sources:
   - `rolePresets`
   - `roleDutyPresets`
   - `roleLevelPresets`
   - `buildRoleTargetValues`
   - `buildFullPresetValues`
   - `attributes`

## Phase 3: Rendering

1. Add `updateAnalysis()` called from `updateOutput()`.
2. Render role fit cards with scores and strongest/gap attributes.
3. Render comparison summary and sorted deltas.
4. Add CSS for analysis cards, score bars, and delta states.

## Phase 4: Events

1. Populate analysis selects during `populateSelects()`.
2. Bind change events for analysis controls.
3. Keep profile select synchronized when comparison player changes.
4. Ensure changing analysis controls rerenders without changing template values.

## Phase 5: Verification

1. Start the local server with `make serve` or `python3 -m http.server 4173`.
2. Open the app and manually verify:
   - default player preset renders analysis
   - role mode score changes after applying a role
   - comparison controls update deltas
   - export still downloads an 89-byte `.atp`
   - mobile layout remains readable
3. Run any available lint/typecheck if added later. Current project has no formal test suite or build step.

## Risks

- Scoring can feel arbitrary if only percentages are shown, so the UI should include attribute-level reasons.
- The analysis panel could become visually dense, so the first implementation should keep rankings short.
- Select duplication should be kept simple rather than introducing a shared component abstraction too early.

