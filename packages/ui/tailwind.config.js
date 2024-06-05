// module.exports = require("@firetur/configs/tailwind/tailwind.config.ts");

module.exports = {
  content: ["node_modules/preline/dist/*.js"],
  plugins: [
    require("@firetur/configs/tailwind/tailwind.config.ts"),
    require("preline/plugin"),
  ],
};
