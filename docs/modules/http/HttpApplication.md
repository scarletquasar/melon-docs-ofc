---
sidebar_position: 7
---

# `Melon.http.HttpApplication (class)`

Http application object, used to run a web api that can be directly based on REST principles.

Status: `stable` <br />

## Instance Methods

### `HttpApplication.[get/post/put/path/delete/head/options](route, action)`

Creates a new endpoint in the target application with the defined method.

Status: `stable` <br />
Returns: `void`

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| route | `string` | Target route that will be recognized to show the specific action. Can contain patterns to catch route values |
| action | `Function<HttpComposedResponse | string | number | boolean | any[] | Record<any, any>>` | Function that will be executed each request and return data to the user |

#### Example usage

```ts
const { http } = Melon;
const app = http.app();

app.get("/", () => "Hello World!");
app.get("/hewwo", () => http.result(500, "Oopsie woopsie!"));
```

### `HttpApplication.getEndpoints()`

Returns an array containing all the registered http endpoints in the application.

Status: `stable` <br />
Returns: `HttpEndpoint[]`

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| route | `string` | Target route that will be recognized to show the specific action. Can contain patterns to catch route values |
| action | `Function<HttpComposedResponse | string | number | boolean | any[] | Record<any, any>>` | Function that will be executed each request and return data to the user |

#### Example usage

```ts
const { http } = Melon;
const app = http.app();

app.get("/", () => "Hello World!");
app.get("/hewwo", () => http.result(500, "Oopsie woopsie!"));

console.log(app.getEndpoints());
```


