---
sidebar_position: 1
---

# `Melon.std.process.exit(exitCode?)`

Exits the current process with an optional custom exit code.

Status: `stable` <br />
Returns: `never`

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| exitCode | `number?` | Thread exit code |

### Example usage

```ts
const { process } = Melon.std;

if (condition) {
    process.exit(1);
}

process.exit();
```