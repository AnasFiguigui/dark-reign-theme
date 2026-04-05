const fs = require("fs").promises;
const { variants } = require("./colors");
const getTheme = require("./theme");

const themes = [
  { file: "dark-reign-default.json", variant: "default" },
  { file: "dark-reign-blossom.json", variant: "blossom" },
  { file: "dark-reign-void.json", variant: "void" },
  { file: "dark-reign-inferno.json", variant: "inferno" },
  { file: "dark-reign-emerald.json", variant: "emerald" },
  { file: "dark-reign-ocean.json", variant: "ocean" },
];

fs.mkdir("./themes", { recursive: true })
  .then(() =>
    Promise.all(
      themes.map(({ file, variant }) =>
        fs.writeFile(
          `./themes/${file}`,
          JSON.stringify(getTheme({ variant: variants[variant] }), null, 2)
        )
      )
    )
  )
  .catch(() => process.exit(1));
