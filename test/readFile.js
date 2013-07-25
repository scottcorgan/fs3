var test = require('tape');
var readFile = require('./../lib/readFile');

test('readFile is a function', function (t) {
  t.plan(1);
  t.ok(typeof readFile === 'function', 'is a function');
});

