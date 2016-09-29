# Liberation-lite
Liberation-lite is a basic port of [Liberation](https://github.com/Razzile/Liberation) that runs on top of either 
[frida]() or [cycript]() (coming soon).

It is currently very incomplete and buggy.

Currently supported elements:
* Patch
```js
var p = new Patch(offset, data, [length]);
p.Apply(); // apply patch
p.Reset(); // reset patch
```
