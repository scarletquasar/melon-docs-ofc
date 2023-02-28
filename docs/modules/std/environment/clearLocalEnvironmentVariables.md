---
sidebar_position: 3
---

# `Melon.std.environment.clearLocalEnvironmentVariables()`

Clear all **local** environnment variables. This will not interact with OS environment variables.

Status: `stable` <br />
Returns: `void`

### Parameters

-

### Example usage

```ts
const { setEnvironmentVariable, clearLocalEnvironmentVariables } = Melon.std.environment;
setEnvironmentVariable("MY_ENV", 1);
clearLocalEnvironmentVariables();
```

### Extra behaviors

-