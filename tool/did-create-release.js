const fs = require("fs");
const path = require("path");

const pubspecPath = path.join(__dirname, "../pubspec.yaml");
const pubspecBakPath = path.join(__dirname, "../pubspec.bak.yaml");

(async () => {
  // console.log("Hello, World!");

  // process.stdout.write("false");
  process.exit(1);

  const pubspecContents = fs.readFileSync(pubspecPath);
  const pubspecBakContents = fs.readFileSync(pubspecBakPath);

  /** @type {(contents: string) => string} */
  const extractVersion = (contents) => {
    const re = /^version:\s*(\d+\.\d+\.\d+\+\d+)/gm;
    // const re = /^version:\s*([^\s]+)\s*$/gm;
    const match = re.exec(contents);
    if (match.length <= 0) {
      process.exit(1);
    }
    const version = match[1];
    return version;
  };

  const pubspecVersion = extractVersion(pubspecContents);
  const pubspecBakVersion = extractVersion(pubspecBakContents);

  const checkResult = pubspecVersion !== pubspecBakVersion ? "true" : "false";
  // const checkResult = (pubspecVersion !== pubspecBakVersion).toString();

  process.stdout.write(checkResult);
})();
