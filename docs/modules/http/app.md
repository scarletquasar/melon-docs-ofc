---
sidebar_position: 6
---

# `Melon.http.app(options?)`

HttpApplicationOptions: { name, host, port, enableHttps? }
Creates a `HttpApplication` object, used to configure a web api that can be directly based on REST principles.

Status: `stable` <br />
Returns: `HttpApplication`

### Types

```ts
interface HttpApplicationOptions {
    name: string;
    host: string;
    port: number;
    enableHttps: boolean;
}
```

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| options | `HttpApplicationOptions?` | Options to configure the application |

### Example usage

```ts
const { http } = Melon;
const app = http.app();
```