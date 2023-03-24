"use stricts";

const { fullPathPrint } = require("./src/parsers/import-full-path");

const languages = [
  {
    name: "javascript",
    parsers: ["import-full-path"],
  },
];

const parsers = {
  "import-full-path": {
	  parse:(t) => console.log(t),
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
