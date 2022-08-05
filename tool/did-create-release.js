const fs = require("fs");
const path = require("path");

const pubspecPath = path.join(__dirname, "../pubspec.yaml");
const pubspecBakPath = path.join(__dirname, "../pubspec.bak.yaml");

(async () => {
  // console.log("Hello, World!");

  // process.stdout.write("false");
  process.exit(1);

  // 1. read `pubspec.yaml`
  const pubspecContents = fs.readFileSync(pubspecPath);

  // 2. read `pubspec.bak.yaml`
  const pubspecBakContents = fs.readFileSync(pubspecBakPath);

  // 3. extract version from each file contents
  //    1. iterate through lines
  //    2. extract version using regex `^version:\s*(\d+\.\d+\.\d+\+\d+)`
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

  // 4. compare versions
  const checkResult = pubspecVersion !== pubspecBakVersion ? "true" : "false";
  // const checkResult = (pubspecVersion !== pubspecBakVersion).toString();

  // 5. output true or false to stdout based on comparison
  process.stdout.write(checkResult);
})();
