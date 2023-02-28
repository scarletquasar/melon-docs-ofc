---
sidebar_position: 14
---

# `Melon.std.fs.deleteDirectory(path)`

Removes the specified directory from the system.

Status: `stable` <br />
Returns: `void`

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| path | `string` | The target path to the directory |

### Example usage

```ts
const { deleteDirectory } = Melon.fs;
deleteDirectory("./myDirectory");
```