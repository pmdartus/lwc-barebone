import lwc from "@lwc/rollup-plugin";
import replace from "@rollup/plugin-replace";

const __ENV__ = process.env.NODE_ENV ?? "development";

export default {
  input: "src/main.js",

  output: {
    file: "dist/main.js",
    format: "esm",
  },

  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify(__ENV__),
    }),
    lwc(),
  ],
};
