# MS Mail
A microservice for e-mail management


## Environment Variables

| Field | Type | Description | 
| ------------- | :---: | ------------- |
| NODE_ENV | String | The first name of the user to be added |
| lastName | String | The last name of the user to be added|
| email | String | The user's e-mail|
| password | String | The user;s password |



 - ```production```: Estado de produção
 - ```development```: Estado de desenvolvimento
 - ```test```: Estado de teste





# HTTP status codes

HTTP defines a bunch of meaningful status codes that can be returned from your API. These can be leveraged to help the API consumers route their responses accordingly. I've curated a short list of the ones that you definitely should be using:

200 OK - Response to a successful GET, PUT, PATCH or DELETE. Can also be used for a POST that doesn't result in a creation.
201 Created - Response to a POST that results in a creation. Should be combined with a Location header pointing to the location of the new resource
204 No Content - Response to a successful request that won't be returning a body (like a DELETE request)
304 Not Modified - Used when HTTP caching headers are in play
400 Bad Request - The request is malformed, such as if the body does not parse
401 Unauthorized - When no or invalid authentication details are provided. Also useful to trigger an auth popup if the API is used from a browser
403 Forbidden - When authentication succeeded but authenticated user doesn't have access to the resource
404 Not Found - When a non-existent resource is requested
405 Method Not Allowed - When an HTTP method is being requested that isn't allowed for the authenticated user
410 Gone - Indicates that the resource at this end point is no longer available. Useful as a blanket response for old API versions
415 Unsupported Media Type - If incorrect content type was provided as part of the request
422 Unprocessable Entity - Used for validation errors
429 Too Many Requests - When a request is rejected due to rate limiting


From github 

There are three possible types of client errors on API calls that receive request bodies:

Sending invalid JSON will result in a 400 Bad Request response.

HTTP/1.1 400 Bad Request
Content-Length: 35

{"message":"Problems parsing JSON"}
Sending the wrong type of JSON values will result in a 400 Bad Request response.

HTTP/1.1 400 Bad Request
Content-Length: 40

{"message":"Body should be a JSON object"}
Sending invalid fields will result in a 422 Unprocessable Entity response.

HTTP/1.1 422 Unprocessable Entity
Content-Length: 149

{
  "message": "Validation Failed",
  "errors": [
    {
      "resource": "Issue",
      "field": "title",
      "code": "missing_field"
    }
  ]
}

## Pagination


### Create Account

```
GET /endpoint/accounts/sign-up
```

Create an acccount

#### Body Parameters

| Field | Type | Description | 
| ------------- | :---: | ------------- |
| firstName | String | The first name of the user to be added |
| lastName | String | The last name of the user to be added|
| email | String | The user's e-mail|
| password | String | The user;s password |

**Example body**
```json 
{
    "name": "practicetag"
}
```
#### 200

### Find All

```
GET /endpoint/accounts
```

Return all accounts

#### Optional Parameters

| Parameter | Type | Default | Values  | Description | 
| ------------- | :---: | :---: | :---: | :---: | 
| ?page | int |  1 | >=1 | Specify the page of results to return |
| ?perPage | int |  10 | [1:100] | Specify the number of records to return in one request |
| ?order | string |  "asc" | ["asc", "desc"] | Control whether results are returned in ascending or descending order |
| ?orderBy | string |  "firstName" | ["firstName", "lastName"] | Control the field by which the collection is sorted |
