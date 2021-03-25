const fs = require("fs");
const getFilesRecursively = require("./get-files-in-folder");

const START_STR = "/// START";
const END_STR = "/// END";

const keepBetween = (text, start, end) => {
  let cleanText = "";

  const startPos = text.indexOf(start);
  const endPos = text.indexOf(end);
  if (startPos >= 0 && endPos >= 0) {
    cleanText += text.substring(startPos + start.length, endPos);
    cleanText += keepBetween(text.substring(endPos + end.length), start, end);
  }

  return cleanText;
};

const getFile = (filename) => {
  const text = fs.readFileSync(filename, { encoding: "utf8" });
  const cleanText = keepBetween(text, START_STR, END_STR);

  const lines = cleanText.split("\n");

  return lines
    .map((l) => {
      return l.startsWith("    ") ? l.substr(4) : l;
    })
    .join("\n")
    .trim();
};

const allFiles = getFilesRecursively("./src/examples/");

// Delete .js files because they are only generated to check if the typescript code is correct
allFiles
  .filter((file) => file.endsWith(".js"))
  .forEach((file) => {
    fs.unlinkSync(file);
  });

const files = allFiles.filter((file) => file.endsWith(".ts"));

const data = files.map((f) => ({
  name: f.slice("src/examples/".length),
  value: getFile(f),
}));

const OUT_FOLDER = "./build-examples/";

try {
  fs.mkdirSync(OUT_FOLDER);
} catch (e) {}

data.forEach((element) => {
  fs.writeFileSync(OUT_FOLDER + element.name, element.value, {
    encoding: "utf8",
  });
});

// fs.writeFileSync(
//   "./src/app/samples.ts",
//   `export const samples = ${JSON.stringify(data)}`
// );
