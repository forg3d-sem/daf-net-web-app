# GroupApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**groupGet**](#groupget) | **GET** /Group | |
|[**groupInvitePost**](#groupinvitepost) | **POST** /Group/invite | |
|[**groupKickPost**](#groupkickpost) | **POST** /Group/kick | |
|[**groupLeavePost**](#groupleavepost) | **POST** /Group/leave | |
|[**groupMembersGet**](#groupmembersget) | **GET** /Group/members | |
|[**groupPost**](#grouppost) | **POST** /Group | |
|[**groupPut**](#groupput) | **PUT** /Group | |

# **groupGet**
> GroupListResponseApiResponse groupGet()


### Example

```typescript
import {
    GroupApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupApi(configuration);

let page: number; // (optional) (default to undefined)
let pageSize: number; // (optional) (default to undefined)
let search: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.groupGet(
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

**GroupListResponseApiResponse**

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

# **groupInvitePost**
> GroupInviteResponseApiResponse groupInvitePost()


### Example

```typescript
import {
    GroupApi,
    Configuration,
    GroupInviteRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupApi(configuration);

let groupInviteRequest: GroupInviteRequest; // (optional)

const { status, data } = await apiInstance.groupInvitePost(
    groupInviteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupInviteRequest** | **GroupInviteRequest**|  | |


### Return type

**GroupInviteResponseApiResponse**

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

# **groupKickPost**
> GroupKickResponseApiResponse groupKickPost()


### Example

```typescript
import {
    GroupApi,
    Configuration,
    GroupKickRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupApi(configuration);

let groupKickRequest: GroupKickRequest; // (optional)

const { status, data } = await apiInstance.groupKickPost(
    groupKickRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupKickRequest** | **GroupKickRequest**|  | |


### Return type

**GroupKickResponseApiResponse**

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

# **groupLeavePost**
> GroupLeaveResponseApiResponse groupLeavePost()


### Example

```typescript
import {
    GroupApi,
    Configuration,
    GroupLeaveRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupApi(configuration);

let groupLeaveRequest: GroupLeaveRequest; // (optional)

const { status, data } = await apiInstance.groupLeavePost(
    groupLeaveRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupLeaveRequest** | **GroupLeaveRequest**|  | |


### Return type

**GroupLeaveResponseApiResponse**

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

# **groupMembersGet**
> ListGroupMembersResponseApiResponse groupMembersGet()


### Example

```typescript
import {
    GroupApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupApi(configuration);

let groupId: string; // (optional) (default to undefined)
let page: number; // (optional) (default to undefined)
let pageSize: number; // (optional) (default to undefined)
let search: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.groupMembersGet(
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

**ListGroupMembersResponseApiResponse**

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

# **groupPost**
> GroupResponseApiResponse groupPost()


### Example

```typescript
import {
    GroupApi,
    Configuration,
    GroupCreateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupApi(configuration);

let groupCreateRequest: GroupCreateRequest; // (optional)

const { status, data } = await apiInstance.groupPost(
    groupCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupCreateRequest** | **GroupCreateRequest**|  | |


### Return type

**GroupResponseApiResponse**

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

# **groupPut**
> GroupUpdateResponseApiResponse groupPut()


### Example

```typescript
import {
    GroupApi,
    Configuration,
    GroupUpdateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupApi(configuration);

let groupUpdateRequest: GroupUpdateRequest; // (optional)

const { status, data } = await apiInstance.groupPut(
    groupUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupUpdateRequest** | **GroupUpdateRequest**|  | |


### Return type

**GroupUpdateResponseApiResponse**

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

