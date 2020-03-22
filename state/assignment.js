// Assignment is the most powerful and dangerous operation... all bundled up in an innocuous `=` sign

//
//
//   ______
//  /_____/
//  /_____/
//
//
//

// ECMAScript has 5 data types that are passed by value
// `Boolean`, `null`, `undefined`, `String`, and `Number`, everything else is passed by reference (Array, Function, Object)
// these five types are known as "Primitives" and are immutable, i.e., you cannot change them (in memory) once they are created
// you may copy them and create derivatives with them, but you will always be allocating a new chunk of memory when you do.

let bool = true
let num = 12
num++ // effectively num = num + 1 (copy + 1)
num //?
bool //?
let str = "value" // this allocates memory
let ref1 = str // this creates a copy to "value" and allocates a new swathe of memory to hold it

ref1 = "reassigned" // mutation
ref1 //?

// one way to combat this is to use const
const lock = "assigned"
const ref2 = lock
ref2 = "noop"
