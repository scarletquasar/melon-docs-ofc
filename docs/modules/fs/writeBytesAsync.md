---
sidebar_position: 4
---

# `Melon.std.fs.writeBytesAsync(path, content)`

Writes all the bytes inside a file, will create a new file if it not exist.

Status: `stable` <br />
Returns: `Promise<void>`

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| path | `string` | The target path to the file |
| content | `number[]` | The desired content of the file |

### Example usage

```ts
const { writeBytesAsync } = Melon.fs;

await writeBytesAsync("./hi.txt", [48, 65, 108, 108, 111]);
```