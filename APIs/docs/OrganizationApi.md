# OrganizationApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**organizationDelete**](#organizationdelete) | **DELETE** /Organization | |
|[**organizationGet**](#organizationget) | **GET** /Organization | |
|[**organizationPost**](#organizationpost) | **POST** /Organization | |
|[**organizationPut**](#organizationput) | **PUT** /Organization | |

# **organizationDelete**
> StringApiResponse organizationDelete()


### Example

```typescript
import {
    OrganizationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrganizationApi(configuration);

let organizationId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.organizationDelete(
    organizationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | (optional) defaults to undefined|


### Return type

**StringApiResponse**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organizationGet**
> OrganizationListResponseApiResponse organizationGet()


### Example

```typescript
import {
    OrganizationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrganizationApi(configuration);

let page: number; // (optional) (default to undefined)
let pageSize: number; // (optional) (default to undefined)
let search: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.organizationGet(
    page,
    pageSize,
    search
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] |  | (optional) defaults to undefined|
| **pageSize** | [**number**] |  | (optional) defaults to undefined|
| **search** | [**string**] |  | (optional) defaults to undefined|


### Return type

**OrganizationListResponseApiResponse**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organizationPost**
> OrganizationResponseApiResponse organizationPost()


### Example

```typescript
import {
    OrganizationApi,
    Configuration,
    OrganizationCreateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrganizationApi(configuration);

let organizationCreateRequest: OrganizationCreateRequest; // (optional)

const { status, data } = await apiInstance.organizationPost(
    organizationCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationCreateRequest** | **OrganizationCreateRequest**|  | |


### Return type

**OrganizationResponseApiResponse**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organizationPut**
> OrganizationResponseApiResponse organizationPut()


### Example

```typescript
import {
    OrganizationApi,
    Configuration,
    OrganizationUpdateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrganizationApi(configuration);

let organizationUpdateRequest: OrganizationUpdateRequest; // (optional)

const { status, data } = await apiInstance.organizationPut(
    organizationUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationUpdateRequest** | **OrganizationUpdateRequest**|  | |


### Return type

**OrganizationResponseApiResponse**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

