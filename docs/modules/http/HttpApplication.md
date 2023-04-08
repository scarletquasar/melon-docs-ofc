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

app.get("/success", () => "Success!");
app.get("/error", () => http.result(500, "An error has occurred!"));
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

app.get("/success", () => "Success!");
app.get("/error", () => http.result(500, "An error has occurred!"));

console.log(app.getEndpoints());
```

### `HttpApplication.listen(port, host?)`

Creates a new listener to the current application, allowing the server to be accessed using different hosts and ports.

Status: `stable` <br />
Returns: `void`

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| port | `number` | Target port to open the server in |
| host? | `string` | Target host to open the server in (the default host will be used, if not provided) |

#### Example usage

```ts
const { http } = Melon;
const app = http.app();

app.listen(4000, "myhost");
```

### `HttpApplication.run()`

Executes the application immediately, hosting the server based on the configurations.

Status: `stable` <br />
Returns: `void`

#### Example usage

```ts
const { http } = Melon;
const app = http.app();

app.get("/success", () => "Success!");
app.get("/error", () => http.result(500, "An error has occurred!"));

app.run();
```