var test = require('tape');
var stat = require('./../lib/stat');

test('stat is a function', function (t) {
  t.plan(1);
  t.ok(typeof stat === 'function', 'is a function');
});

test('stat returns error or null', function (t) {
  t.plan(1);
  stat('/testing', function (err, stat) {
    t.error(err, 'error is null')
  });
});

test('can tell if it is a file', function (t) {
  t.plan(1);
  
  stat('file.txt', function (err, stats) {
    t.ok(stats.isFile(), 'is a file');
  });
});

test('can tell if it is a directory', function (t) {
  t.plan(1);
  
  stat('/testdir', function (err, stats) {
    t.ok(stats.isDirectory(), 'is a directory');
  });
});

