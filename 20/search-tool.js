const {createReadStream} = require("fs");
const {readFile} = require("fs");
const {stat, readdir} = require("fs").promises

let [rx, ...files] = process.argv.slice(2);
const regex = RegExp(rx);

async function search(path) {
  let stats;
  try {
    stats = await stat(path);
  } catch (error) {
    if (error.code != "ENOENT") throw error;
    else {
      console.warn(path + " does not exist");
      return;
    }
  }
  if (stats.isDirectory()) {
    return readdir(path).then((files) => searchDir(regex, files, path))
  } else {
    return readFile(path, 'utf8', (err, data) => searchFile(regex, data, path));
  }
}

function searchFile(regex, content, path) {
  if (regex.test(content))
    console.log(path);
}

function searchDir(regex, files, path) {
  files.forEach(file =>
    search(path + '/' + file)
  )
}

files.forEach(file => search(file));
