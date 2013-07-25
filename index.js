var fs3 = {
  stat: require('./lib/stat'),
  readFile: require('./lib/readFile'),
  writeFile: require('./lib/writeFile')
};

fs3.exists = function () {};
fs3.rename = function () {};
fs3.rmdir = function () {};
fs3.mkdir = function () {};
fs3.readdir = function () {};
fs3.createReadStream = function () {};
fs3.createWriteStream = function () {};

module.exports = fs3;