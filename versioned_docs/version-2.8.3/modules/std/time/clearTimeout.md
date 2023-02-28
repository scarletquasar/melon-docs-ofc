---
sidebar_position: 4
---

# `Melon.std.time.clearTimeout(identifier)`

Cancels a timed action which was previously established by a call to `Melon.std.time.setTimeout()`.

Status: `stable` <br />
Returns: `void`

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| identifier | `string` | The function that will be executed after the delay |

### Example usage

> **Note**
>
> This function is also available globally, so can be directly called without importing

```ts
function helloWorld() {
    console.log("Hello World!");
}

const timeoutId = setTimeout(helloWorld, 3000);

clearTimeout(timeoutId);
```