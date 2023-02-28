---
sidebar_position: 1
---

# `Melon.std.time.setTimeout(action, delay)`

Sets a timer which executes a function or specified piece of code once the timer expires.

Status: `unstable` <br />
Returns: `string`

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| action | `Function` | The function that will be executed after the delay |
| delay | `number` | The delay in milisseconds |

### Example usage

> **Note**
>
> This function is also available globally, so can be directly called without importing

```ts
function helloWorld() {
    console.log("Hello World!");
}

const timeoutId = setTimeout(helloWorld, 3000);
```