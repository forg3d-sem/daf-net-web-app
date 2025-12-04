# CategoryApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**categoryGet**](#categoryget) | **GET** /Category | |
|[**categoryPost**](#categorypost) | **POST** /Category | |

# **categoryGet**
> CategoryListResponseApiResponse categoryGet()


### Example

```typescript
import {
    CategoryApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CategoryApi(configuration);

let groupId: string; // (optional) (default to undefined)
let page: number; // (optional) (default to undefined)
let pageSize: number; // (optional) (default to undefined)
let search: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.categoryGet(
    groupId,
    page,
    pageSize,
    search
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**string**] |  | (optional) defaults to undefined|
| **page** | [**number**] |  | (optional) defaults to undefined|
| **pageSize** | [**number**] |  | (optional) defaults to undefined|
| **search** | [**string**] |  | (optional) defaults to undefined|


### Return type

**CategoryListResponseApiResponse**

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

# **categoryPost**
> CategoryResponseApiResponse categoryPost()


### Example

```typescript
import {
    CategoryApi,
    Configuration,
    CreateCategoryRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CategoryApi(configuration);

let createCategoryRequest: CreateCategoryRequest; // (optional)

const { status, data } = await apiInstance.categoryPost(
    createCategoryRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCategoryRequest** | **CreateCategoryRequest**|  | |


### Return type

**CategoryResponseApiResponse**

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

