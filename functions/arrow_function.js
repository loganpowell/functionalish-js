import { log } from "../utils"

//
//     ___  ___               __
//    /  /  \  \      ______  \ \
//   /  /    \  \    /_____/   \ \
//  (  (      )  )   /_____/   / /
//   \  \    /  /             /_/
//    \__\  /__/
//

//basics

let implicit_return = a => `hello ${a}!`
implicit_return("you") //?

let factory = c => ({ a: "b", c })
factory("d") //?

let default_args = (x = "did you forget something?") => x
default_args() //?

let RHS_ternary = x => (x % 2 === 0 ? "even!" : "odd!")
RHS_ternary(3) //?

let RHS_expressions = x => (x++, x++, x)
log("RHS_expressions ->", RHS_expressions(0))

let invoke_hider = () => {
  let hidden = "🙈"
  return hidden
}

log("invoke_hider (function) ->", invoke_hider())

let IIFE_module = (() => {
  let hidden = "🙈"
  return hidden
})()

log("IIFE_module (value) ->", IIFE_module)

/* CLOSURES
A closure is the combination of a function 
bundled together (enclosed) with references 
to its surrounding state (the lexical environment).
*/

let thunk = (x = 0) => (y = 0) => y + x++

let escaped = [thunk()(), thunk()(), thunk()()]
log("thunk returned = scope escaped ->", escaped)

let glob = thunk()
log("global (glob) variable w/stateful closure ->", [glob(), glob(), glob()])

let arr1 = [2, 4, 6]
log("Array method storing closure (local) ->", arr1.map(thunk()))

let thunks = (t = thunk(3)) => [t(), t(), t()]
log("stateful thunk ->", thunks())
