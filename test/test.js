var test = require('tape');
var fs3 = require('./../index');

// Pull in tests
require('./stat');
require('./writeFile');
require('./readFile');

test('base file is an object', function (t) {
  t.plan(1);
  t.ok(typeof fs3 === 'object', 'is object');
});
