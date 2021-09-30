module.exports = {
  plugins: {
    "postcss-import": {}, // imports/merges css files
    tailwindcss: {
      config: "tailwind.config.js",
    },
    "postcss-custom-properties": {
      importFrom: "css/tokens.css",
    }, // IE11 support for css variables
    "postcss-flexbugs-fixes": {},
    "postcss-100vh-fix": {},
    "postcss-hover-media-feature": {},
    "postcss-preset-env": {
      autoprefixer: {
        flexbox: "no-2009",
      },
      stage: 3,
      features: {
        "custom-properties": false,
      },
    },
  },
};
