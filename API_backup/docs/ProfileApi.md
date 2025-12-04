# ProfileApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**profilePost**](#profilepost) | **POST** /Profile | |
|[**profileSearchPost**](#profilesearchpost) | **POST** /Profile/search | |
|[**profileUserIdGet**](#profileuseridget) | **GET** /Profile/{userId} | |

# **profilePost**
> ProfileResponseApiResponse profilePost()


### Example

```typescript
import {
    ProfileApi,
    Configuration,
    ProfileUpdateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ProfileApi(configuration);

let profileUpdateRequest: ProfileUpdateRequest; // (optional)

const { status, data } = await apiInstance.profilePost(
    profileUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **profileUpdateRequest** | **ProfileUpdateRequest**|  | |


### Return type

**ProfileResponseApiResponse**

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

# **profileSearchPost**
> ProfileSearchResponse profileSearchPost()


### Example

```typescript
import {
    ProfileApi,
    Configuration,
    ProfileSearchRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ProfileApi(configuration);

let profileSearchRequest: ProfileSearchRequest; // (optional)

const { status, data } = await apiInstance.profileSearchPost(
    profileSearchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **profileSearchRequest** | **ProfileSearchRequest**|  | |


### Return type

**ProfileSearchResponse**

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

# **profileUserIdGet**
> ProfileResponseApiResponse profileUserIdGet()


### Example

```typescript
import {
    ProfileApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProfileApi(configuration);

let userId: string; // (default to undefined)

const { status, data } = await apiInstance.profileUserIdGet(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] |  | defaults to undefined|


### Return type

**ProfileResponseApiResponse**

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

