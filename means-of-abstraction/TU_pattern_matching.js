// wouldn't it be cool if we invoke on a value more complex than a primitive?
let matcher = args =>
  new EquivMap([
    [{ a: args.a }, () => `welcome ${args.a}`],
    [{ c: args.c }, () => `take a break ${args.c}`]
  ]).get(args) || (() => "i got nothin'")

// now we can deploy functions on an object value based on its key
let todo = matcher({ d: "learner" })
todo()

// let's make a pattern matcher with these (awesome) value-based semantics
let pattern_matcher = args => {
  let { a, b, c } = args
  return (
    new EquivMap([
      [{ a, b, c }, `${a} doin' it ${b} the ${c}`],
      [{ a, c }, `I ${c} you ${a} cuz you ${c} me!`],
      [{ c }, `do you ${c} me?`]
    ]).get(args) || "i got nothin'"
  )
}

pattern_matcher({ a: "just", b: "for", c: "likes" }) //?
pattern_matcher({ c: "likes" }) //?
pattern_matcher({ c: "dislike", a: "alot" }) //?

let guarded_matcher = args => {
  let { a, b, c } = args
  return new EquivMap([[{ a, b, [c > 3 && "c"]: c }, "guarded"]]).get(args) || "go away!"
}
guarded_matcher({ a: "a", b: "b", c: 4 }) //?
