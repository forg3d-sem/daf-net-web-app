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
    Configuration,
    CategoryListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CategoryApi(configuration);

let categoryListRequest: CategoryListRequest; // (optional)

const { status, data } = await apiInstance.categoryGet(
    categoryListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **categoryListRequest** | **CategoryListRequest**|  | |


### Return type

**CategoryListResponseApiResponse**

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

