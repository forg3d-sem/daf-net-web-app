# CommentApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**commentGet**](#commentget) | **GET** /Comment | |
|[**commentPost**](#commentpost) | **POST** /Comment | |

# **commentGet**
> ListCommentsResponseApiResponse commentGet()


### Example

```typescript
import {
    CommentApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CommentApi(configuration);

let postId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.commentGet(
    postId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postId** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ListCommentsResponseApiResponse**

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

# **commentPost**
> CommentResponseApiResponse commentPost()


### Example

```typescript
import {
    CommentApi,
    Configuration,
    CreateCommentRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CommentApi(configuration);

let createCommentRequest: CreateCommentRequest; // (optional)

const { status, data } = await apiInstance.commentPost(
    createCommentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCommentRequest** | **CreateCommentRequest**|  | |


### Return type

**CommentResponseApiResponse**

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

