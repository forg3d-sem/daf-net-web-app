# AttachmentApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**attachmentAttachmentIdGet**](#attachmentattachmentidget) | **GET** /Attachment/{attachmentId} | |
|[**attachmentDelete**](#attachmentdelete) | **DELETE** /Attachment | |
|[**attachmentGet**](#attachmentget) | **GET** /Attachment | |
|[**attachmentPost**](#attachmentpost) | **POST** /Attachment | |

# **attachmentAttachmentIdGet**
> AttachmentResponseApiResponse attachmentAttachmentIdGet()


### Example

```typescript
import {
    AttachmentApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AttachmentApi(configuration);

let attachmentId: string; // (default to undefined)

const { status, data } = await apiInstance.attachmentAttachmentIdGet(
    attachmentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **attachmentId** | [**string**] |  | defaults to undefined|


### Return type

**AttachmentResponseApiResponse**

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

# **attachmentDelete**
> AttachmentDeleteResponseApiResponse attachmentDelete()


### Example

```typescript
import {
    AttachmentApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AttachmentApi(configuration);

let attachmentId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.attachmentDelete(
    attachmentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **attachmentId** | [**string**] |  | (optional) defaults to undefined|


### Return type

**AttachmentDeleteResponseApiResponse**

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

# **attachmentGet**
> AttachmentListResponseApiResponse attachmentGet()


### Example

```typescript
import {
    AttachmentApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AttachmentApi(configuration);

let page: number; // (optional) (default to undefined)
let pageSize: number; // (optional) (default to undefined)
let search: string; // (optional) (default to undefined)
let userId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.attachmentGet(
    page,
    pageSize,
    search,
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] |  | (optional) defaults to undefined|
| **pageSize** | [**number**] |  | (optional) defaults to undefined|
| **search** | [**string**] |  | (optional) defaults to undefined|
| **userId** | [**string**] |  | (optional) defaults to undefined|


### Return type

**AttachmentListResponseApiResponse**

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

# **attachmentPost**
> AttachmentResponseApiResponse attachmentPost()


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

**AttachmentResponseApiResponse**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

