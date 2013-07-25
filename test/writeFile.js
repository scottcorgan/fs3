var test = require('tape');
var writeFile = require('./../lib/writeFile');

test('writeFile is a function', function (t) {
  t.plan(1);
  t.ok(typeof writeFile === 'function', 'is a function');
});

