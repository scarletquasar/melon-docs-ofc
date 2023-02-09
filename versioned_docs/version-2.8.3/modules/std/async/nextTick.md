---
sidebar_position: 1
---

# `Melon.std.async.nextTick(delay?)`

Creates a new event loop branch with an optional execution delay and returns the ellapsed time.

Status: `stable` <br />
Returns: `number`

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| delay | `number?` | The delay that defines the execution behavior |

### Example usage

```ts
const { nextTick } = Melon.std.async;

async function branchedFunction1() {
    await nextTick(3000);
    console.log("Hello from asynchronous context 1!");
}

async function branchedFunction2() {
    await nextTick(1000);
    console.log("Hello from asynchronous context 2!");
}

async function contextCaller() {
    branchedFunction2();
    branchedFunction1();
}

contextCaller();
```

### Extra behaviors

| Condition | Consequence | Workaround |
| --------- | ----------- | ---------- |
| Calling the method in a sync context with non-null delay | The current thread will be blocked during the delay time | Consider using `await` or running this in an async context |
| Calling asynchronous functions that are using `nextTick` method inside `Promise.all` or `Promise.any` | All the tasks will be blocked and the actions will not happen as excepted | See issue [#256](https://github.com/MelonRuntime/Melon/issues/256) |