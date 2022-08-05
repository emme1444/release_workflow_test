(async () => {
  // console.log("Hello, World!");

  process.stdout.write("false");

  // 1. read `pubspec.yaml`
  // 2. read `pubspec.bak.yaml`
  // 3. extract version from each file contents
  //    1. iterate through lines
  //    2. extract version using regex `^version:\s*(\d+\.\d+\.\d+\+\d+)`
  // 4. compare versions
  // 5. output true or false to stdout
})();
