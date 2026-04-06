# Dark Reign Theme for VS Code

A modern, high-contrast dark theme inspired by GitHub Dark, with personal customizations for a sleek coding experience.

![Screenshot](https://raw.githubusercontent.com/AnasFiguigui/dark-reign-theme/main/images/screenshots.gif)

## Themes
- **Dark Reign** — Default blue accent
- **Dark Reign - Void** — Deep purple
- **Dark Reign - Inferno** — Fiery red/orange
- **Dark Reign - Emerald** — Green
- **Dark Reign - Ocean** — Cyan/teal
- **Dark Reign - Blossom** — Pink

## Features
- True dark mode for comfortable coding
- Enhanced syntax highlighting for readability
- Minimal, distraction-free UI
- 6 theme variants generated from a single shared base

### Git Staged Color (Required) ⚠️⚠️

By default, both your `git status` staged files and your terminal user/hostname will appear the same color, since both use `terminal.ansiGreen`.

If you want your staged files to use the original green (and not match the user/hostname color), you can override the color for staged files with this git command:

```sh
git config --global color.status.added "green bold"
```
This will make staged files use the default green.

## Installation

### From Marketplace
1. Search for "Dark Reign Theme" in the Extensions view.
2. Click Install.
3. Open the Command Palette (`Ctrl+Shift+P`), search for `Color Theme`, and select your preferred Dark Reign theme.

### Manual (.vsix)
1. Run `npm run package` to generate a `.vsix` file.
2. In VS Code, open the Command Palette (`Ctrl+Shift+P`), type `Extensions: Install from VSIX...`, and select your `.vsix` file.
3. Set the theme as above.

## Building from Source

```sh
npm install
npm run build
```

This generates the theme JSON files in the `themes/` directory.

## Customization
- Edit the JSON files in the `themes/` directory for advanced tweaks.
- Only dark themes included; light variants removed for focus.

## Contributing
Contributions, feedback, and suggestions are welcome! Fork the repo, make your changes, and submit a pull request. enjoy (*￣▽￣*)ブ !!

## License
MIT
