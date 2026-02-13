
# GitHub Dark Anas VS Code Theme

This is a customized fork of the GitHub VS Code theme, focused on dark mode only, with personal modifications.

## Installation

### 1. Download and Install the .vsix

1. Download the latest `.vsix` file from the `build/` directory or generate your own (see below).
2. In VS Code, open the Command Palette (`Ctrl+Shift+P`), type `Extensions: Install from VSIX...`, and select your `.vsix` file.
3. Open the Command Palette again, search for `Color Theme`, and select `GitHub Dark Anas`.

## How to Generate Your Own .vsix After Edits (If Forked)

1. Make your changes to the theme files (for example, edit `themes/dark-anas.json`).
2. Open a terminal in the project directory.
3. Run:
   - `npm install` (if you haven't already)
   - `npm run build` (to build the theme files)
   - `npm run package` (to generate the `.vsix` file in the `build/` folder)
4. Install your new `.vsix` in VS Code as described above.

## Notes

- This fork only includes dark themes. All light themes have been removed.
- For more customization, edit the JSON files in the `themes/` directory.
- If you want to contribute or further customize, simply fork this repo and follow the steps above.
