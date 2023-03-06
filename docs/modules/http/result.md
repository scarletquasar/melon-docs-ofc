---
sidebar_position: 4
---

# `Melon.http.result(statusCode, responseBody, responseHeaders?)`

Creates a result object with a specfic status code, response body and headers to be used as result of a http application endpoint.

Status: `stable` <br />
Returns: `HttpResult`

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