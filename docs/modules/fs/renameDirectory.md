---
sidebar_position: 19
---

# `Melon.std.fs.renameDirectory(path, newName)`

Renames the target directory.

Status: `stable` <br />
Returns: `void`

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| path | `string` | The target directory path |
| newName | `string` | The new name |

### Example usage

```ts
const { renameDirectory } = Melon.fs;
renameDirectory("./myDirectory", "documents");
```