# 1.1.0

### Changed

- Rewrote theme generation source code — no longer depends on `@primer/primitives` or `chroma-js` at build time.
- Replaced complex light/dark primer-based color resolution with simple per-variant accent definitions.
- All 6 themes (Default, Blossom, Void, Inferno, Emerald, Ocean) are now generated from a single shared base with variant-specific accents.
- Hardcoded all base colors directly in source for full control and easier customization.
- Simplified `src/index.js`, `src/colors.js`, and `src/theme.js`.

# 1.0.4

### Changed

- Updated README to clarify how git staged file colors relate to the theme's ansiBrightGreen and user/hostname color.
- Added instructions for restoring the original green for staged files using git config.
- Added new theme: **Blossom**.


# Dark Reign VS Code Theme

## 1.0.3

### Added

- Added two new themes: **Emerald** and **Ocean**.

## 1.0.2

### Added

- Added two new themes: **Void** and **Inferno**.

## 1.0.1

### Initial Release

- First release of the customized Dark Reign theme.
- Based on a fork of the official GitHub VS Code theme, but includes only dark mode and personal modifications.
- All light themes and unused dark variants have been removed.
- Only `dark-reign.json` is included and maintained.
