# AttachmentApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**attachmentPost**](#attachmentpost) | **POST** /Attachment | |

# **attachmentPost**
> attachmentPost()


### Example

```typescript
import {
    AttachmentApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AttachmentApi(configuration);

let file: File; // (optional) (default to undefined)

const { status, data } = await apiInstance.attachmentPost(
    file
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **file** | [**File**] |  | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

