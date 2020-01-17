const assert = require('assert');
const RangeList = require("./RangeList")

const rl = new RangeList();
rl.add([1, 5]);
assert(rl.output() === "[1, 5)")
rl.print();
// Should display: [1, 5)
rl.add([10, 20]);
assert(rl.output() === "[1, 5) [10, 20)")
rl.print();
// Should display: [1, 5) [10, 20)
rl.add([20, 20]);
assert(rl.output() === "[1, 5) [10, 20)")
rl.print();
// Should display: [1, 5) [10, 20)
rl.add([20, 21]);
assert(rl.output() === "[1, 5) [10, 21)")
rl.print();
// Should display: [1, 5) [10, 21)
rl.add([2, 4]);
assert(rl.output() === "[1, 5) [10, 21)")
rl.print();
// Should display: [1, 5) [10, 21)
rl.add([3, 8]);
assert(rl.output() === "[1, 8) [10, 21)")
rl.print();
// Should display: [1, 8) [10, 21)
rl.remove([10, 10]);
assert(rl.output() === "[1, 8) [10, 21)")
rl.print();
// Should display: [1, 8) [10, 21)
rl.remove([10, 11]);
assert(rl.output() === "[1, 8) [11, 21)")
rl.print();
// Should display: [1, 8) [11, 21)
rl.remove([15, 17]);
assert(rl.output() === "[1, 8) [11, 15) [17, 21)")
rl.print();
// Should display: [1, 8) [11, 15) [17, 21)
rl.remove([3, 19]);
assert(rl.output() === "[1, 3) [19, 21)")
rl.print();
// Should display: [1, 3) [19, 21)
console.log("Tests passed")