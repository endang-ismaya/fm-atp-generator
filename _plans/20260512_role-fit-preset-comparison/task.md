# Task: Role Fit Score and Preset Comparison

## Summary

Implement an `Analysis` tab for the FM24 ATP Generator that ranks current attribute values against tactical role targets and compares the current template against a selected player preset or role target.

## Scope

- Add Role Fit Score rankings for tactical roles.
- Add Preset Comparison against player profiles and role targets.
- Show category summaries and attribute-level deltas.
- Keep all work in vanilla HTML, CSS, and JavaScript.
- Preserve existing export behavior and `.atp` binary output.

## Acceptance Criteria

- Users can open an `Analysis` tab from the main tab bar.
- Users can see top matching roles for the current attribute values.
- Users can choose a player/profile or role/duty/level as a comparison target.
- Users can see an overall similarity score and sorted attribute deltas.
- Analysis updates when attributes are edited, presets are applied, or comparison controls change.
- Exported `.atp` files remain 89 bytes and unchanged except for user-edited mapped attributes.
- The UI remains usable on mobile widths.

## Planning Notes

The AGENTS instructions require linking new plans through `_ideas/related_links_manifest.yaml` and running `scripts/update_ideas_related_links.py --write`. This repository currently does not contain `_ideas/`, `_plans/`, or `scripts/`; `_plans/` is being created for this task. The ideas-link sync step is blocked until those project files exist.

