"use stricts";

const { fullPathPrint } = require("./src/parsers/import-full-path");
const Parser = require("acorn");

const languages = [
  {
    name: "javascript",
    parsers: ["import-full-path"],
  },
];

const parsers = {
  "import-full-path": {
    parse: (t) => {
      return Parser.parse(t, { ecmaVersion: 2020 });
    },
    astFormat: "import-full-path-AST",
  },
};

const printers = {
  "import-full-path-AST": {
    print: fullPathPrint,
  },
};

module.exports = {
  languages,
  parsers,
  printers,
};
