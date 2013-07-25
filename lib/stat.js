module.exports = function (path, callback) {
  
  callback(null, {
    isFile: function () {
      return true;
    },
    isDirectory: function () {
      return true;
    }
  });
};