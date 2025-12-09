# LikeApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**likeTogglePost**](#liketogglepost) | **POST** /Like/toggle | |

# **likeTogglePost**
> ToggleLikeResponseApiResponse likeTogglePost()


### Example

```typescript
import {
    LikeApi,
    Configuration,
    ToggleLikeRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new LikeApi(configuration);

let toggleLikeRequest: ToggleLikeRequest; // (optional)

const { status, data } = await apiInstance.likeTogglePost(
    toggleLikeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **toggleLikeRequest** | **ToggleLikeRequest**|  | |


### Return type

**ToggleLikeResponseApiResponse**

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

