# PostApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**postDeletePost**](#postdeletepost) | **POST** /Post/delete | |
|[**postGet**](#postget) | **GET** /Post | |
|[**postPost**](#postpost) | **POST** /Post | |
|[**postPut**](#postput) | **PUT** /Post | |

# **postDeletePost**
> BooleanApiResponse postDeletePost()


### Example

```typescript
import {
    PostApi,
    Configuration,
    DeletePostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PostApi(configuration);

let deletePostRequest: DeletePostRequest; // (optional)

const { status, data } = await apiInstance.postDeletePost(
    deletePostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deletePostRequest** | **DeletePostRequest**|  | |


### Return type

**BooleanApiResponse**

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

# **postGet**
> PostListResponseApiResponse postGet()


### Example

```typescript
import {
    PostApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PostApi(configuration);

let page: number; // (optional) (default to undefined)
let pageSize: number; // (optional) (default to undefined)
let categoryId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.postGet(
    page,
    pageSize,
    categoryId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] |  | (optional) defaults to undefined|
| **pageSize** | [**number**] |  | (optional) defaults to undefined|
| **categoryId** | [**string**] |  | (optional) defaults to undefined|


### Return type

**PostListResponseApiResponse**

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

# **postPost**
> PostResponseApiResponse postPost()


### Example

```typescript
import {
    PostApi,
    Configuration,
    CreatePostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PostApi(configuration);

let createPostRequest: CreatePostRequest; // (optional)

const { status, data } = await apiInstance.postPost(
    createPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createPostRequest** | **CreatePostRequest**|  | |


### Return type

**PostResponseApiResponse**

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

# **postPut**
> PostResponseApiResponse postPut()


### Example

```typescript
import {
    PostApi,
    Configuration,
    UpdatePostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PostApi(configuration);

let postId: string; // (optional) (default to undefined)
let updatePostRequest: UpdatePostRequest; // (optional)

const { status, data } = await apiInstance.postPut(
    postId,
    updatePostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updatePostRequest** | **UpdatePostRequest**|  | |
| **postId** | [**string**] |  | (optional) defaults to undefined|


### Return type

**PostResponseApiResponse**

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

