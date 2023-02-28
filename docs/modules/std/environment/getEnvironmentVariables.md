---
sidebar_position: 1
---

# `Melon.std.environment.getEnvironmentVariables()`

Returns all the `global` and `local` environment variables.

Status: `stable` <br />
Returns: `Record<string, any>`

### Parameters

-

### Example usage

```ts
const { getEnvironmentVariables } = Melon.std.environment;
const env = getEnvironmentVariables();
console.log(env);
```

### Extra behaviors

-