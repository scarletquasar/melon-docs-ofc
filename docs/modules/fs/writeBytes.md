---
sidebar_position: 3
---

# `Melon.std.fs.writeBytes(path, content)`

Writes all the bytes inside a file, will create a new file if it not exist.

Status: `stable` <br />
Returns: `void`

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| path | `string` | The target path to the file |
| content | `number[]` | The desired content of the file |

### Example usage

```ts
const { writeBytes } = Melon.fs;

writeBytes("./hi.txt", [48, 65, 108, 108, 111]);
```