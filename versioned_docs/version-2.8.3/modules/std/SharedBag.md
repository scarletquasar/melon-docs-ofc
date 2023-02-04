---
sidebar_position: 4
---

# `SharedBag<T> (class)`

Transaction-guided data collection focused on being safe for concurrent operations.

Status: `stable` <br />

### Constructor Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ...content | `T[]` | Items to be added by default inside the collection |

### Example usage

```ts
const sharedBag = new SharedBag<number>(1, 2, 3, 4);
```

### Extra behaviors

-

## Instance Methods

### `SharedBag.beginTransaction()`

Begins a transaction and returns an specific uuid.

Status: `stable` <br />
Returns: `string`

#### Parameters

-

#### Example usage

```ts
const sharedBag = new SharedBag<number>(1, 2, 3, 4);
const transactionId = sharedBag.beginTransaction();
```

#### Extra behaviors

| Condition | Consequence | Workaround |
| --------- | ----------- | ---------- |
| Calling the method when there is an active transation running | An `Error` will be thrown because `SharedBag` can support only one transaction per time | Close the last active transaction before calling `beginTransaction` |

### `SharedBag.closeTransaction()`

Ends a transaction.

Status: `stable` <br />
Returns: `void`

#### Parameters

-

#### Example usage

```ts
const sharedBag = new SharedBag<number>(1, 2, 3, 4);
const transactionId = sharedBag.beginTransaction();
sharedBag.closeTransaction();
```

#### Extra behaviors

| Condition | Consequence | Workaround |
| --------- | ----------- | ---------- |
| Calling the method when there is no active transation running | An `Error` will be thrown because there is no transaction to be closed in that context | Start a new transaction using `beginTransaction` |

### `SharedBag.addFirst(value)`

Put a new value in the beginning of the collection and returns the new collection length.

Status: `stable` <br />
Returns: `number`

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| value | `T` | The value to be added in the beginning of the collection |

#### Example usage

```ts
const sharedBag = new SharedBag<number>(1, 2, 3, 4);
const transactionId = sharedBag.beginTransaction();
sharedBag.addFirst(0);
sharedBag.closeTransaction();
```

#### Extra behaviors

| Condition | Consequence | Workaround |
| --------- | ----------- | ---------- |
| Calling the method when there is no active transation running | An `Error` will be thrown because there is no transaction to execute the method in that context | Start a new transaction using `beginTransaction` |

### `SharedBag.addLast(value)`

Put a new value in the end of the collection and returns the new collection length.

Status: `stable` <br />
Returns: `number`

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| value | `T` | The value to be added in the beginning of the collection |

#### Example usage

```ts
const sharedBag = new SharedBag<number>(1, 2, 3, 4);
const transactionId = sharedBag.beginTransaction();
sharedBag.addLast(5);
sharedBag.closeTransaction();
```

#### Extra behaviors

| Condition | Consequence | Workaround |
| --------- | ----------- | ---------- |
| Calling the method when there is no active transation running | An `Error` will be thrown because there is no transaction to execute the method in that context | Start a new transaction using `beginTransaction` |