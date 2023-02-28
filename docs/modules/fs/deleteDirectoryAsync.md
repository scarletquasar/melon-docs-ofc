---
sidebar_position: 15
---

# `Melon.std.fs.deleteDirectoryAsync(path)`

Removes the specified directory from the system.

Status: `stable` <br />
Returns: `Promise<void>`

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| path | `string` | The target path to the directory |

### Example usage

```ts
const { deleteDirectoryAsync } = Melon.fs;
await deleteDirectoryAsync("./myDirectory");
```