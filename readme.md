# Closure Assignment

1. Create a file named `util.js`.
2. In that file, export a function named `cut`.
3. Make a file called `index.js` where you will import this `cut` function and use it.
4. It should take a number as input, we can call it `n`.
5. It should return a function.
6. This returned function should take a string as input, and return the first `n` characters.
7. If `n` is negative, it should return the last `n` characters.
8. If `n` is zero, it should return the same string.

## Example

```js
import { cut } from "./util.js";

const firstFive = cut(5);
console.log(firstFive("Avengers")); // should print "Aveng"

const lastFour = cut(-4);
console.log(lastFour("Guardians")); // should print "ians"

const all = cut(0);
console.log(all("X-Men")); // should print "X-Men"
```
