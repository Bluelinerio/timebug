// https://github.com/ramda/ramda/wiki/Cookbook#diffobjs---diffing-objects-similar-to-guavas-mapsdifference
import {
  curry,
  pipe,
  useWith,
  map,
  objOf,
  has,
  both,
  always,
  evolve,
  prop,
  ifElse,
  groupBy,
  last,
  toPairs,
  fromPairs,
  mergeWith,
  merge,
  values,
  cond,
  apply,
  equals,
  __
} from "ramda";

export const groupObjBy = curry(
  pipe(
    // Call groupBy with the object as pairs, passing only the value to the key function
    useWith(groupBy, [useWith(__, [last]), toPairs]),
    map(fromPairs)
  )
);

export const diffObjs = pipe(
  useWith(mergeWith(merge), [
    map(objOf("leftValue")),
    map(objOf("rightValue"))
  ]),
  groupObjBy(
    cond([
      [
        both(has("leftValue"), has("rightValue")),
        pipe(
          values,
          ifElse(apply(equals), always("common"), always("difference"))
        )
      ],
      [has("leftValue"), always("onlyOnLeft")],
      [has("rightValue"), always("onlyOnRight")]
    ])
  ),
  evolve({
    common: map(prop("leftValue")),
    onlyOnLeft: map(prop("leftValue")),
    onlyOnRight: map(prop("rightValue"))
  })
);
