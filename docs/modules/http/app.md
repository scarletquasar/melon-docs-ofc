---
sidebar_position: 5
---

# `Melon.http.app(options?: { name, host, port, enableHttps? })`

Creates a `HttpApplication` object, used to configure a web api that can be directly based on REST principles.

Status: `stable` <br />
Returns: `HttpApplication`

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| statusCode | `number` | The result status code |
| responseBody | `any` | The result body |
| responseHeaders | `Record<string, any>?` | The result headers |

### Example usage

```ts
const { http } = Melon;
const helloWorld = () => http.result(200, "Hello World!");
```