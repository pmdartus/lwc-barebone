import lwc from "@lwc/rollup-plugin";
import resolve from '@rollup/plugin-node-resolve';
import replace from "@rollup/plugin-replace";

const __ENV__ = process.env.NODE_ENV ?? "development";

debugger;

export default {
  input: "src/main.js",

  output: {
    file: "dist/main.js",
    format: "esm",
  },

  plugins: [
    resolve(),
    replace({
      "process.env.NODE_ENV": JSON.stringify(__ENV__),
      preventAssignment: true
    }),
    lwc(),
  ],
};
