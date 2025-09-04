module.exports = {
  presets: [["@babel/env", { targets: { node: "current" } }], "@babel/preset-typescript"],
  plugins: [
    ["@babel/plugin-transform-class-properties"],
    ["@babel/plugin-transform-typescript"],
    ["@babel/plugin-transform-runtime"],
  ],
};
