---
sidebar_position: 17
---

# `Melon.std.fs.moveFile(path)`

Moves the specified file to the specified target.

Status: `stable` <br />
Returns: `void`

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| path | `string` | The target path |

### Example usage

```ts
const { moveFile } = Melon.fs;
moveFile("./hi.text", "./myDirectory/hi.txt");
```