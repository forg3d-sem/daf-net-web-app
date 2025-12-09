# SurveyStatusResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**surveyId** | **string** |  | [optional] [default to undefined]
**question** | **string** |  | [optional] [default to undefined]
**_options** | [**Array&lt;SurveyOptionResponse&gt;**](SurveyOptionResponse.md) |  | [optional] [default to undefined]
**hasVoted** | **boolean** |  | [optional] [default to undefined]
**votedOptionId** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { SurveyStatusResponse } from './api';

const instance: SurveyStatusResponse = {
    surveyId,
    question,
    _options,
    hasVoted,
    votedOptionId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
