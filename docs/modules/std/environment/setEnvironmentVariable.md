---
sidebar_position: 2
---

# `Melon.std.environment.setEnvironmentVariable(key, value)`

Sets a **local** environment variable. This doesn't interact with external (OS) environment variables and is not persisted between application instance executions.

Status: `stable` <br />
Returns: `void`

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| key | `string` | The key of the environment variable |
| value | `any` | The value of the environment variable |

### Example usage

```ts
const { setEnvironmentVariable } = Melon.std.environment;
setEnvironmentVariable("MY_ENV", 1);
```

### Extra behaviors

-