---
sidebar_position: 3
---

# `Melon.std.time.clearInterval(identifier)`

Cancels a timed, repeating action which was previously established by a call to `Melon.std.time.setInterval()`.

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

const timeoutId = setInterval(helloWorld, 3000);

clearInterval(timeoutId);
```