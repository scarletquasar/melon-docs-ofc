---
sidebar_position: 12
---

# `Melon.std.fs.createDirectoryAsync(path)`

Creates a new directory with the specified path.

Status: `stable` <br />
Returns: `Promise<void>`

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| path | `string` | The target path to the file |

### Example usage

```ts
const { createDirectoryAsync } = Melon.fs;
await createDirectoryAsync("./myDirectory");
```