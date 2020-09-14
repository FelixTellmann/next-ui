var themeConfig = {
  light: {
    "--color-text": "#1c1c1c",
    "--color-background": "#fff",
    "--color-button": "#e2e8f0",
    "--color-button-secondary": "#edf2f7"
  },
  dark: {
    "--color-text": "#fff",
    "--color-background": "#171923",
    "--color-button": "rgb(255, 255, 255, 0.16)",
    "--color-button-secondary": "rgba(255, 255, 255, 0.08)"
  },
};

export var setThemeConfig = (inputTheme) => {
  if (inputTheme === "dark") {
    const theme = themeConfig.dark;
    for (let key in theme) {
      console.log(key, theme[key]);
      setCSSVar(key, theme[key]);
    }
    localStorage.setItem("theme", inputTheme);
  } else {
    const theme = themeConfig.light;
    for (let key in theme) {
      console.log(key, theme[key]);
      setCSSVar(key, theme[key]);
    }
    localStorage.setItem("theme", inputTheme);
  }
};

function setCSSVar(property, color) {
  document.documentElement.style.setProperty(property, color);
}

function getTheme() {
  try {
    setThemeConfig(localStorage.getItem("theme") || "light");
  } catch (err) {
    console.log(new Error("accessing theme has been denied"));
  }
}

getTheme();
