---
sidebar_position: 2
---

# `Result<TError, TValue> (class)`

Result is a `Either` version directly focused in handling errors, it is more specific since `TLeft` is limited to be an `Error`.

Status: `stable` <br />

### Factory Methods

### `Result.left<TError>(error)`

Creates a left Either instance with the `Error` value filled.

Status: `stable` <br />
Returns: `Result<TError, unknown>`

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| error | `T extends Error` | The value to fill the left slot |

#### Example usage

```ts
const { Result } = Melon.std.functional;

const error = new Error("The condition is false");
const myValue = condition ? Result.right("The condition is true") : Result.left(error);
```

### `Result.right<TValue>(value)`

Creates a left Either instance with the `Error` value filled.

Status: `stable` <br />
Returns: `Result<unknown, TValue>`

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| value | `T extends Error` | The value to fill the left slot |

#### Example usage

```ts
const { Result } = Melon.std.functional;

const error = new Error("The condition is false");
const myValue = condition ? Result.right("The condition is true") : Result.left(error);
```

## Instance Methods

### `Result.match<T>(actionError, actionValue)`

Create an a pattern-matching based operation chain to the `Result` values. This is **inherited** from `Either`.

Status: `stable` <br />
Returns: `T`

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| actionError | `Function` | The operation to be called in case of the error not being `null` |
| actionValue | `Function` | The operation to be called in case of the value not being `null` |

#### Example usage

```ts
const { Result } = Melon.std.functional;

const myValue = condition ? Result.right("The condition is true") : Result.left(error);
const myDerivedValue = myValue.match<string>(
    error => error.message,
    value => value
);
```

### `Result.fold<T>(actionLeft, actionRight)`

Create an a pattern-matching based operation chain to the `Result` values. This is **inherited** from `Either`.

Status: `stable` <br />
Returns: `T`

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| actionLeft | `Function` | The operation to be called in case of the left value not being `null` |
| actionRight | `Function` | The operation to be called in case of the right value not being `null` |

#### Example usage

```ts
const { Result } = Melon.std.functional;

const myValue = condition ? Result.right("The condition is true") : Result.left(error);
const myDerivedValue = myValue.fold<string>(
    error => error.message,
    value => value
);
```