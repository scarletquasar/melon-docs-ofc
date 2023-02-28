---
sidebar_position: 11
---

# `Melon.std.fs.createDirectory(path)`

Creates a new directory with the specified path.

Status: `stable` <br />
Returns: `void`

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| path | `string` | The target path to the file |

### Example usage

```ts
const { createDirectory } = Melon.fs;
createDirectory("./myDirectory");
```