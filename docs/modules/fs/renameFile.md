---
sidebar_position: 5
---

# `Melon.std.fs.renameFile(path, newName)`

Renames a file to the new desired name.

Status: `stable` <br />
Returns: `void`

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| path | `string` | The target path to the file |
| newName | `string` | The new desired name |

### Example usage

```ts
const { renameFile } = Melon.fs;

renameFile("./hi.txt", "./hello.txt");
```