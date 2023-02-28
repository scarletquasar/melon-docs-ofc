---
sidebar_position: 2
---

# `Melon.std.process.env`

Contains the current process environment variables

Status: `stable` <br />
Type: `Record<string, string | number | boolean>`

### Example usage

```ts
const { process } = Melon.std;

console.log(process.env.MY_VARIABLE);
```