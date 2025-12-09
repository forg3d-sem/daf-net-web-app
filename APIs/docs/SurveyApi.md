# SurveyApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**surveyResultsGet**](#surveyresultsget) | **GET** /Survey/results | |
|[**surveyStatusGet**](#surveystatusget) | **GET** /Survey/status | |
|[**surveyVotePost**](#surveyvotepost) | **POST** /Survey/vote | |

# **surveyResultsGet**
> SurveyResultsResponseApiResponse surveyResultsGet()


### Example

```typescript
import {
    SurveyApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SurveyApi(configuration);

let surveyId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.surveyResultsGet(
    surveyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **surveyId** | [**string**] |  | (optional) defaults to undefined|


### Return type

**SurveyResultsResponseApiResponse**

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

# **surveyStatusGet**
> SurveyStatusResponseApiResponse surveyStatusGet()


### Example

```typescript
import {
    SurveyApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SurveyApi(configuration);

let surveyId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.surveyStatusGet(
    surveyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **surveyId** | [**string**] |  | (optional) defaults to undefined|


### Return type

**SurveyStatusResponseApiResponse**

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

# **surveyVotePost**
> VoteSurveyResponseApiResponse surveyVotePost()


### Example

```typescript
import {
    SurveyApi,
    Configuration,
    VoteSurveyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new SurveyApi(configuration);

let voteSurveyRequest: VoteSurveyRequest; // (optional)

const { status, data } = await apiInstance.surveyVotePost(
    voteSurveyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **voteSurveyRequest** | **VoteSurveyRequest**|  | |


### Return type

**VoteSurveyResponseApiResponse**

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

